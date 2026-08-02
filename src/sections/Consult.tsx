import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';
import photoCurrent from '@/assets/demo/placeholder-photo-current.svg';
import photoInspo1 from '@/assets/demo/placeholder-photo-inspo1.svg';
import photoInspo2 from '@/assets/demo/placeholder-photo-inspo2.svg';

/**
 * Consultation intake — DEMO/TEMPLATE PREVIEW.
 *
 * Real deploys embed the client's live Jotform behind a Facade (see git
 * history / the client-repo version of this file). This template preview
 * intentionally has NO live form wired up: agents are prohibited from
 * creating or editing real Jotform forms (see docs/FORM-A-SPEC.md), and a
 * demo site must never collect real submissions. Instead this renders a
 * static mockup of the funnel + the exact photo-upload layout, so a
 * prospective client can see field flow and photo placement before their
 * real form is built and manually verified in Jotform.
 *
 * Funnel note (per project instructions): chemical/color services gate
 * safety intake BEFORE booking; non-chemical services book first. The
 * steps below reflect the non-chemical order; the chemical path is
 * surfaced via the Book section + service-card CTAs ("consult first").
 */
export default function Consult() {
  return (
    <section id="consult" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="kicker">New Clients</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Before Your <br />
              <span className="italic text-mocha">First Visit</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cocoa/80">
              Help {salon.stylistName} prepare. This takes about 3 minutes and makes your
              first session far more productive — they walk in already knowing your hair.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-6">
            {salon.firstVisitSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <li className="flex gap-5">
                  <span className="display flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold text-lg text-bronze">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-normal">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cocoa/70">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={380}>
            <div className="mt-10 rounded-2xl border border-champagne/70 bg-champagne/20 p-5 text-sm leading-relaxed text-mocha">
              <strong className="font-medium">Booking color or extensions?</strong> For
              chemical and color services, this form comes{' '}
              <em>before</em> you book — it lets {salon.stylistName} review your hair history
              and confirm the right service and timing for you.
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-3xl border border-sand bg-white shadow-[0_24px_60px_-30px_rgba(31,22,15,0.35)]">
            <div className="border-b border-sand bg-champagne/30 px-6 py-3 text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze">
                Preview only — not a live form
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <p className="kicker">Consultation Form</p>
              <h3 className="display mt-3 text-2xl sm:text-3xl">
                Tell {salon.stylistName} about your hair
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa/75">
                Hair history, current condition, goals, and photo uploads — reviewed before
                your appointment so your session starts informed.
              </p>

              {/* Mock text fields — layout only, not functional */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Full name', 'Phone', 'Email', 'Service interest'].map((label) => (
                  <div key={label}>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-taupe">
                      {label}
                    </p>
                    <div className="mt-1.5 h-10 rounded-lg border border-sand bg-soft/60" />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-gold/50 bg-champagne/10 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">
                  Shown only for chemical / color services
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-cocoa/70">
                  Chemical history, safety questions, and a henna/metallic-dye check appear
                  here — hidden automatically for non-chemical services like cuts or
                  blowouts.
                </p>
              </div>

              {/* Photo placement visual aid — the actual ask */}
              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.14em] text-taupe">
                  Photo uploads
                </p>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  <img
                    src={photoCurrent}
                    alt="Placeholder — where the client's current hair photo appears"
                    className="aspect-square w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                  <img
                    src={photoInspo1}
                    alt="Placeholder — where the first inspiration photo appears"
                    className="aspect-square w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                  <img
                    src={photoInspo2}
                    alt="Placeholder — where a second inspiration photo appears"
                    className="aspect-square w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 border-t border-sand pt-6 text-center">
                <span className="btn-primary pointer-events-none opacity-60">Submit</span>
                <p className="text-[11px] text-taupe">
                  Disabled in this preview. Your real form is built and verified in Jotform
                  before launch.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
