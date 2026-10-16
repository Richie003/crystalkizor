import { navItems } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-forest-deep pb-10 pt-12 text-ivory">
      <div className="site-gutter flex flex-col gap-10 border-t border-ivory/10 pt-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-2xl">Crystal Kizor</p>
          <p className="mt-3 max-w-[32ch] text-sm text-ivory/60">
            Architect, designer, entrepreneur. Enugu, Nigeria.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-ivory/70">
              {item.label}
            </a>
          ))}
          <a href="#connect" className="nav-link text-ivory/70">
            Connect
          </a>
        </nav>
      </div>
      <div className="site-gutter mt-10 flex flex-col gap-2 text-xs uppercase tracking-[0.16em] text-ivory/40 md:flex-row md:justify-between">
        <p>Personal brand site</p>
        <p>© {new Date().getFullYear()} Crystal Kizor</p>
      </div>
    </footer>
  );
}
