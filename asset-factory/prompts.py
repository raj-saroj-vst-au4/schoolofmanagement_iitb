"""Shared brand/style prompt fragments for SJMSOM assets.

Prepend STYLE_PREFIX to every image prompt, append STYLE_SUFFIX after the
specific content. Keeps every generated asset within the same visual language.
"""

STYLE_PREFIX = (
    "Ultra-realistic cinematic photography, shot on ARRI Alexa 65 with 50mm prime, "
    "IMAX-grade detail, premium architectural brand photography aesthetic, "
    "inspired by Apple product films and Bloomberg Originals. "
    "Subject: "
)

STYLE_SUFFIX = (
    ". Deep blacks, crisp highlights, muted desaturated color grade with subtle "
    "teal-and-warm-steel palette, volumetric lighting, shallow depth of field, "
    "8K sharpness, tack-sharp focus, no motion blur on static elements, "
    "professional color correction. Architectural grandeur, sense of scale and "
    "quiet confidence. Shot during the golden hour for exterior, softbox-lit for "
    "interior. No lens flare artifacts. No text overlays."
)

NEGATIVE = (
    "cartoon, illustration, anime, painting, 3d render, cgi, plastic, waxy skin, "
    "oversaturated, lens flare, chromatic aberration artifact, motion blur, "
    "blurry, soft focus on subject, watermark, logo, text, signature, low quality, "
    "deformed, extra limbs, distorted, beauty filter, overexposed, crushed blacks, "
    "hdr halos, noise"
)

VIDEO_MOTION_HINTS = {
    "subtle_push_in": (
        "Camera slowly pushes in 3% while the scene remains naturally lit. "
        "Gentle ambient movement (leaves, dust motes, distant figures); "
        "main subject stable. Smooth 24fps cinematic motion."
    ),
    "slow_pan_right": (
        "Camera slowly pans horizontally from left to right across the scene. "
        "Parallax on foreground elements. Smooth cinematic motion."
    ),
    "ambient": (
        "Scene is largely static with gentle ambient life: wind in foliage, "
        "distant pedestrians, subtle light changes. No dramatic action."
    ),
    "time_lapse": (
        "Subtle time progression: cloud movement, shifting light quality, "
        "people walking through frame. Cinematic, unhurried."
    ),
}


def build_prompt(subject: str, *, extra: str = "") -> str:
    """Compose a final prompt from the subject fragment and optional extras."""
    body = subject.strip().rstrip(".")
    if extra:
        body = f"{body}. {extra.strip().rstrip('.')}"
    return f"{STYLE_PREFIX}{body}{STYLE_SUFFIX}"
