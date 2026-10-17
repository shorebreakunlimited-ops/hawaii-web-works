import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';

export default function Hero() {
  const words = salon.tagline.split(' ');

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-6 lg:pt-36">
        {/* Copy */}
        <div className="relative z-10">
          <Reveal>
            <p className="kicker">
              {salon.city} · {salon.salonName}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-6 text-[13.5vw] sm:text-6xl lg:text-[4.6rem]">
              {words.slice(0, 2).join(' ')}
              <br />
              <span className="italic text-mocha">{words.slice(2, 4).join(' ')}</span>
              <br />
              {words.slice(4).join(' ')}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-cocoa/80 sm:text-lg">
              {salon.heroSub}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#book" className="btn-primary">
                Book Appointment →
              </a>
              <a href="#consult" className="btn-outline">
                New Client? Start Here
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              <span className="text-[12px] uppercase tracking-[0.18em] text-taupe">
                Dimensional Balayage · Lived-in Color
              </span>
              <span className="text-[12px] uppercase tracking-[0.18em] text-taupe">
                Scalp &amp; Hair Health · Kérastase Care Coach
              </span>
            </div>
          </Reveal>
        </div>

        {/* Imagery */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-t-[10rem] rounded-b-3xl">
              <img
                src={salon.images.heroPortrait}
                alt={`${salon.stylistName} — hairstylist in ${salon.city}`}
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block lg:-left-10 lg:w-48">
              <img
                src={salon.images.heroSecondary}
                alt="Dimensional balayage result"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute right-3 top-6 rounded-full bg-ink/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-champagne backdrop-blur-sm">
              Free Consultations
            </div>
          </div>
        </Reveal>
      </div>

      {/* Specialties marquee */}
      <div className="border-y border-sand/70 bg-soft/60 py-4">
        <div className="flex overflow-hidden" aria-hidden>
          <div className="flex min-w-full shrink-0 animate-marquee items-center">
            {[...salon.specialties, ...salon.specialties].map((s, i) => (
              <span
                key={i}
                className="mx-6 flex items-center gap-6 whitespace-nowrap text-[13px] uppercase tracking-[0.24em] text-mocha/70"
              >
                {s} <span className="text-bronze">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
