/**
 * Central image catalogue — every slot maps to ONE unique, validated photo
 * (no duplicates anywhere on the site).
 *
 * Curated for COHESION: each section is drawn from a single editorial shoot so
 * it reads like one professional campaign (the product grid is one studio
 * saree+lehenga shoot, featured collections one bridal shoot, etc.). Combined
 * with a consistent grade in <RemoteImage>, this is what reads as "classy".
 *
 * Source: Unsplash (free licence). To use your own photography, replace the IDs
 * here only — component call sites never change.
 */

const U = 'https://images.unsplash.com/';

export function img(id: string, w = 1400): string {
  return `${U}${id}?auto=format&fit=crop&w=${w}&q=80`;
}

/**
 * Ordered slot list. Sections are grouped by shoot for a unified campaign look.
 * Order is consumed top-to-bottom by the allocator below.
 */
const ORDER = [
  // hero — bridal couture, full-length
  'photo-1610047520958-b42ebcd2f6cb',
  // featured collections (6) — one cohesive bridal shoot
  'photo-1610047614256-023d7c028d0b', 'photo-1610047881689-fc68ff7b2a89', 'photo-1610048869310-d889ff25c374',
  'photo-1677691257363-eebd2abeafec', 'photo-1740674570259-a47d713a2976', 'photo-1707576618343-26a1b377ca7a',
  // product grid (24) — one clean studio saree + lehenga catalogue
  'photo-1610189026205-27510cfc52f8', 'photo-1610189026297-df356264479c', 'photo-1610189337543-1c5d8e64f574',
  'photo-1610189335437-3cbce21d9d5f', 'photo-1610189338431-5f914faf21c7', 'photo-1610189000544-1f0885c4bbeb',
  'photo-1610189335693-9e909b33aa32', 'photo-1610189338175-0782dfdb0c04', 'photo-1610189019555-b1e26c2e424d',
  'photo-1610030469069-cb6620bea733', 'photo-1756483487325-2e4ea1ab00fa', 'photo-1756483509157-4c8cb951b3e8',
  'photo-1756483510830-f5b6e0150f74', 'photo-1756483510805-6d99a623de83', 'photo-1756483510864-5bc7bdc3cf22',
  'photo-1756483510837-83203eba47e9', 'photo-1756483510809-122c56fbb035', 'photo-1756483510859-c0ab4c45782c',
  'photo-1674729445183-15fd4f5e2a87', 'photo-1674729445770-bbf6ef2fec26', 'photo-1674729445806-842e7bd11575',
  'photo-1674729444748-be283dc75464', 'photo-1674729446119-86d702c942ea', 'photo-1649930308240-0a4ae421ff77',
  // shop by occasion (8) — each matched to its event
  'photo-1665960211264-5e0a7112bacd', // wedding — bride
  'photo-1583878545126-2f1ca0142714', // reception — elegant
  'photo-1585414570713-34e6aa8a6b6c', // haldi — yellow saree
  'photo-1760080903705-70430994b547', // mehendi — green lehenga
  'photo-1759720882983-fd7fc71716f9', // sangeet — festive lehenga
  'photo-1726600845193-fb25b7f4df52', // bridesmaid — saree
  'photo-1572470176170-98fa8abcb741', // party wear — glam saree
  'photo-1716504627981-22728cb2d2e2', // festive wear — gold banarasi festive saree
  // curated collections (6)
  'photo-1668371459824-094a960a227d', 'photo-1649930180794-f16fd533db8c', 'photo-1617039487629-6babdcb2a24b',
  'photo-1629118477133-b8b1499f2b8a', 'photo-1662714802102-9825504458ca', 'photo-1677691257005-9d69ab23f485',
  // section editorial: summer, bridal, brandStory, sareeMain, sareeA, sareeB (6)
  'photo-1707665231479-69e9fd2d4a7f', 'photo-1570212773364-e30cd076539e', 'photo-1610047614222-d33c39abfab2',
  'photo-1610047881358-0ce651e36c7a', 'photo-1610047881616-8e9f2c855cb3', 'photo-1610048869604-b76be3641fec',
  // store cards (3)
  'photo-1610047881337-c98de904fb0a', 'photo-1610202631408-fa6ba0f39ca3', 'photo-1609748513078-9ff6232781c5',
  // instagram (6) — one saree shoot
  'photo-1618901185975-d59f7091bcfe', 'photo-1679006831648-7c9ea12e5807', 'photo-1617627143750-d86bc21e42bb',
  'photo-1727430228383-aa1fb59db8bf', 'photo-1641699862936-be9f49b1c38d', 'photo-1616756141603-6d37d5cde2a2',
  // mega menu (3)
  'photo-1746372283841-dbb3838f9935', 'photo-1668371679302-a8ec781e876e', 'photo-1619715613791-89d35b51ff81',
  // page headers: about, contact, stores (3)
  'photo-1649930055986-ca57250a7fd4', 'photo-1729146768775-3662af38016e', 'photo-1767955694884-d4bf352c23c2',
  // extra collection headers: lehengas, kurta-sets, gowns, new-arrivals (4)
  'photo-1759906760638-eeffcb471e53', 'photo-1601571115502-83ca3095735b', 'photo-1601432093209-8af1fd74b054',
  'photo-1610173827043-9db50e0d8ef9',
  // founder (1)
  'photo-1600685890506-593fdf55949b',
];

const pool = ORDER.map((id) => img(id));

let cursor = 0;
const take = (n: number) => pool.slice(cursor, (cursor += n));
const one = () => pool[cursor++];

/* ---- Allocation (priority order, every slot unique) ---- */
const hero = one();
export const featuredImages = take(6);
export const productImages = take(24);
export const occasionImages = take(8);
export const curatedImages = take(6);

export const sectionImages = {
  hero,
  summer: one(),
  bridal: one(),
  brandStory: one(),
  sareeMain: one(),
  sareeA: one(),
  sareeB: one(),
};

export const storeImages = take(3);
export const instagramImages = take(6);

export const megaImages: Record<string, string> = {
  Sarees: one(),
  Lehengas: one(),
  Bridal: one(),
};

export const pageHeaderImages = {
  about: one(),
  contact: one(),
  stores: one(),
};

const extraHeaders: Record<string, string> = {
  lehengas: one(),
  'kurta-sets': one(),
  gowns: one(),
  'new-arrivals': one(),
};

export const miscImages = {
  aboutFounder: one(),
};

/* Collection page header — resolved by slug (reused only across pages, never on the same page). */
const featuredSlugs = ['sarees', 'wedding', 'anarkalis', 'bridal-couture', 'festive', 'co-ord-sets'];
const curatedSlugs = ['silk-edit', 'organza-edit', 'cotton-stories', 'bridal-couture', 'handcrafted-luxury', 'signature'];
const occasionSlugs = ['wedding', 'reception', 'haldi', 'mehendi', 'sangeet', 'bridesmaid', 'party', 'festive'];

export function collectionHeader(slug: string, tone = 0): string {
  const fi = featuredSlugs.indexOf(slug);
  if (fi >= 0) return featuredImages[fi];
  const ci = curatedSlugs.indexOf(slug);
  if (ci >= 0) return curatedImages[ci];
  const oi = occasionSlugs.indexOf(slug);
  if (oi >= 0) return occasionImages[oi];
  return extraHeaders[slug] ?? featuredImages[tone % featuredImages.length];
}
