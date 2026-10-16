import { ArrowRight, ArrowUpRight } from "lucide-react";
import { links, speakingTopics } from "../data/content";
import { Reveal } from "./Reveal";

export function SpeakingSection() {
  return (
    <section id="speaking" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="site-gutter grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Speaking and collaboration</p>
          <h2 className="headline mt-4 text-4xl md:text-5xl lg:text-[3.35rem]">
            Rooms that need a climate argument.
          </h2>
          <p className="mt-6 max-w-[40ch] text-charcoal/80">
            Crystal speaks about architecture that belongs to hot cities —
            materials, energy, culture, and the business of getting better
            buildings built. She appeared at TEDxPortHarcourt 2025.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <a href={links.linkedin} className="cta-primary" target="_blank" rel="noreferrer noopener">
              Invite her to speak
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={links.tedx}
              className="cta-ghost"
              target="_blank"
              rel="noreferrer noopener"
            >
              TEDx speaker page
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delayMs={80}>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="img-zoom aspect-[4/5] bg-ivory-deep sm:row-span-2">
              <img
                src="/images/portrait-architecture.jpg"
                alt="Crystal Kizor standing before a historic stone façade at golden hour."
                width={1440}
                height={1800}
                loading="lazy"
              />
            </figure>
            <ul className="flex flex-col justify-between border border-charcoal/12 p-6 sm:min-h-[280px]">
              {speakingTopics.map((topic) => (
                <li
                  key={topic}
                  className="border-b border-charcoal/10 py-3 font-serif text-lg last:border-0 last:pb-0 first:pt-0"
                >
                  {topic}
                </li>
              ))}
            </ul>
            <figure className="img-zoom aspect-[4/3] bg-ivory-deep">
              <img
                src="/images/coka-p1-9.png"
                alt="Auditorium interior from a Studio COKA civic project, with layered lighting and curved seating."
                width={1600}
                height={1600}
                loading="lazy"
              />
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
