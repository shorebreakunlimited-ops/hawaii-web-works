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

import heroPortrait from '@/assets/demo/placeholder-hero.svg';
import products from '@/assets/demo/placeholder-products.svg';
import workingFoil from '@/assets/demo/placeholder-working.svg';
import balayageBack from '@/assets/demo/placeholder-balayage.svg';
import extensions from '@/assets/demo/placeholder-extensions.svg';
import headspa from '@/assets/demo/placeholder-headspa.svg';
import mensCut from '@/assets/demo/placeholder-cut.svg';
import blondeDuo from '@/assets/demo/placeholder-transform.svg';
import contentShoot from '@/assets/demo/placeholder-content.svg';
import teaching from '@/assets/demo/placeholder-teaching.svg';

/**
 * DEMO / TEMPLATE BUILD — not a real business.
 * This is the Hawaii Web Works salon template shown with placeholder
 * content so a prospective client can see layout, funnel, and photo
 * placement before their real content is dropped in. Deployed as its
 * own, separate Netlify site — never merged back into a client's `main`.
 */
export const DEMO_MODE = true;

export const salon = {
  // ── Identity ──────────────────────────────────────────────
  stylistName: '[Your Name]',
  brandName: '[Your Name] · [Your Specialty]',
  tagline: '[Your tagline goes here.]',
  heroSub:
    'This is placeholder copy showing where your intro paragraph will sit — a couple of sentences on what you do and who it’s for.',
  quote: '[A short quote or motto — optional.]',

  // ── Location & contact ────────────────────────────────────
  salonName: '[Your Salon Name]',
  address: '[Street Address], [City], [State] [ZIP]',
  city: '[City]',
  region: '[ST]',
  phone: '(555) 555-5555',
  phoneHref: 'tel:+15555555555',
  instagram: '@yourhandle',
  instagramUrl: 'https://instagram.com/',
  hours: [
    { days: 'Example Day', time: '10:00 AM – close' },
    { days: 'Example Day', time: 'By appointment' },
    { days: 'Example Day', time: 'By appointment' },
    { days: 'Example Days', time: 'Closed' },
  ],

  // ── Integrations (by ID — swap per stylist) ───────────────
  booking: {
    provider: 'square' as const,
    // Demo points at Square's own public site — never a real client's
    // booking calendar. Real deploys swap this to the client's URL.
    servicesUrl: 'https://squareup.com/us/en/appointments',
    checkoutUrl: 'https://squareup.com/us/en/appointments',
  },
  intakeForm: {
    provider: 'jotform' as const,
    // Demo intentionally has NO live form wired up — see Consult.tsx,
    // which renders a static flow/photo-placement mockup instead of a
    // Facade+iframe. Agents are prohibited from creating/editing real
    // Jotform forms (see docs/FORM-A-SPEC.md); real deploys get a real
    // form ID from the salon owner, verified manually before go-live.
    formUrl: '',
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
    '[Certification]',
    '[Specialty]',
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
      text: 'Everything is reviewed beforehand. Your appointment starts informed.',
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: {
    intro:
      '[Optional section — remove if not applicable.] Beyond the chair, [Your Name] teaches at [Your Salon Name] — training stylists on the specialties and consultation-first approach that build loyal clients.',
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
      name: '[Example Workshop Name]',
      description:
        'A hands-on workshop for licensed stylists. This block is optional — remove if you don’t teach.',
      details: [
        '[Your Salon Name] · [Address]',
        'Next cohort forming — dates announced soon',
        'Licensed stylists & assistants',
      ],
    },
  },

  // ── Reviews ───────────────────────────────────────────────
  // Sample review text — replace with real client reviews before launch.
  reviews: [
    {
      quote:
        '[Sample review] — the only person I trust with my hair. Listened to exactly what I wanted and delivered beyond my expectations.',
      author: 'Sample Client',
      source: 'Google Review',
    },
    {
      quote: '[Sample review] — the treatment was incredible, I’m a client for life now.',
      author: 'Sample Client',
      source: 'Google Review',
    },
    {
      quote:
        '[Sample review] — did my color in one session and it looked completely natural. So many compliments.',
      author: 'Sample Client',
      source: 'Instagram',
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faq: [
    {
      q: 'Do I need a consultation before booking color?',
      a: 'Color corrections and extension installs require a consultation first. For balayage, toner, or root touch-ups you can book directly. Unsure? Complete the new client form and [Your Name] follows up before your appointment.',
    },
    {
      q: 'What should I arrive with?',
      a: "Come with clean, dry hair unless told otherwise. Extension move-ups require clean, dry hair. For color, avoid heavy product buildup. If you filled out the consultation form, you'll receive specific prep instructions.",
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
      a: '[Sample answer] — describe the product lines and brands you use for treatments and retail here.',
    },
  ],
};

export type SalonConfig = typeof salon;
