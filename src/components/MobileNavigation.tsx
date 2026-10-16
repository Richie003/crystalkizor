import { useEffect, useRef } from "react";
import { navItems } from "../data/content";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const root = document.getElementById("mobile-nav");
      if (!root) return;
      const focusable = [
        ...root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      className="fixed inset-0 z-50 bg-forest text-ivory"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-nav-title"
    >
      <div className="flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <p id="mobile-nav-title" className="font-serif text-2xl">
            Crystal Kizor
          </p>
          <button
            ref={closeRef}
            type="button"
            className="text-sm uppercase tracking-[0.18em]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <nav className="mt-16 flex flex-col gap-6" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-serif text-4xl"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#connect"
            className="font-serif text-4xl text-clay"
            onClick={onClose}
          >
            Let’s connect
          </a>
        </nav>
      </div>
    </div>
  );
}
