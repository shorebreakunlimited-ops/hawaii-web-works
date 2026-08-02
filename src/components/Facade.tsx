import { useState } from 'react';

/**
 * Facade — lightweight placeholder for heavy third-party iframes
 * (Square Appointments, Jotform). The iframe loads ONLY on user
 * interaction, protecting the <2s load / Lighthouse 90+ quality bar.
 * A naive always-on embed fails both targets.
 */
interface FacadeProps {
  url: string;
  title: string;
  eyebrow: string;
  heading: string;
  body: string;
  buttonLabel: string;
  /** min height of the loaded iframe area */
  frameHeight?: string;
  /** optional link to open in a new tab instead */
  externalLabel?: string;
}

export default function Facade({
  url,
  title,
  eyebrow,
  heading,
  body,
  buttonLabel,
  frameHeight = '720px',
  externalLabel = 'Open in new tab ↗',
}: FacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="overflow-hidden rounded-3xl border border-sand bg-white shadow-[0_24px_60px_-30px_rgba(31,22,15,0.35)]">
        <iframe
          src={url}
          title={title}
          className="block h-auto w-full"
          style={{ minHeight: frameHeight }}
          loading="lazy"
          allow="payment"
        />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sand bg-gradient-to-br from-soft via-cream to-blush p-10 text-center text-ink shadow-[0_24px_60px_-30px_rgba(31,22,15,0.25)] sm:p-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-champagne/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
      />
      <p className="kicker">{eyebrow}</p>
      <h3 className="display mx-auto mt-4 max-w-md text-3xl sm:text-4xl">{heading}</h3>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mocha/80 sm:text-base">
        {body}
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button type="button" onClick={() => setLoaded(true)} className="btn-primary">
          {buttonLabel}
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-mocha underline decoration-sand underline-offset-4 transition-colors hover:text-ink"
        >
          {externalLabel}
        </a>
      </div>
      <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-taupe">
        Loads securely on tap — keeps this page fast
      </p>
    </div>
  );
}
