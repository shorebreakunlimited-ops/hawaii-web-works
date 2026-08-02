import { salon } from '@/config/salon';

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink px-5 py-8 text-center sm:px-8">
      <p className="text-[12px] tracking-wide text-cream/50">
        © {new Date().getFullYear()} {salon.stylistName} · {salon.salonName} · {salon.city},{' '}
        {salon.region}
      </p>
      {/* Agency credit — the only place Hawaii Web Works appears */}
      <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-cream/30">
        {salon.agencyCredit}
      </p>
    </footer>
  );
}
