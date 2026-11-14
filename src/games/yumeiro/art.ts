/**
 * Bundled, project-generated artwork extracted from yumeiro_visual_assets.zip.
 * The assets are new interpretations, not original anime frames.
 * Files are served from /public so Vercel/Vite can load them without hotlinking.
 */
const root = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/yumeiro`;

export const characterArt: Record<string, string> = {
  "감딸기": `${root}/characters/gam-ddalgi.png`,
  "원가온": `${root}/characters/won-gaon.png`,
  "안도하": `${root}/characters/an-doha.png`,
  "서로진": `${root}/characters/seo-rojin.png`,
  "바닐라": `${root}/characters/vanilla.png`,
};

export const sceneArt = Array.from(
  { length: 10 },
  (_, index) => `${root}/backgrounds/stage-${String(index + 1).padStart(2, "0")}.webp`,
);

export const dessertArt = {
  strawberry: `${root}/desserts/strawberry.svg`,
  chocolate: `${root}/desserts/chocolate.svg`,
  creative: `${root}/desserts/creative.svg`,
} as const;
