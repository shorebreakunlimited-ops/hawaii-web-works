import { salon } from '@/config/salon';
import Facade from '@/components/Facade';
import Reveal from '@/components/Reveal';

/**
 * Consultation intake — Jotform behind a facade.
 * Funnel note (per project instructions): chemical/color services gate
 * safety intake BEFORE booking; non-chemical services book first.
 * The steps below reflect the non-chemical order; the chemical path is
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
              Help Abriena prepare. This takes about 3 minutes and makes your first session
              far more productive — she walks in already knowing your hair.
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
              <em>before</em> you book — it lets Abriena review your hair history and confirm
              the right service and timing for you.
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <Facade
            url={salon.intakeForm.formUrl}
            title={`${salon.stylistName} — new client consultation form`}
            eyebrow="Consultation Form"
            heading="Tell Abriena about your hair"
            body="Hair history, current condition, goals, and photo uploads — reviewed before your appointment so your session starts informed."
            buttonLabel="Open the consultation form"
            frameHeight="780px"
          />
        </Reveal>
      </div>
    </section>
  );
}
