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
 *
 * SOURCES OF TRUTH (do not invent content here):
 *  - Services, prices, durations, descriptions → the stylist's live Square
 *    Appointments menu. Names must match Square exactly (Form A gating keys
 *    off them). A service not in Square does not go on the site.
 *  - Bio, credentials, hours, policies → the stylist's Form B intake.
 *  - Reviews → real, attributable reviews only. Empty array hides the section.
 *
 * Bri: Square menu captured 2026-10-10; Form B intake submitted 2026-09-30.
 */

export type ServiceCategory = 'color' | 'cut' | 'extensions' | 'treatments' | 'consult';

export interface Service {
  /** Exact Square service name. */
  name: string;
  description: string;
  /** Display price. "from $X" / "Varies" when Square shows a variable price. */
  price: string;
  duration: string;
  category: ServiceCategory;
  /**
   * Color, lightener, or any chemical process. Drives Form A safety gating
   * (each chemical service needs a flat SHOW rule on Form A) and, once the
   * gate is verified live, routes the CTA to the consultation form first.
   */
  chemical?: boolean;
  /** Stylist requires a consultation before this service (per her Square menu). */
  consultFirst?: boolean;
  /** Restricted to existing/returning clients (per her Square menu). */
  existingClientsOnly?: boolean;
}

export interface GalleryItem {
  src: string;
  alt: string;
  tags: string[];
}

export interface Review {
  quote: string;
  author: string;
  source: string;
}

export interface EducationClass {
  name: string;
  description: string;
  details: string[];
}

// Bri's own photos (Form B upload + shoot, received 2026-10-17). Metadata stripped.
import briPortrait from '@/assets/bri-portrait.jpg';
import briBookNow from '@/assets/bri-book-now.jpg';
import briFusioDose from '@/assets/bri-fusio-dose.jpg';
import workBalayageBronde from '@/assets/work-balayage-bronde.jpg';
import workDimensionalCopper from '@/assets/work-dimensional-copper.jpg';
import workPrecisionCut from '@/assets/work-precision-cut.jpg';
import workColorStation from '@/assets/work-color-station.jpg';
// Teaching photos at Dada Salon from the prior build.
import contentShoot from '@/assets/img09.jpg';
import teaching from '@/assets/img10.jpg';

export const salon = {
  // ── Identity ──────────────────────────────────────────────
  stylistName: 'Abriena Michelle',
  brandName: 'Abriena Michelle · Hair Artistry',
  tagline: 'Hair that moves with your life.',
  heroSub:
    'Dimensional color, custom cuts, extensions, and scalp care — built around your goals, your routine, and the health of your hair.',
  quote: 'Pursuing passion to elevate confidence.',

  // About copy — the stylist's own words from her intake.
  bio: [
    "I'm originally from Colorado, but God has faithfully led me through different states and seasons, shaping both my life and my career behind the chair. Along the way, I've developed a deep passion for creating beautiful hair while keeping the health of the hair and scalp at the center of everything I do.",
    'For me, an appointment is about more than just the service. I want my chair to be a place where you can slow down, feel cared for, and leave feeling confident and refreshed in a rushed and busy world.',
    "Outside of the salon, I'm a wife and dog mom. You'll usually find me involved at church, spending time at the beach with my husband, or finding a new way to grow — whether that's learning another language, continuing my education, or reading.",
  ],

  // ── Location & contact ────────────────────────────────────
  // CONFIRM WITH BRI: address + phone were not on her intake; carried over
  // from the prior build. She chose "show address publicly".
  salonName: 'Dada Salon',
  address: '410 Atkinson Dr, Honolulu, HI 96814',
  city: 'Honolulu',
  region: 'HI',
  phone: '(719) 432-8581',
  phoneHref: 'tel:+17194328581',
  email: 'abirenamichelle@gmail.com',
  instagram: '@artistry.by.abri',
  instagramUrl: 'https://instagram.com/artistry.by.abri',
  hours: [
    { days: 'Tuesday', time: '10:00 AM – 1:00 PM' },
    { days: 'Thu – Sat', time: '10:00 AM – 6:00 PM' },
    { days: 'Sun, Mon, Wed', time: 'Closed' },
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
    // Canonical = Form A (261985830619065): the client consultation intake
    // Bri sends every new hair client. Conditional safety gating (chemical
    // history / safety / henna-metallic) is verified MANUALLY in Jotform —
    // do not edit the form via API/mapper. See docs/FORM-A-SPEC.md.
    formUrl: 'https://form.jotform.com/261985830619065',
    /**
     * Flip to true ONLY after the Form A go-live gate passes (chemical test +
     * inverse test, live submissions, every `chemical: true` service below
     * covered by a SHOW rule). While false, chemical services book directly in
     * Square — an unverified safety form must not sit in front of booking.
     */
    chemicalGateVerified: false,
  },

  // ── Footer credit (agency brand — only place it appears) ──
  agencyCredit: 'Site by Hawaii Web Works',

  // ── Stats (verifiable only) ───────────────────────────────
  stats: [
    { value: '7', label: 'Years Behind the Chair' },
    { value: 'Free', label: 'New Client Consultations' },
    { value: 'Dada', label: 'Salon Educator' },
  ],

  specialties: [
    'Dimensional Balayage',
    'Extensions',
    'Headspa',
    'Color Correction',
    'Kérastase Care Coach',
    'Bellami Extension Certified',
    'Scalp & Hair Specialist',
    'Salon Educator',
  ],

  // ── Services — mirrors the live Square menu (2026-10-10) ──
  services: [
    // Color
    {
      name: 'Dimensional Balayage',
      description:
        'Custom lightening intentionally placed throughout the hair for soft, natural dimension with a seamless grow-out.',
      price: 'from $350',
      duration: '3 hr 30 min+',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Partial Dimensional Balayage',
      description:
        'Custom lightening around the entire hairline and visible parts of the head. Ideal for refreshing existing color between full appointments.',
      price: '$250',
      duration: '2 hr 30 min+',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Face Framing Foil',
      description:
        'Custom lightening around the entire hairline to brighten and highlight your features. Great as a 3-month balayage maintenance appointment.',
      price: '$185',
      duration: '2 hr',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Full Color',
      description:
        'Complete color change from roots to ends. Perfect for a new look or refreshing grown-out color.',
      price: '$150',
      duration: '2 hr',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Roots + Toner',
      description:
        'Covers growth at the roots — blending or covering gray or natural root color — with a toner pulled through the ends. Blow dry included.',
      price: '$150',
      duration: '1 hr 50 min',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Toner',
      description:
        'Adds shine, refines tone, or refreshes existing color. Great between color appointments or to tone down current color.',
      price: 'from $100',
      duration: '1 hr 10 min+',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Root Touch Up for Gray (STYLE INCLUDED)',
      description:
        'Covers growth at the roots. Ideal for blending or covering gray or natural root color. Blow dry included.',
      price: '$115',
      duration: '1 hr 45 min',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Root Touch Up for Gray (NO STYLE)',
      description:
        'Covers growth at the roots. Ideal for blending or covering gray or natural root color. Does not include a blow dry.',
      price: '$95',
      duration: '2 hr',
      category: 'color',
      chemical: true,
    },
    {
      name: 'Color Correction',
      description:
        'For major shifts, uneven tones, or removing unwanted color — including box color, Sun-In, and color stains. Customized to your starting point; timing and pricing vary.',
      price: 'Varies',
      duration: 'Up to 5 hr',
      category: 'color',
      chemical: true,
      consultFirst: true,
    },

    // Cut & style
    {
      name: "Women's Haircut",
      description:
        'Custom cut designed for your face shape, lifestyle, and hair health. Includes double cleanse, condition, and style of choice — blowout, beach waves, or natural diffuse.',
      price: '$90',
      duration: '1 hr+',
      category: 'cut',
    },
    {
      name: "Men's Haircut",
      description: 'Tailored cut and style with a clean finish. Includes wash and style.',
      price: 'Varies',
      duration: '45 min',
      category: 'cut',
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
      name: 'Haircut Dusting',
      description:
        'Trim of 2 inches or less, or face-framing dusting, to maintain a cut already done by Abriena. Clean, straight hair required.',
      price: 'from $55',
      duration: '15 min+',
      category: 'cut',
      existingClientsOnly: true,
    },
    {
      name: 'Bang Trim / Neck Trim',
      description: 'Quick refresh to keep your haircut sharp between appointments.',
      price: '$20',
      duration: '15 min',
      category: 'cut',
      existingClientsOnly: true,
    },

    // Extensions
    {
      name: 'Extension Install',
      description:
        'A full new install or reinstall. New extension clients book an Extension Consultation first.',
      price: '$350',
      duration: '2 hr 30 min',
      category: 'extensions',
      consultFirst: true,
    },
    {
      name: 'Extension Move Up',
      description:
        'Move-up for extension beads on wefts no more than 5 weeks grown out. Arrive with clean, dry hair.',
      price: '$75',
      duration: '30 min',
      category: 'extensions',
      existingClientsOnly: true,
    },

    // Treatments
    {
      name: 'Headspa',
      description:
        'A full sensory reset for scalp and hair: microscopic scalp diagnosis, double cleanse, nourishing Kérastase masque, towel wrap, scalp stimulation, head/neck/shoulder massage, and a heated eye mask.',
      price: '$120',
      duration: '2 hr',
      category: 'treatments',
    },
    {
      name: 'Smoothing Treatment',
      description:
        "Organic smoothing treatment from the INCA or VARO line, customized for your hair. Manages frizz, body, or texture for up to 6 months.",
      price: '$300',
      duration: '3 hr',
      category: 'treatments',
      chemical: true,
    },

    // Consultations
    {
      name: 'Consultation',
      description:
        'A complimentary sit-down to talk through your hair goals, scalp health, and maintenance needs — options, pricing, and a personalized care plan before booking.',
      price: 'Free',
      duration: '30 min',
      category: 'consult',
    },
    {
      name: 'Extension Consultation',
      description:
        'Required for new extension clients. Color, length, maintenance, and pricing — all covered in one thorough consultation.',
      price: 'Free',
      duration: '30 min',
      category: 'consult',
    },
  ] as Service[],

  // ── Gallery — real client work Bri supplied ─────────────
  gallery: [
    { src: workBalayageBronde, alt: 'Soft bronde balayage with face-framing curtain bangs', tags: ['Color', 'Dimensional Balayage'] },
    { src: workDimensionalCopper, alt: 'Rich brunette with warm copper dimension', tags: ['Color', 'Dimensional Color'] },
    { src: workPrecisionCut, alt: 'Precision point-cutting on a client’s ends', tags: ['Cut & Style', 'Precision Cut'] },
    { src: workColorStation, alt: 'Lightener mixed and foils prepped at the color station', tags: ['Color', 'Behind the Chair'] },
  ] as GalleryItem[],

  // ── Imagery ───────────────────────────────────────────────
  images: {
    heroPortrait: briPortrait,
    heroSecondary: workBalayageBronde,
    about: briBookNow,
    aboutDetail: briFusioDose,
    education: teaching,
    educationDetail: contentShoot,
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

  // ── Education — her own description; no invented classes ──
  education: {
    intro:
      'Abriena teaches at Dada Salon and serves as a Kérastase Care Coach, combining her love for hair, education, and helping people find products and routines that truly support their hair goals.',
    topics: [
      {
        title: 'Salon Educator at Dada Salon',
        text: 'Pouring into newer stylists — sharing what she has learned and helping them build confidence behind the chair.',
      },
      {
        title: 'Kérastase Care Coach',
        text: 'Helping clients find the products and at-home routines that support their hair and scalp goals.',
      },
      {
        title: 'Scalp & Hair Health',
        text: 'Scalp and hair specialist, Bellami extension certified, with customized color at the core of her work.',
      },
    ],
    /** Only list a class Bri has confirmed. Undefined hides the class card. */
    nextClass: undefined as EducationClass | undefined,
  },

  // ── Reviews — real, attributable reviews only ─────────────
  // Bri's intake: "None yet." Section is hidden while this is empty.
  reviews: [] as Review[],

  // ── FAQ ───────────────────────────────────────────────────
  // CONFIRM WITH BRI: deposit amount ($85 vs $100) and no-show fee ($50 vs
  // $100) conflict in her written policy — not stated here until resolved.
  faq: [
    {
      q: 'Do I need a consultation before booking?',
      a: 'Color corrections and new extension installs require a consultation first — book the free Consultation or Extension Consultation on Square. For other services you can book directly. Not sure what you need? Book a free consultation and Abriena will build a plan with you.',
    },
    {
      q: 'What should I arrive with?',
      a: 'Come with clean, dry hair unless told otherwise. Extension move-ups and haircut dustings require clean hair. For color, avoid heavy product buildup.',
    },
    {
      q: "What's your cancellation policy?",
      a: 'Please give at least 24 hours’ notice to cancel or reschedule. Balayage and lightening appointments require a deposit to book, applied toward your final service total. With less than 24 hours’ notice, that deposit is forfeited; for all other appointments, a $50 fee is charged to the card on file. Arriving more than 15 minutes late may mean your appointment is shortened or rescheduled.',
    },
    {
      q: 'Which services are for existing clients only?',
      a: "Haircut Dusting, Bang / Neck Trim, and Extension Move Up are for existing clients. New clients are welcome to book a Women's Haircut or an Extension Consultation.",
    },
    {
      q: 'What products do you use?',
      a: 'Abriena is a Kérastase Care Coach and uses Kérastase for treatments and the headspa. Smoothing treatments use the INCA or VARO organic line, chosen for your hair.',
    },
  ],
};

export type SalonConfig = typeof salon;
