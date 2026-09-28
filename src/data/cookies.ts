import type { ImageMetadata } from 'astro';

import shesAClassic from '../assets/cookies/shes-a-classic.jpg';
import kindOfNuts from '../assets/cookies/kind-of-nuts.jpg';
import michellePfeiffer from '../assets/cookies/michelle-pfeiffer.jpg';
import theBillionaire from '../assets/cookies/the-billionaire.jpg';
import biscPlease from '../assets/cookies/bisc-please.jpg';
import whySoSalty from '../assets/cookies/why-so-salty.jpg';
import deathByChocolate from '../assets/cookies/death-by-chocolate.jpg';
import theGirlScout from '../assets/cookies/the-girl-scout.jpg';
import elChapo from '../assets/cookies/el-chapo.jpg';
import cremeDeLaCreme from '../assets/cookies/creme-de-la-creme.jpg';

export interface Cookie {
  slug: string;
  name: string;
  description: string;
  /** Flavour colour, used for card tints and accents. */
  tint: string;
  /** Portrait 1080x1920 shot; the product sits in the centred square. */
  image: ImageMetadata;
}

// Names come from the BATCH photo library. Descriptions are drafts written from the photos
// and the public menu: confirm them with the brand team before launch.
export const cookies: Cookie[] = [
  {
    slug: 'shes-a-classic',
    name: "She's a Classic",
    description: 'Slow-baked chocolate chip with big, melty chocolate buttons.',
    tint: '#e9dccb',
    image: shesAClassic,
  },
  {
    slug: 'kind-of-nuts',
    name: 'Kind of Nuts',
    description: 'Chocolate chip with a molten Nutella centre and flaky sea salt.',
    tint: '#e6d6c6',
    image: kindOfNuts,
  },
  {
    slug: 'the-billionaire',
    name: 'The Billionaire',
    description: 'Filled with pistachio kunafa, topped with white chocolate and crushed pistachio.',
    tint: '#dfe6c8',
    image: theBillionaire,
  },
  {
    slug: 'bisc-please',
    name: 'Bisc, Please',
    description: 'Double chocolate with a Lotus Biscoff centre and biscuit crumble.',
    tint: '#ecd6c0',
    image: biscPlease,
  },
  {
    slug: 'why-so-salty',
    name: 'Why So Salty?',
    description: 'Oozing salted caramel centre, caramel drizzle and sea salt.',
    tint: '#efd9bf',
    image: whySoSalty,
  },
  {
    slug: 'the-girl-scout',
    name: 'The Girl Scout',
    description: "S'mores: toasted marshmallow, melted chocolate and a chocolate square on top.",
    tint: '#e8dcd0',
    image: theGirlScout,
  },
  {
    slug: 'death-by-chocolate',
    name: 'Death by Chocolate',
    description: 'Double chocolate, marshmallow middle, buried in chocolate shavings.',
    tint: '#ddd2cc',
    image: deathByChocolate,
  },
  {
    slug: 'el-chapo',
    name: 'El Chapo',
    description: 'Dark chocolate crinkle, dusted in sugar, milk chocolate inside.',
    tint: '#dcd6d3',
    image: elChapo,
  },
  {
    slug: 'michelle-pfeiffer',
    name: 'Michelle Pfeiffer',
    description: 'Golden cookie loaded with white chocolate chunks.',
    tint: '#efe3c9',
    image: michellePfeiffer,
  },
  {
    slug: 'creme-de-la-creme',
    name: 'Crème de la Crème',
    description: 'Crème brûlée on a cookie, with a torched, crackly sugar top.',
    tint: '#f1dfbd',
    image: cremeDeLaCreme,
  },
];
