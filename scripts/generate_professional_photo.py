"""Generate two professional headshot variants (front-facing and side/3-4) of
the user, preserving exact facial identity from the reference selfies."""
import asyncio
import base64
import os
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")

REFS = [
    Path("/tmp/ref_a.jpg"),  # clear 3/4 front-facing selfie
    Path("/tmp/anil_original.jpg"),  # original side-facing selfie
    Path("/tmp/ref_c.jpg"),  # additional reference
]
OUT_DIR = Path("/app/frontend/public/assets")
OUT_DIR.mkdir(parents=True, exist_ok=True)


VARIANTS = {
    "anil_front.png": (
        "Generate a polished, photorealistic corporate LinkedIn headshot of the "
        "EXACT same young Indian man shown in the reference selfies. Preserve "
        "his face, skin tone, eyes, eyebrows, nose, lips, jawline, and hair "
        "identically — same person, no facial changes. He is facing the camera "
        "DIRECTLY, looking straight at the lens with a soft confident smile. "
        "He is wearing a tailored dark navy business suit jacket, crisp white "
        "dress shirt, and a subtle dark tie. Shoulders square to camera, "
        "head straight. Background: smooth soft-blurred dark charcoal grey "
        "studio backdrop. Soft, even, flattering studio lighting with subtle "
        "rim light. Sharp focus on the face. Natural skin texture (do not "
        "over-smooth). 1:1 square aspect ratio, high resolution."
    ),
    "anil_side.png": (
        "Generate a polished, photorealistic corporate LinkedIn headshot of the "
        "EXACT same young Indian man shown in the reference selfies. Preserve "
        "his face, skin tone, eyes, eyebrows, nose, lips, jawline, and hair "
        "identically — same person, no facial changes. He is posed at a "
        "classic 3/4 angle: body turned about 30 degrees to his left, face "
        "turned slightly back toward the camera with a calm confident "
        "expression. He is wearing a tailored dark navy business suit jacket, "
        "crisp white dress shirt, and a subtle dark tie. Background: smooth "
        "soft-blurred dark charcoal grey studio backdrop. Soft, even, "
        "flattering studio lighting with subtle rim light on the right side. "
        "Sharp focus on the face. Natural skin texture (do not over-smooth). "
        "1:1 square aspect ratio, high resolution."
    ),
}


async def generate(prompt: str, out: Path):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    refs = [
        ImageContent(base64.b64encode(p.read_bytes()).decode("utf-8"))
        for p in REFS if p.exists()
    ]
    chat = LlmChat(
        api_key=api_key,
        session_id=f"anil-headshot-{out.stem}",
        system_message="You are a professional photo retoucher.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=prompt, file_contents=refs)
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"{out.name}: text={(text or '')[:80]}, images={len(images or [])}")
    if not images:
        raise RuntimeError("No images returned for " + out.name)
    out.write_bytes(base64.b64decode(images[0]["data"]))
    print(f"Saved -> {out} ({out.stat().st_size} bytes)")


async def main():
    for fname, prompt in VARIANTS.items():
        await generate(prompt, OUT_DIR / fname)


if __name__ == "__main__":
    asyncio.run(main())
