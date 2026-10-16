import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";

interface IntroOverlayProps {
  onComplete: () => void;
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete();
      return;
    }

    document.documentElement.classList.add("intro-locked");
    const overlay = overlayRef.current;
    if (!overlay) return;

    const onEnd = (event: AnimationEvent) => {
      if (event.target !== overlay || event.animationName !== "intro-slide") {
        return;
      }
      document.documentElement.classList.remove("intro-locked");
      onComplete();
    };

    overlay.addEventListener("animationend", onEnd);
    return () => {
      overlay.removeEventListener("animationend", onEnd);
      document.documentElement.classList.remove("intro-locked");
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="intro-overlay"
      role="status"
      aria-live="polite"
      aria-label="Loading Crystal Kizor"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <div className="intro-mark mb-6">
          <img
            src="/images/ck-monogram.png"
            alt=""
            width={64}
            height={64}
            className="h-16 w-auto object-contain brightness-0 invert"
          />
        </div>
        <h1 className="intro-title mb-4 font-serif text-3xl font-normal uppercase tracking-[0.28em] text-ivory md:text-5xl">
          Crystal Kizor
        </h1>
        <div className="intro-line my-2 h-0.5 bg-clay" />
        <p className="intro-tag mt-2 text-xs font-medium uppercase tracking-[0.28em] text-ivory/55 md:text-sm">
          Spaces · Products · Systems
        </p>
      </div>
    </div>
  );
}
