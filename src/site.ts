// Single source of truth for brand details.
export const site = {
  name: 'BATCH',
  description:
    'BATCH is a UAE cookie brand baking fresh every day: classic chocolate chip, Nutella sea salt, Lotus and pistachio kunafa cookies, delivered in Dubai and Abu Dhabi.',
  hero: {
    headline: 'Fresh cookies. Baked daily.',
    subtext: 'Warm, gooey and delivered across Dubai and Abu Dhabi.',
    // Hero clips, played in turn with a crossfade. Files live in public/media/.
    // `poster` is the clip's first frame; `cookie` is the slug of the cookie it shows (for the corner label).
    // Until at least one clip is listed, the hero shows the still flat-lay photo.
    videos: [
      { src: '/media/hero-why-so-salty.mp4', poster: '/media/hero-why-so-salty.jpg', cookie: 'why-so-salty' },
      { src: '/media/hero-bisc-please.mp4', poster: '/media/hero-bisc-please.jpg', cookie: 'bisc-please' },
    ] as { src: string; poster: string; cookie: string }[],
  },
  // Where the order buttons send people. Leave a URL empty to hide that button.
  orderLinks: [
    { label: 'Talabat', url: 'https://www.talabat.com/uae/batch-cookies' },
    { label: 'Deliveroo', url: 'https://deliveroo.ae/menu/Dubai/al-barsha-3/batch-cookies-hessa-st' },
    { label: 'Careem', url: '' },
  ],
  social: {
    instagram: 'https://www.instagram.com/batch.uae/',
    tiktok: '',
  },
};
