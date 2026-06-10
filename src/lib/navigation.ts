import type { NavItem } from './types';
import { megaImages } from './images';

export const navigation: NavItem[] = [
  {
    label: 'Sarees',
    href: '/collections/sarees',
    columns: [
      {
        heading: 'By Fabric',
        links: [
          { label: 'Silk Sarees', href: '/collections/silk-edit' },
          { label: 'Organza Sarees', href: '/collections/organza-edit' },
          { label: 'Cotton Sarees', href: '/collections/cotton-stories' },
          { label: 'Georgette Sarees', href: '/collections/sarees' },
        ],
      },
      {
        heading: 'By Style',
        links: [
          { label: 'Embroidered', href: '/collections/sarees' },
          { label: 'Handwoven', href: '/collections/handcrafted-luxury' },
          { label: 'Printed', href: '/collections/sarees' },
          { label: 'Designer Drapes', href: '/collections/signature' },
        ],
      },
    ],
    featured: { title: 'The Silk Edit', href: '/collections/silk-edit', tone: 2, image: megaImages.Sarees },
  },
  {
    label: 'Lehengas',
    href: '/collections/lehengas',
    columns: [
      {
        heading: 'By Occasion',
        links: [
          { label: 'Wedding Lehengas', href: '/collections/wedding' },
          { label: 'Reception Lehengas', href: '/collections/lehengas' },
          { label: 'Festive Lehengas', href: '/collections/festive' },
          { label: 'Sangeet Lehengas', href: '/collections/lehengas' },
        ],
      },
      {
        heading: 'By Craft',
        links: [
          { label: 'Zardozi', href: '/collections/lehengas' },
          { label: 'Mirror Work', href: '/collections/lehengas' },
          { label: 'Threadwork', href: '/collections/lehengas' },
          { label: 'Hand Embroidered', href: '/collections/handcrafted-luxury' },
        ],
      },
    ],
    featured: { title: 'Wedding Lehengas', href: '/collections/wedding', tone: 0, image: megaImages.Lehengas },
  },
  {
    label: 'Bridal',
    href: '/collections/bridal-couture',
    columns: [
      {
        heading: 'Bridal Couture',
        links: [
          { label: 'Bridal Lehengas', href: '/collections/bridal-couture' },
          { label: 'Reception Gowns', href: '/collections/gowns' },
          { label: 'Trousseau Edit', href: '/collections/bridal-couture' },
          { label: 'Book an Appointment', href: '/contact' },
        ],
      },
      {
        heading: 'The Ceremony',
        links: [
          { label: 'Haldi', href: '/collections/festive' },
          { label: 'Mehendi', href: '/collections/festive' },
          { label: 'Sangeet', href: '/collections/festive' },
          { label: 'Bridesmaids', href: '/collections/festive' },
        ],
      },
    ],
    featured: { title: 'Bridal Couture', href: '/collections/bridal-couture', tone: 5, image: megaImages.Bridal },
  },
  { label: 'Kurta Sets', href: '/collections/kurta-sets' },
  { label: 'Anarkalis', href: '/collections/anarkalis' },
  { label: 'Co-Ord Sets', href: '/collections/co-ord-sets' },
  { label: 'Gowns', href: '/collections/gowns' },
  { label: 'New Arrivals', href: '/collections/new-arrivals' },
  { label: 'Festive', href: '/collections/festive' },
  { label: 'Wedding', href: '/collections/wedding' },
];
