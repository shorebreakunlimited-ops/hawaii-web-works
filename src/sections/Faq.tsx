import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { salon } from '@/config/salon';
import Reveal from '@/components/Reveal';

export default function Faq() {
  return (
    <section id="faq" className="bg-soft/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="kicker">Questions</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Frequently <span className="italic text-mocha">Asked</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cocoa/70">
            Can't find your answer?{' '}
            <a
              href={salon.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze underline decoration-sand underline-offset-4 hover:text-ink"
            >
              DM on Instagram →
            </a>
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {salon.faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-sand/70 bg-white/70 px-6 data-[state=open]:border-gold"
              >
                <AccordionTrigger className="py-5 text-left text-[15px] font-normal hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-cocoa/75">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
