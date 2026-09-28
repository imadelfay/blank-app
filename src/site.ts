// Single source of truth for brand details.
export const site = {
  name: 'BATCH',
  description:
    'BATCH is a UAE cookie brand baking fresh every day: classic chocolate chip, Nutella sea salt, Lotus and pistachio kunafa cookies, delivered in Dubai and Abu Dhabi.',
  hero: {
    headline: 'Fresh cookies. Baked daily.',
    subtext: 'Warm, gooey and delivered across Dubai and Abu Dhabi.',
    // Hero clips, played in turn with a crossfade. MP4 files in public/media/ (e.g. '/media/hero-caramel.mp4').
    // Until at least one is set, the hero shows the still flat-lay photo.
    videos: [] as string[],
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
