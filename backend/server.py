from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import bcrypt
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# MongoDB connection
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# Create FastAPI app
app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://anilkumar-portfolio-website-git-feat-ca3524-anilkumarpatnana555.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create router with /api prefix
api_router = APIRouter(prefix="/api")


# =========================
# Models
# =========================

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc)
    )


class StatusCheckCreate(BaseModel):
    client_name: str


class LoginRequest(BaseModel):
    username: str
    password: str


class RegisterRequest(BaseModel):
    username: str
    password: str


# =========================
# Login
# =========================

@api_router.post("/login")
async def login(input: LoginRequest):

    user = await db.users.find_one({
        "username": input.username
    })

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    password_valid = bcrypt.checkpw(
        input.password.encode("utf-8"),
        user["password_hash"].encode("utf-8")
    )

    if not password_valid:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    return {
        "success": True,
        "message": "Login successful"
    }


# =========================
# Register
# =========================

@api_router.post("/register")
async def register(input: RegisterRequest):

    username = input.username.strip()

    if not username or not input.password:
        raise HTTPException(
            status_code=400,
            detail="Username and password are required"
        )

    if len(username) < 3:
        raise HTTPException(
            status_code=400,
            detail="Username must be at least 3 characters"
        )

    if len(input.password) < 6:
        raise HTTPException(
            status_code=400,
            detail="Password must be at least 6 characters"
        )

    existing_user = await db.users.find_one({
        "username": username
    })

    if existing_user:
        raise HTTPException(
            status_code=409,
            detail="Username already exists"
        )

    password_hash = bcrypt.hashpw(
        input.password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    await db.users.insert_one({
        "username": username,
        "password_hash": password_hash,
        "created_at": datetime.now(timezone.utc).isoformat()
    })

    return {
        "success": True,
        "message": "Registration successful"
    }


# =========================
# API Root
# =========================

@api_router.get("/")
async def root():
    return {
        "message": "Hello World"
    }


# =========================
# Status
# =========================

@api_router.post(
    "/status",
    response_model=StatusCheck
)
async def create_status_check(
    input: StatusCheckCreate
):

    status_dict = input.model_dump()

    status_obj = StatusCheck(
        **status_dict
    )

    doc = status_obj.model_dump()

    doc["timestamp"] = (
        doc["timestamp"].isoformat()
    )

    await db.status_checks.insert_one(doc)

    return status_obj


@api_router.get(
    "/status",
    response_model=List[StatusCheck]
)
async def get_status_checks():

    status_checks = await db.status_checks.find(
        {},
        {"_id": 0}
    ).to_list(1000)

    for check in status_checks:

        if isinstance(
            check["timestamp"],
            str
        ):
            check["timestamp"] = datetime.fromisoformat(
                check["timestamp"]
            )

    return status_checks


# =========================
# Include API routes
# =========================

app.include_router(api_router)


# =========================
# Logging
# =========================

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)


# =========================
# Shutdown
# =========================

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
