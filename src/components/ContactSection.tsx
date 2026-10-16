import { ArrowUpRight } from "lucide-react";
import { links } from "../data/content";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="connect" className="scroll-mt-24 bg-forest py-20 text-ivory md:py-28">
      <div className="site-gutter">
        <Reveal>
          <p className="eyebrow !text-clay">Next step</p>
          <h2 className="headline mt-5 max-w-[14ch] text-4xl md:text-6xl lg:text-7xl">
            If the work should meet, write.
          </h2>
          <p className="mt-6 max-w-[42ch] text-ivory/75">
            Studio commissions, speaking invitations, collaborations, and
            questions about the initiatives. No public email is listed here —
            LinkedIn is the verified channel.
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-ivory/15 pt-10">
            <a
              href={links.linkedin}
              className="cta-ghost !border-ivory !text-ivory"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={links.instagram}
              className="cta-ghost !border-ivory !text-ivory"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={links.studio}
              className="cta-ghost !border-ivory !text-ivory"
              target="_blank"
              rel="noreferrer noopener"
            >
              Studio COKA
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
