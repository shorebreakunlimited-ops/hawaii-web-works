import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';

export default function Education() {
  const edu = salon.education;

  return (
    <section id="education" className="bg-soft/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy + topics */}
          <div>
            <Reveal>
              <p className="kicker">Education</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl">
                Learn From <span className="italic text-mocha">Abriena</span>
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-cocoa/80">{edu.intro}</p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {edu.topics.map((t, i) => (
                <Reveal key={t.title} delay={i * 90}>
                  <div className="flex gap-4 border-l-2 border-gold/60 pl-5">
                    <div>
                      <h3 className="text-base font-normal">
                        <span className="mr-2 text-bronze">✦</span>
                        {t.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-cocoa/70">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-taupe">
                Educator at {salon.salonName} · {salon.city}
              </p>
            </Reveal>
          </div>

          {/* Class card only when a real class is confirmed; otherwise imagery */}
          <Reveal delay={150}>
            {edu.nextClass ? (
              <div className="relative overflow-hidden rounded-3xl bg-ink text-cream">
                <img
                  src={salon.images.education}
                  alt={`${salon.stylistName} teaching at ${salon.salonName}`}
                  loading="lazy"
                  className="h-56 w-full object-cover opacity-70 sm:h-64"
                />
                <div className="p-8 sm:p-10">
                  <p className="kicker !text-champagne">Next Class</p>
                  <h3 className="display mt-4 text-3xl sm:text-4xl">{edu.nextClass.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
                    {edu.nextClass.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {edu.nextClass.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-cream/80">
                        <span className="text-gold">✦</span> {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={salon.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-3.5 text-sm tracking-wide text-ink transition-colors hover:bg-gold"
                  >
                    Ask about the class via Instagram DM →
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={salon.images.education}
                  alt={`${salon.stylistName} teaching at ${salon.salonName}`}
                  loading="lazy"
                  className="h-72 w-full rounded-3xl object-cover sm:h-96"
                />
                <img
                  src={salon.images.educationDetail}
                  alt={`${salon.stylistName} behind the scenes`}
                  loading="lazy"
                  className="mt-10 h-72 w-full rounded-3xl object-cover sm:h-96"
                />
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
