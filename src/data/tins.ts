import type { ImageMetadata } from 'astro';

import ogTin from '../assets/tins/og-tin-scoop.jpg';
import doubleDecadenceTin from '../assets/tins/lotus-tin-scoop.jpg';
import nutellaTin from '../assets/tins/nutella-tin-scoop.jpg';

export interface Tin {
  slug: string;
  name: string;
  description: string;
  /** Square 2048x2048 shot. */
  image: ImageMetadata;
}

// Names follow the BATCH tin photo files; Double Decadence is assumed to be the chocolate + Lotus tin.
// Descriptions are drafts: confirm both with the brand team before launch.
export const tins: Tin[] = [
  {
    slug: 'the-og-tin',
    name: 'The OG',
    description: 'Our classic chocolate chip, baked soft in the tin with a molten chocolate centre.',
    image: ogTin,
  },
  {
    slug: 'double-decadence-tin',
    name: 'Double Decadence',
    description: 'Dark chocolate cookie dough with a gooey Lotus Biscoff heart. Bisc, Please in tin form.',
    image: doubleDecadenceTin,
  },
  {
    slug: 'nutella-dream-tin',
    name: 'Nutella Dream',
    description: 'Golden cookie dough, flowing Nutella and a pinch of sea salt on top.',
    image: nutellaTin,
  },
];
