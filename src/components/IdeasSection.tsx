import { ArrowUpRight } from "lucide-react";
import { ideaPieces } from "../data/content";
import { Reveal } from "./Reveal";

export function IdeasSection() {
  return (
    <section id="ideas" className="scroll-mt-24 bg-forest-deep py-20 text-ivory md:py-28">
      <div className="site-gutter">
        <Reveal>
          <div className="grid gap-10 border-b border-ivory/15 pb-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Journal</p>
              <h2 className="headline mt-4 max-w-[16ch] text-4xl md:text-6xl">
                Writing from the drawing board.
              </h2>
            </div>
            <p className="self-end max-w-[36ch] text-ivory/75 md:col-span-5">
              Research, reported features, and studio notes on climate,
              materials, and how buildings actually perform — not a placeholder
              blog.
            </p>
          </div>
        </Reveal>

        <div className="mt-4 grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delayMs={60}>
            <figure className="img-zoom aspect-[4/5] bg-forest">
              <img
                src="/images/coka-light.jpeg"
                alt="Daylit courtyard with a circular oculus, laterite screens, and a tree at the centre."
                width={1400}
                height={1400}
                loading="lazy"
              />
            </figure>
            <p className="mt-4 text-sm italic text-ivory/55">
              Spatial study from Studio COKA — light, air, and a planted court.
            </p>
          </Reveal>

          <ol className="lg:col-span-7">
            {ideaPieces.map((piece, index) => (
              <Reveal key={piece.href} delayMs={index * 70}>
                <li className="border-b border-ivory/15 py-8 first:pt-0">
                  <p className="eyebrow !text-clay">{piece.source}</p>
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group mt-3 flex items-start justify-between gap-6"
                  >
                    <span className="headline text-2xl leading-tight md:text-3xl">
                      {piece.title}
                    </span>
                    <ArrowUpRight
                      className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                  <p className="mt-4 max-w-[48ch] text-ivory/70">{piece.summary}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
