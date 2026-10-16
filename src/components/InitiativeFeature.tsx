import { ArrowUpRight } from "lucide-react";
import type { Initiative } from "../data/content";
import { Reveal } from "./Reveal";

interface InitiativeFeatureProps {
  initiative: Initiative;
  layout?: "feature" | "split" | "text" | "panel";
}

export function InitiativeFeature({
  initiative,
  layout = "text",
}: InitiativeFeatureProps) {
  const rel = initiative.external ? "noreferrer noopener" : undefined;
  const target = initiative.external ? "_blank" : undefined;

  if (layout === "feature") {
    return (
      <Reveal>
        <article className="grid overflow-hidden bg-forest-deep text-ivory lg:grid-cols-12">
          <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-5">
            <div>
              <p className="eyebrow !text-clay">{initiative.theme}</p>
              <h3 className="headline mt-4 text-4xl md:text-5xl">{initiative.name}</h3>
              <p className="mt-6 max-w-[38ch] text-[0.98rem] leading-relaxed text-ivory/80">
                {initiative.summary}
              </p>
            </div>
            <a
              href={initiative.href}
              target={target}
              rel={rel}
              className="cta-ghost mt-10 !border-ivory !text-ivory"
            >
              {initiative.actionLabel}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          {initiative.image ? (
            <figure className="img-zoom min-h-[280px] lg:col-span-7 lg:min-h-[520px]">
              <img
                src={initiative.image}
                alt={initiative.imageAlt ?? ""}
                width={1200}
                height={900}
                loading="lazy"
              />
            </figure>
          ) : null}
        </article>
      </Reveal>
    );
  }

  if (layout === "split") {
    return (
      <Reveal>
        <article className="grid items-stretch gap-8 border-t border-charcoal/10 py-12 md:grid-cols-12 md:gap-12">
          {initiative.image ? (
            <figure className="img-zoom aspect-[5/4] bg-ivory-deep md:col-span-6">
              <img
                src={initiative.image}
                alt={initiative.imageAlt ?? ""}
                width={1200}
                height={800}
                loading="lazy"
              />
            </figure>
          ) : null}
          <div className="flex flex-col justify-center md:col-span-6">
            <p className="eyebrow">{initiative.theme}</p>
            <h3 className="headline mt-3 text-3xl md:text-4xl">{initiative.name}</h3>
            <p className="mt-5 max-w-[40ch] text-charcoal/80">{initiative.summary}</p>
            {initiative.note ? (
              <p className="mt-3 max-w-[40ch] text-sm italic text-charcoal/60">
                {initiative.note}
              </p>
            ) : null}
            <a
              href={initiative.href}
              target={target}
              rel={rel}
              className="cta-ghost mt-8 w-fit"
            >
              {initiative.actionLabel}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </article>
      </Reveal>
    );
  }

  if (layout === "panel") {
    return (
      <Reveal>
        <article className="relative overflow-hidden bg-charcoal text-ivory">
          {initiative.image ? (
            <figure className="img-zoom h-[420px] md:h-[520px]">
              <img
                src={initiative.image}
                alt={initiative.imageAlt ?? ""}
                className="opacity-70"
                width={1440}
                height={1440}
                loading="lazy"
              />
            </figure>
          ) : null}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent p-8 md:p-10">
            <p className="eyebrow !text-clay">{initiative.theme}</p>
            <h3 className="headline mt-3 text-3xl md:text-4xl">{initiative.name}</h3>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-ivory/85">
              {initiative.summary}
            </p>
            {initiative.note ? (
              <p className="mt-2 max-w-[42ch] text-xs italic text-ivory/60">
                {initiative.note}
              </p>
            ) : null}
            <a
              href={initiative.href}
              target={target}
              rel={rel}
              className="cta-ghost mt-6 w-fit !border-ivory !text-ivory"
            >
              {initiative.actionLabel}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <article className="border-t border-charcoal/10 py-8">
        <p className="eyebrow">{initiative.theme}</p>
        <h3 className="headline mt-2 text-2xl md:text-3xl">{initiative.name}</h3>
        <p className="mt-4 max-w-[46ch] text-charcoal/80">{initiative.summary}</p>
        {initiative.note ? (
          <p className="mt-3 max-w-[46ch] text-sm italic text-charcoal/60">
            {initiative.note}
          </p>
        ) : null}
        <a
          href={initiative.href}
          target={target}
          rel={rel}
          className="cta-ghost mt-6"
        >
          {initiative.actionLabel}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </article>
    </Reveal>
  );
}
