import { useEffect, useState } from 'react';
import { salon } from '@/config/salon';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Education', href: '#education' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 shadow-[0_1px_0_0_rgba(31,22,15,0.06)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-sm font-medium uppercase tracking-[0.22em] text-ink">
          {salon.stylistName}
          <span className="text-bronze"> ·</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-cocoa/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" className="btn-primary !px-6 !py-2.5 text-[13px]">
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand/60 bg-cream/95 px-5 pb-6 pt-2 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-cocoa"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
