import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="kicker !text-champagne">Find Me</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">
              Let's talk about <br />
              <span className="italic text-gold">your hair.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-cream/70">
              The fastest way to reach Abriena is an Instagram DM or booking directly through
              Square.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={salon.booking.servicesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-3.5 text-sm tracking-wide text-ink transition-colors hover:bg-gold"
              >
                Reserve Your Appointment →
              </a>
              <a
                href={salon.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                Follow on Instagram →
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-5">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salon.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 transition-colors hover:border-gold/40"
              >
                <span className="text-xl">📍</span>
                <span>
                  <span className="block text-sm text-cream/90">{salon.address}</span>
                  <span className="mt-1 block text-[12px] uppercase tracking-[0.16em] text-cream/50">
                    {salon.salonName}
                  </span>
                </span>
              </a>
              <a
                href={salon.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 transition-colors hover:border-gold/40"
              >
                <span className="text-xl">📞</span>
                <span className="text-sm text-cream/90">{salon.phone}</span>
              </a>
              <a
                href={salon.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 transition-colors hover:border-gold/40"
              >
                <span className="text-xl">◎</span>
                <span className="text-sm text-cream/90">{salon.instagram}</span>
              </a>

              <div className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
                <p className="text-[12px] uppercase tracking-[0.18em] text-cream/50">
                  Hours at {salon.salonName}
                </p>
                <ul className="mt-3 space-y-2">
                  {salon.hours.map((h) => (
                    <li key={h.days} className="flex justify-between text-sm">
                      <span className="text-cream/80">{h.days}</span>
                      <span className="text-cream/60">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
