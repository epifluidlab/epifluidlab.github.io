import type { ImageMetadata } from 'astro';

// Every image in src/assets/images, so data files can keep using '/images/...' paths
// while Astro resizes and converts them at build time.
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,gif}',
  { eager: true },
);

export function img(path: string): ImageMetadata {
  const found = images[`/src/assets${path}`];
  if (!found) throw new Error(`Image not found: ${path} (images live in src/assets/images)`);
  return found.default;
}
