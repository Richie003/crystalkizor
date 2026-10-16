import { useEffect, useState } from "react";
import { navItems } from "../data/content";
import { MarqueeBar } from "./MarqueeBar";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-b border-charcoal/10 bg-ivory/92 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <MarqueeBar />
        <div className="site-gutter flex h-16 items-center justify-between md:h-[4.5rem]">
          <a href="#top" className="font-serif text-[1.35rem] tracking-tight text-charcoal">
            Crystal Kizor
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-charcoal/80">
                {item.label}
              </a>
            ))}
            <a href="#connect" className="cta-primary !px-4 !py-2">
              Let’s connect
            </a>
          </nav>
          <button
            type="button"
            className="text-xs uppercase tracking-[0.2em] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>
      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </>
  );
}
