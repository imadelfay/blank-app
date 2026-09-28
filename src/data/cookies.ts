import type { ImageMetadata } from 'astro';

export interface Cookie {
  name: string;
  description: string;
  /** Card background, keyed to the flavour. Defined as CSS custom properties in global.css. */
  tint: 'cocoa' | 'hazel' | 'caramel' | 'pistachio';
  /** Top-down photo on a transparent or plain background. Put files in src/assets/cookies/. */
  image?: ImageMetadata;
}

// Draft copy based on the public menu. Confirm names and descriptions with the brand team.
export const cookies: Cookie[] = [
  {
    name: 'The Classic',
    description: 'Slow-baked chocolate chip, fresh out of the oven every day.',
    tint: 'cocoa',
  },
  {
    name: 'Nutella Sea Salt',
    description: 'Filled with Nutella and finished with a pinch of sea salt.',
    tint: 'hazel',
  },
  {
    name: 'Lotus',
    description: 'Filled with Lotus biscuit cream.',
    tint: 'caramel',
  },
  {
    name: 'Pistachio Kunafa',
    description: 'Pistachio cookie filled with pistachio kunafa.',
    tint: 'pistachio',
  },
];
