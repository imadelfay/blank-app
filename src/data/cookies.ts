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
import cakeByTheOcean from '../assets/cookies/cake-by-the-ocean.jpg';
import churroPlease from '../assets/cookies/churro-please.jpg';
import crumble from '../assets/cookies/crumble.jpg';
import spreadableLove from '../assets/cookies/spreadable-love.jpg';
import theBatman from '../assets/cookies/the-batman.jpg';
import blackAndBougie from '../assets/cookies/black-and-bougie.jpg';
import tripleThreat from '../assets/cookies/triple-threat.jpg';
import kinderEra from '../assets/cookies/kinder-era.jpg';
import brownieXNutella from '../assets/cookies/brownie-x-nutella.jpg';
import islandTime from '../assets/cookies/island-time.jpg';
import prettyInPink from '../assets/cookies/pretty-in-pink.jpg';
import jamSession from '../assets/cookies/jam-session.jpg';

export interface Cookie {
  slug: string;
  name: string;
  description: string;
  /** Portrait 1080x1920 shot with the product in the centred square, or a square shot. */
  image: ImageMetadata;
  /** Optional top-down shot, shown first on hover-capable screens; hovering reveals `image`. */
  topImage?: ImageMetadata;
  /** Recently added to the menu; shows a "New" tag on the card. */
  isNew?: boolean;
}

// Names come from the BATCH photo library and the Deliveroo menu; new-cookie descriptions are
// based on the Deliveroo menu copy. Descriptions are drafts written from the photos
// and the public menu: confirm them with the brand team before launch.
export const cookies: Cookie[] = [
  {
    slug: 'shes-a-classic',
    name: "She's a Classic",
    description: 'Slow-baked chocolate chip with big, melty chocolate buttons.',
    image: shesAClassic,
  },
  {
    slug: 'kind-of-nuts',
    name: 'Kind of Nuts',
    description: 'Chocolate chip with a molten Nutella centre and flaky sea salt.',
    image: kindOfNuts,
  },
  {
    slug: 'the-billionaire',
    name: 'The Billionaire',
    description: 'Filled with pistachio kunafa, topped with white chocolate and crushed pistachio.',
    image: theBillionaire,
  },
  {
    slug: 'bisc-please',
    name: 'Bisc, Please',
    description: 'Double chocolate with a Lotus Biscoff centre and biscuit crumble.',
    image: biscPlease,
  },
  {
    slug: 'why-so-salty',
    name: 'Why So Salty?',
    description: 'Oozing salted caramel centre, caramel drizzle and sea salt.',
    image: whySoSalty,
  },
  {
    slug: 'the-girl-scout',
    name: 'The Girl Scout',
    description: "S'mores: toasted marshmallow, melted chocolate and a chocolate square on top.",
    image: theGirlScout,
  },
  {
    slug: 'death-by-chocolate',
    name: 'Death by Chocolate',
    description: 'Double chocolate, marshmallow middle, buried in chocolate shavings.',
    image: deathByChocolate,
  },
  {
    slug: 'el-chapo',
    name: 'El Chapo',
    description: 'Dark chocolate crinkle, dusted in sugar, milk chocolate inside.',
    image: elChapo,
  },
  {
    slug: 'michelle-pfeiffer',
    name: 'Michelle Pfeiffer',
    description: 'Golden cookie loaded with white chocolate chunks.',
    image: michellePfeiffer,
  },
  {
    slug: 'creme-de-la-creme',
    name: 'Crème de la Crème',
    description: 'Crème brûlée on a cookie, with a torched, crackly sugar top.',
    image: cremeDeLaCreme,
  },
  {
    slug: 'cake-by-the-ocean',
    name: 'Cake by the Ocean',
    description: 'Slow-baked cookie dough with a gooey Nutella filling and a sprinkle of sea salt.',
    image: cakeByTheOcean,
    isNew: true,
  },
  {
    slug: 'churro-please',
    name: 'Churro, Please',
    description: 'Cinnamon-sugar cookie with a cheesecake centre and a coffee caramel drizzle.',
    image: churroPlease,
    isNew: true,
  },
  {
    slug: 'crumble',
    name: 'Crumble',
    description: 'Soft cookie with a cheesecake filling under a buttery biscuit crumble.',
    image: crumble,
    isNew: true,
  },
  {
    slug: 'spreadable-love',
    name: 'Spreadable Love',
    description: 'Thick, golden cookie with a molten Nutella centre and flaky sea salt.',
    image: spreadableLove,
    isNew: true,
  },
  {
    slug: 'the-batman',
    name: 'The Batman',
    description: 'Half light, half dark: white and dark chocolate baked into one rich dough.',
    image: theBatman,
    isNew: true,
  },
  {
    slug: 'black-and-bougie',
    name: 'Black & Bougie',
    description: 'Double chocolate dough, creamy milk chocolate chips and everything chocolate.',
    image: blackAndBougie,
    isNew: true,
  },
  {
    slug: 'triple-threat',
    name: 'Triple Threat',
    description: 'Triple chocolate cookie with a peanut and chocolate filling.',
    image: tripleThreat,
    isNew: true,
  },
  {
    slug: 'kinder-era',
    name: 'Kinder Era',
    description: 'Gooey Kinder filling, crunchy Kinder pieces and Kinder chocolate bites.',
    image: kinderEra,
    isNew: true,
  },
  {
    slug: 'brownie-x-nutella',
    name: 'Brownie x Nutella',
    description: 'Double chocolate chip dough stuffed with gooey Nutella and fudgy brownie.',
    image: brownieXNutella,
    isNew: true,
  },
  {
    slug: 'island-time',
    name: 'Island Time',
    description: 'White chocolate chip dough with a crunchy coconut filling, mango and passion fruit.',
    image: islandTime,
    isNew: true,
  },
  {
    slug: 'pretty-in-pink',
    name: 'Pretty in Pink',
    description: 'White chocolate chip dough with a creamy cheesecake filling and strawberry compote.',
    image: prettyInPink,
    isNew: true,
  },
  {
    slug: 'jam-session',
    name: 'Jam Session',
    description: 'Milk chocolate chip dough with a peanut butter centre, topped with raspberry gel.',
    image: jamSession,
    isNew: true,
  },
];
