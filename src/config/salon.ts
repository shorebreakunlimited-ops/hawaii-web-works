/**
 * salon.config.ts — THE multi-tenant config.
 *
 * Clone-per-stylist = copy this file, edit values, deploy.
 * No component should hardcode salon-specific copy, prices,
 * phone numbers, or integration IDs. Everything reads from here.
 *
 * Integrations: Square Appointments + Jotform are referenced by ID/URL
 * only. Both load behind facades (user interaction) to protect the
 * <2s load / Lighthouse 90+ quality bar.
 */

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'color' | 'cut' | 'extensions' | 'wellness';
  badge?: 'Most Booked' | 'Consult Required';
  /** true → CTA points at the consultation form first (chemical-risk gating) */
  consultFirst?: boolean;
}

export interface GalleryItem {
  src: string;
  alt: string;
  tags: string[];
}

import heroPortrait from '@/assets/img01.jpg';
import products from '@/assets/img02.jpg';
import workingFoil from '@/assets/img03.jpg';
import balayageBack from '@/assets/img04.jpg';
import extensions from '@/assets/img05.jpg';
import headspa from '@/assets/img06.jpg';
import mensCut from '@/assets/img07.jpg';
import blondeDuo from '@/assets/img08.jpg';
import contentShoot from '@/assets/img09.jpg';
import teaching from '@/assets/img10.jpg';

export const salon = {
  // ── Identity ──────────────────────────────────────────────
  stylistName: 'Abriena Michelle',
  brandName: 'Abriena Michelle · Hair Artistry',
  tagline: 'Hair that moves with your life.',
  heroSub:
    'Precision cuts, lived-in color, scalp health, and extension artistry — designed around your face shape, lifestyle, and the hair you actually want to live in.',
  quote: 'Pursuing passion to elevate your confidence.',

  // ── Location & contact ────────────────────────────────────
  salonName: 'Dada Salon',
  address: '410 Atkinson Dr, Honolulu, HI 96814',
  city: 'Honolulu',
  region: 'HI',
  phone: '(719) 432-8581',
  phoneHref: 'tel:+17194328581',
  instagram: '@artistry.by.abri',
  instagramUrl: 'https://instagram.com/artistry.by.abri',
  hours: [
    { days: 'Friday', time: '10:00 AM – close' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'By appointment' },
    { days: 'Mon – Thu', time: 'Closed' },
  ],

  // ── Integrations (by ID — swap per stylist) ───────────────
  booking: {
    provider: 'square' as const,
    servicesUrl:
      'https://book.squareup.com/appointments/n13fzqosyuelcj/location/LCT7CGP1MX3GK/services',
    checkoutUrl:
      'https://book.squareup.com/appointments/n13fzqosyuelcj/location/LCT7CGP1MX3GK/checkout',
  },
  intakeForm: {
    provider: 'jotform' as const,
    // NOTE: live-site embed. Bri's launch checklist references Form A
    // 261985830619065 — confirm canonical form, then swap the ID here.
    formUrl: 'https://form.jotform.com/261622378989070',
  },

  // ── Footer credit (agency brand — only place it appears) ──
  agencyCredit: 'Site by Hawaii Web Works',

  // ── Stats ─────────────────────────────────────────────────
  stats: [
    { value: '8+', label: 'Years Behind the Chair' },
    { value: '1.9K', label: 'Instagram Community' },
    { value: '5★', label: 'Client Rated' },
  ],

  specialties: [
    'Balayage',
    'Extensions',
    'Headspa',
    'Color Correction',
    'Kérastase Ambassador',
    'Salon Educator',
  ],

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      name: 'Dimensional Balayage',
      description:
        'Custom lightening placed throughout the hair for soft, natural dimension with a seamless grow-out.',
      price: '$350',
      duration: '2 hr 30 min',
      category: 'color',
      badge: 'Most Booked',
    },
    {
      name: "Women's Haircut",
      description:
        'Custom cut for your face shape, lifestyle, and hair health. Double cleanse, condition, and style of choice.',
      price: '$90',
      duration: '1 hr',
      category: 'cut',
    },
    {
      name: 'Headspa',
      description:
        'Full sensory reset. Microscopic scalp diagnosis, Kérastase masque, towel wrap, massage, and heated eye mask.',
      price: '$120',
      duration: '2 hr',
      category: 'wellness',
    },
    {
      name: 'Full Color',
      description:
        'Complete color change from roots to ends. Perfect for a new look or refreshing grown-out color.',
      price: '$150',
      duration: '2 hr',
      category: 'color',
    },
    {
      name: 'Partial Dimensional Balayage',
      description:
        'Custom lightening around the hairline and visual parts of the head. Ideal for refreshing existing color.',
      price: '$250',
      duration: '2 hr',
      category: 'color',
    },
    {
      name: 'Face Framing Foil',
      description:
        'Custom lightening around the entire hairline to brighten and highlight your features.',
      price: '$185',
      duration: '1 hr 45 min',
      category: 'color',
    },
    {
      name: 'Toner',
      description:
        'Adds shine, refines tone, or refreshes existing color. Great between color appointments.',
      price: '$120',
      duration: '1 hr 30 min',
      category: 'color',
    },
    {
      name: 'Root Touch Up',
      description:
        'Covers growth at the roots. Ideal for blending or covering grey or natural root color.',
      price: '$85',
      duration: '2 hr',
      category: 'color',
    },
    {
      name: 'Color Correction',
      description:
        'Major color shifts, uneven tones, or removing unwanted color. Includes box color, Sun-In, and color stains.',
      price: 'Varies',
      duration: 'Up to 5 hr',
      category: 'color',
      badge: 'Consult Required',
      consultFirst: true,
    },
    {
      name: 'Extension Install',
      description:
        'Full new install or reinstall. New clients require an extension consultation prior to booking.',
      price: '$350',
      duration: '2 hr 30 min',
      category: 'extensions',
      consultFirst: true,
    },
    {
      name: 'Luxury Blowout',
      description:
        'Double cleanse, condition, and style of choice — bouncy blowout, beachy waves, or natural diffuse.',
      price: '$55',
      duration: '1 hr',
      category: 'cut',
    },
    {
      name: "Men's Haircut",
      description: 'Tailored cut and style with a clean finish. Includes wash and style.',
      price: 'Varies',
      duration: '45 min',
      category: 'cut',
    },
  ] as Service[],

  // ── Gallery ───────────────────────────────────────────────
  gallery: [
    { src: balayageBack, alt: 'Dimensional balayage — soft lived-in blonde on dark hair', tags: ['Before / After', 'Color', 'Dimensional Balayage'] },
    { src: extensions, alt: 'Seamless extension install — row placement detail', tags: ['Extensions', 'Full Install'] },
    { src: headspa, alt: 'Headspa ritual — scalp treatment and massage', tags: ['Wellness', 'Headspa Ritual'] },
    { src: blondeDuo, alt: 'Full blonde transformation — before and after', tags: ['Before / After', 'Color', 'Full Blonde'] },
    { src: mensCut, alt: 'Tailored men’s haircut with clean fade', tags: ['Cut & Style', "Men's Cut"] },
    { src: workingFoil, alt: 'Foil work in progress — face framing placement', tags: ['Color', 'Face Framing Foil'] },
  ] as GalleryItem[],

  // ── Imagery ───────────────────────────────────────────────
  images: {
    heroPortrait,
    heroSecondary: balayageBack,
    about: workingFoil,
    aboutDetail: products,
    education: teaching,
    educationDetail: contentShoot,
    headspa,
  },

  // ── New-client steps ──────────────────────────────────────
  firstVisitSteps: [
    {
      title: 'Book your appointment',
      text: 'Use the Square booking above to choose your service and time.',
    },
    {
      title: 'Complete the form',
      text: 'Your hair history, current condition, and goals.',
    },
    {
      title: 'Upload your photos',
      text: 'Current hair and inspiration images — up to 10 total.',
    },
    {
      title: 'Arrive & enjoy',
      text: 'She reviews everything beforehand. Your appointment starts informed.',
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: {
    intro:
      'Beyond the chair, Abriena teaches at Dada Salon and works as a Kérastase Care Coach — training stylists on scalp health, lived-in color, and the consultation-first approach that builds loyal clients.',
    topics: [
      {
        title: 'Scalp & Hair Health Certification',
        text: 'The Kérastase headspa method — diagnosis, treatment, and retail that retains clients.',
      },
      {
        title: 'Lived-in Color Technique',
        text: 'Dimensional balayage and face-framing that grows out beautifully and books rebookings.',
      },
      {
        title: 'The Consultation-First Model',
        text: 'How to run intake that protects your time, prices correctly, and turns first-timers into regulars.',
      },
    ],
    nextClass: {
      name: 'Behind the Chair: Lived-in Color Intensive',
      description:
        'A hands-on workshop for licensed stylists. Master dimensional balayage, healthy lightening, and the consultation system that fills your book.',
      details: [
        'Dada Salon · 410 Atkinson Dr, Honolulu',
        'Next cohort forming — dates announced soon',
        'Licensed stylists & assistants',
      ],
    },
  },

  // ── Reviews ───────────────────────────────────────────────
  reviews: [
    {
      quote:
        'Abriena is the only person I trust with my hair. She listened to exactly what I wanted and delivered beyond my expectations.',
      author: 'Sarah M.',
      source: 'Google Review',
    },
    {
      quote:
        'The headspa was incredible. My scalp has never felt this healthy. I’m a client for life now.',
      author: 'Kealoha T.',
      source: 'Google Review',
    },
    {
      quote:
        'She did my extensions and color in one session and it looked completely natural. So many compliments.',
      author: 'Melissa R.',
      source: 'Instagram',
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faq: [
    {
      q: 'Do I need a consultation before booking color?',
      a: 'Color corrections and extension installs require a consultation first. For balayage, toner, or root touch-ups you can book directly. Unsure? Complete the new client form and Abriena follows up before your appointment.',
    },
    {
      q: 'What should I arrive with?',
      a: "Come with clean, dry hair unless told otherwise. Extension move-ups require clean, dry hair. For color, avoid heavy product buildup. If you filled out the consultation form, she'll send specific prep instructions.",
    },
    {
      q: 'How far in advance should I book?',
      a: 'Color corrections and extension installs book out 2–4 weeks. Cuts, blowouts, and standard color are usually 1–2 weeks out. Book early for weekend slots.',
    },
    {
      q: "What's your cancellation policy?",
      a: 'Please cancel or reschedule at least 24 hours ahead. Late cancellations and no-shows may incur a fee. Modify your appointment through the Square link in your confirmation text.',
    },
    {
      q: 'Is the Bang Trim available to new clients?',
      a: "The Bang / Neck Trim is complimentary for existing clientele only. New clients are welcome to book a Women's Haircut, which includes a full cut and style.",
    },
    {
      q: 'What products do you use?',
      a: 'Abriena is a certified Kérastase Care Coach and primarily uses Kérastase for treatments and retail. Smoothing treatments use the INCA or VARO organic line, chosen for your hair.',
    },
  ],
};

export type SalonConfig = typeof salon;
