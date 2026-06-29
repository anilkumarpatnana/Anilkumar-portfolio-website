"""Edit the user-provided smiling photo to put him in a suit while keeping
the face IDENTICAL. Single output: anil_professional.png.
"""
import asyncio
import base64
import os
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")

SOURCE = Path("/tmp/anil_new_source.png")
OUT_DIR = Path("/app/frontend/public/assets")
OUT_DIR.mkdir(parents=True, exist_ok=True)
OUT = OUT_DIR / "anil_professional.png"

PROMPT = (
    "Edit THIS exact photograph. ABSOLUTE PRIORITY: keep the head, face, "
    "hair, smile, expression, skin tone and identity of the person EXACTLY "
    "as in the original photo — same face pixels, same smiling expression "
    "showing teeth, same eye shape, same nose, same lips, same eyebrows, "
    "same hairstyle. Do NOT regenerate, beautify, slim, or idealize the "
    "face in any way. He must remain perfectly recognizable as the SAME "
    "person. "
    "\n\nONLY change the following: "
    "1) Replace the orange polo shirt with a tailored dark navy business "
    "suit jacket worn over a crisp white dress shirt and a subtle dark "
    "navy/charcoal tie. Crop to head-and-upper-shoulders only — remove the "
    "watch, arms folded pose, and any visible hands. "
    "2) Replace the outdoor airport/garden background with a soft-blurred "
    "dark charcoal-grey studio backdrop. "
    "3) Soften the lighting on the face slightly for a studio-portrait "
    "feel, but keep the warm natural skin tone. "
    "\n\nKeep his head perfectly centered, facing the camera with the same "
    "warm smile from the original. Photorealistic, sharp focus on the "
    "face, natural skin texture (visible pores, do not over-smooth, do not "
    "airbrush). 1:1 square aspect ratio, high resolution."
)


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    image_b64 = base64.b64encode(SOURCE.read_bytes()).decode("utf-8")
    chat = LlmChat(
        api_key=api_key,
        session_id="anil-pro-final",
        system_message=(
            "You are a precise photo retoucher. You NEVER alter a person's "
            "face. You only restyle clothing, crop and background while "
            "leaving every facial pixel intact."
        ),
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=PROMPT, file_contents=[ImageContent(image_b64)])
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"text={(text or '')[:80]}, images={len(images or [])}")
    if not images:
        raise RuntimeError("No images returned")
    OUT.write_bytes(base64.b64decode(images[0]["data"]))
    print(f"Saved -> {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
