import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "../lib/cn";
import { useIntroReady } from "../lib/motion";

export function HeroSection() {
  const ready = useIntroReady();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ivory pt-[6.25rem] md:pt-[7.25rem]"
    >
      <div className="site-gutter grid min-h-[calc(100svh-7.25rem)] items-center gap-10 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12">
        <div className="flex flex-col justify-center lg:col-span-6">
          <p
            className={cn("hero-enter eyebrow", ready && "is-in")}
            style={{ transitionDelay: "150ms" }}
          >
            Architect · Designer · Entrepreneur
          </p>
          <h1
            className={cn(
              "hero-enter headline mt-6 max-w-[11ch] text-[3.15rem] text-charcoal sm:text-6xl lg:text-[5.15rem]",
              ready && "is-in",
            )}
            style={{ transitionDelay: "280ms" }}
          >
            Buildings that work with climate.
          </h1>
          <p
            className={cn(
              "hero-enter mt-6 max-w-[38ch] text-[1.05rem] leading-relaxed text-charcoal/80",
              ready && "is-in",
            )}
            style={{ transitionDelay: "430ms" }}
          >
            Crystal Kizor is an architect and multidisciplinary entrepreneur
            shaping spaces, products, education, and public work from Enugu
            outward — connected by one question: how should people live here?
          </p>
          <div
            className={cn(
              "hero-enter mt-9 flex flex-wrap items-center gap-6",
              ready && "is-in",
            )}
            style={{ transitionDelay: "580ms" }}
          >
            <a href="#work" className="cta-primary">
              See the work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#speaking" className="cta-ghost">
              Invite her to speak
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:h-[calc(100svh-9.5rem)] lg:max-h-[760px]">
          <div
            className={cn(
              "hero-enter hero-enter-media grid h-full grid-cols-[1.05fr_0.95fr] grid-rows-[minmax(0,1fr)_auto] gap-3 md:gap-4",
              ready && "is-in",
            )}
            style={{ transitionDelay: "360ms" }}
          >
            <figure className="img-zoom col-span-1 row-span-2 min-h-[380px] bg-forest md:min-h-[460px] lg:min-h-0">
              <img
                src="/images/portrait-cafe.jpg"
                alt="Crystal Kizor, seated, looking toward the camera."
                className="object-[center_22%]"
                width={1440}
                height={1549}
                fetchPriority="high"
              />
            </figure>
            <figure className="img-zoom hidden min-h-[240px] bg-charcoal sm:block">
              <img
                src="/images/coka-hero.jpeg"
                alt="Studio COKA concept for a climate-responsive civic building with sweeping roofs."
                width={1200}
                height={1200}
              />
            </figure>
            <p className="self-end font-serif text-sm italic leading-snug text-charcoal/70 sm:col-start-2">
              Design Director, Studio COKA.
              <br />
              Practice rooted in hot climates.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <a
          href="#about"
          className={cn(
            "hero-enter inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-charcoal/60",
            ready && "is-in",
          )}
          style={{ transitionDelay: "900ms" }}
        >
          Scroll
          <ArrowDown size={12} className="scroll-hint" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
