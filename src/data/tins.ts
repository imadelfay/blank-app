import type { ImageMetadata } from 'astro';

import ogTin from '../assets/tins/og-tin-scoop.jpg';
import chocolotusTin from '../assets/tins/lotus-tin-scoop.jpg';
import nutellaTin from '../assets/tins/nutella-tin-scoop.jpg';
import ogTinTop from '../assets/tins/og-tin-top.jpg';
import chocolotusTinTop from '../assets/tins/chocolotus-tin-top.jpg';
import nutellaTinTop from '../assets/tins/nutella-tin-top.jpg';

export interface Tin {
  slug: string;
  name: string;
  description: string;
  /** Square 2048x2048 shot of a spoon lifting a scoop out of the tin. */
  image: ImageMetadata;
  /** Optional overhead shot, shown first on hover-capable screens; hovering reveals `image`. */
  topImage?: ImageMetadata;
}

// Names and descriptions follow the Deliveroo menu (The Scoopable ... Tin).
export const tins: Tin[] = [
  {
    slug: 'the-og-tin',
    name: 'The OG',
    description: 'Oven-baked cookie dough, served hot in the tin with a rich dark chocolate centre.',
    image: ogTin,
    topImage: ogTinTop,
  },
  {
    slug: 'chocolotus-tin',
    name: 'Chocolotus',
    description: 'Double chocolate cookie dough, served hot in the tin with a Lotus spread centre.',
    image: chocolotusTin,
    topImage: chocolotusTinTop,
  },
  {
    slug: 'nutella-dream-tin',
    name: 'Nutella Dream',
    description: 'Oven-baked cookie dough, served hot in the tin with a molten Nutella centre.',
    image: nutellaTin,
    topImage: nutellaTinTop,
  },
];
