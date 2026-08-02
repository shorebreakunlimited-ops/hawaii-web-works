import { salon } from '@/config/salon';
import Facade from '@/components/Facade';
import Reveal from '@/components/Reveal';

export default function Book() {
  return (
    <section id="book" className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="kicker !text-champagne">Reserve Your Chair</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Book Your <span className="italic text-gold">Appointment</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70">
            Bookings are handled securely through Square. New to color, corrections, or
            extensions? Complete the consultation form first.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Facade
            url={salon.booking.servicesUrl}
            title={`Book with ${salon.stylistName} — Square Appointments`}
            eyebrow="Square Appointments"
            heading="Choose your service & time"
            body="Live availability, instant confirmation, and easy rescheduling — all through Square's secure booking."
            buttonLabel="Load booking calendar"
            frameHeight="760px"
          />
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-cream/60">
            New to extensions or color correction? {salon.stylistName} requires a consultation before
            these services.{' '}
            <a href="#consult" className="text-gold underline decoration-gold/40 underline-offset-4">
              Complete your new client form →
            </a>{' '}
            It takes 3 minutes and helps her prepare for your visit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
