import { useState } from 'react';
import { salon, type Service } from '@/config/salon';
import Reveal from '@/components/Reveal';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'color', label: 'Color' },
  { key: 'cut', label: 'Cut & Style' },
  { key: 'extensions', label: 'Extensions' },
  { key: 'treatments', label: 'Treatments' },
  { key: 'consult', label: 'Consultations' },
] as const;

type FilterKey = (typeof filters)[number]['key'];

/**
 * CTA routing — one path:
 *  - Chemical service AND Form A gate verified live → consultation form first.
 *  - Stylist-required consult (Square menu) → Square, where the free
 *    consultation is booked before the service.
 *  - Everything else → Square.
 */
function ctaFor(service: Service) {
  if (service.chemical && salon.intakeForm.chemicalGateVerified) {
    return { href: '#consult', label: 'Start with the consult form →', external: false };
  }
  if (service.consultFirst) {
    return { href: salon.booking.servicesUrl, label: 'Book a consultation first →', external: true };
  }
  return { href: salon.booking.servicesUrl, label: 'Book this service →', external: true };
}

function badgeFor(service: Service) {
  if (service.consultFirst) return { label: 'Consult Required', className: 'border-bronze/50 bg-champagne/30' };
  if (service.existingClientsOnly) return { label: 'Existing Clients', className: 'border-sand bg-white' };
  return null;
}

function ServiceCard({ service }: { service: Service }) {
  const cta = ctaFor(service);
  const badge = badgeFor(service);

  return (
    <article className="group flex flex-col rounded-3xl border border-sand/70 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-white hover:shadow-[0_20px_50px_-24px_rgba(31,22,15,0.3)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-normal leading-snug">{service.name}</h3>
        {badge && <span className={`chip shrink-0 ${badge.className}`}>{badge.label}</span>}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-cocoa/75">{service.description}</p>
      <div className="mt-6 flex items-end justify-between border-t border-sand/60 pt-5">
        <div>
          <p className="display text-2xl text-mocha">{service.price}</p>
          <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-taupe">
            {service.duration}
          </p>
        </div>
        <a
          href={cta.href}
          {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-[13px] font-normal text-bronze underline decoration-sand underline-offset-4 transition-colors group-hover:text-ink"
        >
          {cta.label}
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  const [active, setActive] = useState<FilterKey>('all');
  const visible =
    active === 'all' ? salon.services : salon.services.filter((s) => s.category === active);

  return (
    <section id="services" className="bg-soft/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">What I Offer</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Services &amp; <span className="italic text-mocha">Pricing</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-all ${
                  active === f.key
                    ? 'bg-ink text-cream'
                    : 'border border-sand text-mocha hover:border-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i, 5) * 60}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={salon.booking.servicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All &amp; Book →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
