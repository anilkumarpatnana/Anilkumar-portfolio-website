"""Minimal-edit approach: keep the source photo's head/face PIXELS intact and
only swap the clothing + background. Two variants based on two source poses.
"""
import asyncio
import base64
import os
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")

OUT_DIR = Path("/app/frontend/public/assets")
OUT_DIR.mkdir(parents=True, exist_ok=True)


# (output_name, source_image_for_edit, edit_prompt)
JOBS = [
    (
        "anil_front.png",
        Path("/tmp/ref_a.jpg"),
        (
            "Edit THIS exact photograph. CRITICAL: keep the head, face, hair, "
            "skin tone, expression and identity of the person EXACTLY as they "
            "appear in the original photo — same pixels in the face/head area, "
            "NO regeneration of facial features, NO idealization, NO slimming. "
            "Only modify what is described below: "
            "1) Remove the phone, hands and arms from the frame. "
            "2) Replace his orange polo shirt with a tailored dark navy "
            "business suit jacket worn over a crisp white dress shirt and a "
            "subtle dark navy tie. Crop the body to show head-and-shoulders "
            "only. "
            "3) Replace the bathroom/mirror background with a soft-blurred "
            "dark charcoal grey studio backdrop. "
            "4) Apply soft, even, flattering studio lighting on the face. "
            "Keep the same head angle (slight 3/4 turn, gaze toward camera) "
            "and the same exact facial features. Photorealistic, sharp focus "
            "on the face, natural skin texture (do not over-smooth). 1:1 "
            "square aspect ratio, high resolution."
        ),
    ),
    (
        "anil_side.png",
        Path("/tmp/anil_original.jpg"),
        (
            "Edit THIS exact photograph. CRITICAL: keep the head, face, hair, "
            "skin tone, expression and identity of the person EXACTLY as they "
            "appear in the original photo — same pixels in the face/head area, "
            "NO regeneration of facial features, NO idealization, NO slimming. "
            "Only modify what is described below: "
            "1) Remove the phone, hands and arms from the frame. "
            "2) Replace his orange polo shirt with a tailored dark navy "
            "business suit jacket worn over a crisp white dress shirt and a "
            "subtle dark navy tie. Crop the body to show head-and-shoulders "
            "only. "
            "3) Replace the bathroom/mirror background with a soft-blurred "
            "dark charcoal grey studio backdrop. "
            "4) Apply soft, even, flattering studio lighting on the face. "
            "Keep the same head angle (looking to the side) and the same "
            "exact facial features. Photorealistic, sharp focus on the face, "
            "natural skin texture (do not over-smooth). 1:1 square aspect "
            "ratio, high resolution."
        ),
    ),
]


async def run_edit(prompt: str, source: Path, out: Path):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    image_b64 = base64.b64encode(source.read_bytes()).decode("utf-8")
    chat = LlmChat(
        api_key=api_key,
        session_id=f"anil-edit-v3-{out.stem}",
        system_message=(
            "You are a precise photo retoucher. You NEVER change a person's "
            "face. You only restyle their clothing, crop and background. "
            "Preserve facial identity at all costs."
        ),
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=prompt, file_contents=[ImageContent(image_b64)])
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"{out.name}: text={(text or '')[:80]}, images={len(images or [])}")
    if not images:
        raise RuntimeError("No images for " + out.name)
    out.write_bytes(base64.b64decode(images[0]["data"]))
    print(f"Saved -> {out} ({out.stat().st_size} bytes)")


async def main():
    for fname, source, prompt in JOBS:
        await run_edit(prompt, source, OUT_DIR / fname)


if __name__ == "__main__":
    asyncio.run(main())
