import { initiatives } from "../data/content";
import { InitiativeFeature } from "./InitiativeFeature";
import { Reveal } from "./Reveal";

const byId = (id: string) => {
  const found = initiatives.find((item) => item.id === id);
  if (!found) {
    throw new Error(`Unknown initiative: ${id}`);
  }
  return found;
};

export function VenturesSection() {
  return (
    <section id="work" className="scroll-mt-24 bg-ivory pb-8">
      <div className="site-gutter py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-charcoal/15 pb-10 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Ventures and initiatives</p>
              <h2 className="headline mt-4 max-w-[14ch] text-4xl md:text-6xl">
                An ecosystem, not a directory.
              </h2>
            </div>
            <p className="max-w-[34ch] text-charcoal/75">
              Seven expressions of one practice. Grouped here by theme for
              reading — not as a corporate structure.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="site-gutter">
        <InitiativeFeature initiative={byId("studio-coka")} layout="feature" />
      </div>

      <div className="site-gutter grid gap-4 py-4 lg:grid-cols-2">
        <Reveal>
          <figure className="img-zoom aspect-[4/3] bg-ivory-deep">
            <img
              src="/images/coka-p1-2.jpeg"
              alt="Interior of Studio COKA’s International Event Centre concept, with undulating timber ceilings and living walls."
              width={1400}
              height={1050}
              loading="lazy"
            />
          </figure>
        </Reveal>
        <Reveal delayMs={80}>
          <figure className="img-zoom aspect-[4/3] bg-ivory-deep">
            <img
              src="/images/coka-p2-1.jpeg"
              alt="Garden Home concept: a brick and glass house opening onto water and dense trees."
              width={1400}
              height={1400}
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>

      <div className="site-gutter">
        <InitiativeFeature initiative={byId("elevated")} layout="split" />
      </div>

      <div className="site-gutter grid gap-x-16 md:grid-cols-2">
        <InitiativeFeature initiative={byId("tea")} layout="text" />
        <InitiativeFeature initiative={byId("ako")} layout="text" />
        <InitiativeFeature initiative={byId("speaking")} layout="text" />
        <InitiativeFeature initiative={byId("personal")} layout="text" />
      </div>

      <div className="site-gutter py-10 md:py-16">
        <InitiativeFeature initiative={byId("alive")} layout="panel" />
      </div>
    </section>
  );
}
