import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';

export default function Reviews() {
  // Real, attributable reviews only — no placeholders. Empty → no section.
  if (salon.reviews.length === 0) return null;

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="text-center">
        <p className="kicker">Client Love</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">
          What They're <span className="italic text-mocha">Saying</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {salon.reviews.map((r, i) => (
          <Reveal key={r.author} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-3xl border border-sand/70 bg-white/60 p-8">
              <span aria-hidden className="display text-5xl leading-none text-gold">
                “
              </span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-cocoa/85">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-sand/60 pt-5">
                <span className="text-sm font-normal">{r.author}</span>
                <span className="chip">{r.source}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
