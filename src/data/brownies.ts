import type { ImageMetadata } from 'astro';

import classic from '../assets/brownies/classic.jpg';
import peanutButter from '../assets/brownies/peanut-butter.jpg';
import caramelSeaSalt from '../assets/brownies/caramel-sea-salt.jpg';
import galaxy from '../assets/brownies/galaxy.jpg';
import pistachioKunafa from '../assets/brownies/pistachio-kunafa.jpg';

export interface Brownie {
  slug: string;
  name: string;
  description: string;
  /** Square 2048x2048 shot of two stacked squares, the top one torn open. */
  image: ImageMetadata;
}

// Names follow the BATCH menu. Descriptions are drafts written from the product photo:
// confirm them with the brand team before launch.
export const brownies: Brownie[] = [
  {
    slug: 'classic-brownie',
    name: 'Classic',
    description: 'Dense, fudgy dark chocolate brownie with melty chocolate chunks.',
    image: classic,
  },
  {
    slug: 'peanut-butter-brownie',
    name: 'Peanut Butter',
    description: 'Fudgy chocolate brownie with a creamy peanut butter layer.',
    image: peanutButter,
  },
  {
    slug: 'caramel-sea-salt-brownie',
    name: 'Caramel Sea Salt',
    description: 'A gooey caramel layer and flakes of sea salt through fudgy chocolate.',
    image: caramelSeaSalt,
  },
  {
    slug: 'galaxy-brownie',
    name: 'Galaxy',
    description: 'Loaded with Galaxy chocolate and soft caramel pieces.',
    image: galaxy,
  },
  {
    slug: 'pistachio-kunafa-brownie',
    name: 'Pistachio Kunafa',
    description: 'Fudgy brownie with a pistachio cream layer and crispy kunafa.',
    image: pistachioKunafa,
  },
];
