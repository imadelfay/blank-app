// Single source of truth for brand details.
export const site = {
  name: 'BATCH',
  description:
    'BATCH is a UAE cookie brand baking fresh every day: classic chocolate chip, Nutella sea salt, Lotus and pistachio kunafa cookies, delivered in Dubai and Abu Dhabi.',
  hero: {
    headline: 'Fresh cookies. Baked daily.',
    subtext: 'Warm, gooey and delivered across Dubai and Abu Dhabi.',
    // MP4 files in public/media/ (e.g. '/media/hero.mp4'). Until set, the hero shows the still flat-lay photo.
    video: '',
    // Optional portrait (9:16) cut for phones.
    videoMobile: '',
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
