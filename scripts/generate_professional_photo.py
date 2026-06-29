"""One-off script: edit a portrait photo to add a professional suit while
preserving the face/identity, using Gemini Nano Banana via the Emergent
universal LLM key. Output PNG is saved to /app/frontend/public/assets/.
"""
import asyncio
import base64
import os
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")

INPUT_PATH = Path("/tmp/anil_original.jpg")
OUTPUT_DIR = Path("/app/frontend/public/assets")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_PATH = OUTPUT_DIR / "anil_professional.png"

PROMPT = (
    "Edit this photo into a polished professional headshot suitable for a "
    "LinkedIn / corporate portfolio. STRICTLY preserve the person's exact "
    "face, facial features, skin tone, hairstyle and identity — do not "
    "alter the face in any way. Remove the phone and the orange polo shirt. "
    "Dress the person in a tailored dark navy business suit with a crisp "
    "white dress shirt and a subtle dark tie. Keep the same hand posture if "
    "natural but without the phone. Replace the bathroom background with a "
    "soft, blurred neutral studio background (dark charcoal grey). Use even "
    "soft studio lighting. Photorealistic, high resolution, sharp focus on "
    "the face. Output: square 1:1 aspect ratio."
)


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        raise RuntimeError("EMERGENT_LLM_KEY missing")

    image_b64 = base64.b64encode(INPUT_PATH.read_bytes()).decode("utf-8")

    chat = LlmChat(
        api_key=api_key,
        session_id="anil-portrait-edit",
        system_message="You are a professional photo retoucher.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )

    msg = UserMessage(text=PROMPT, file_contents=[ImageContent(image_b64)])

    text, images = await chat.send_message_multimodal_response(msg)
    print("text:", (text or "")[:160])

    if not images:
        raise RuntimeError("No images returned")

    image_bytes = base64.b64decode(images[0]["data"])
    OUTPUT_PATH.write_bytes(image_bytes)
    print(f"Saved {len(image_bytes)} bytes -> {OUTPUT_PATH}")


if __name__ == "__main__":
    asyncio.run(main())
