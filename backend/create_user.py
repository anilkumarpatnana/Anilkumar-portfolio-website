import os
import getpass

from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import bcrypt

load_dotenv()

async def create_user():
    mongo_url = os.environ["MONGO_URL"]
    db_name = os.environ["DB_NAME"]

    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]

    username = input("Enter username: ").strip()
    password = getpass.getpass("Enter password: ")

    password_hash = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    existing_user = await db.users.find_one({"username": username})

    if existing_user:
        print("User already exists.")
    else:
        await db.users.insert_one({
            "username": username,
            "password_hash": password_hash
        })
        print(f"User '{username}' created successfully.")

    client.close()


if __name__ == "__main__":
    import asyncio
    asyncio.run(create_user())
