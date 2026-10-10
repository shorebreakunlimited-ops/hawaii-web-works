import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Imagery */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={salon.images.about}
              alt={`${salon.stylistName} working on a lived-in color service`}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block lg:-right-8 lg:w-56">
            <img
              src={salon.images.aboutDetail}
              alt="Kérastase ritual products at the station"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
          <blockquote className="absolute -top-6 left-4 max-w-[240px] rounded-2xl bg-ink p-5 text-cream shadow-xl sm:-left-6">
            <p className="text-sm font-light italic leading-snug">“{salon.quote}”</p>
            <footer className="mt-2 text-[11px] uppercase tracking-[0.18em] text-champagne">
              — {salon.stylistName}
            </footer>
          </blockquote>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="kicker">The Stylist</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Meet <span className="italic text-mocha">Abriena</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            {salon.bio.map((para, i) => (
              <p key={i} className={`${i === 0 ? 'mt-6' : 'mt-4'} leading-relaxed text-cocoa/85`}>
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-sand pt-8">
              {salon.stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-3xl text-bronze sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-taupe">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={280}>
            <a href="#book" className="btn-primary mt-10">
              Book Your Visit →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
