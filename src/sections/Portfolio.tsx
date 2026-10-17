import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="kicker">The Work</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Recent <span className="italic text-mocha">Transformations</span>
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-cocoa/80">
            Real client work from Abriena's chair — dimensional color, precision cuts, and
            healthy-hair detail.
          </p>
        </div>
        <a
          href={salon.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          View Instagram →
        </a>
      </Reveal>

      <div
        className={`mt-12 grid grid-cols-2 gap-4 ${
          salon.gallery.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
        }`}
      >
        {salon.gallery.map((g, i) => (
          <Reveal key={g.alt} delay={Math.min(i, 4) * 70}>
            <figure className="group relative overflow-hidden rounded-2xl">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-cream/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cream backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={salon.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-bronze underline decoration-sand underline-offset-4 transition-colors hover:text-ink"
        >
          See the full portfolio on Instagram →
        </a>
      </Reveal>
    </section>
  );
}
