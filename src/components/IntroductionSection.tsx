import { Reveal } from "./Reveal";

export function IntroductionSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-charcoal/10 bg-ivory py-20 md:py-28">
      <div className="site-gutter grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">The connecting identity</p>
          <h2 className="headline mt-4 text-4xl text-charcoal md:text-5xl lg:text-[3.4rem]">
            One practice, many rooms.
          </h2>
          <figure className="img-zoom mt-10 aspect-[4/5] bg-ivory-deep">
            <img
              src="/images/portrait-graduation.jpg"
              alt="Crystal Kizor in academic dress standing before a modernist brick façade."
              width={1440}
              height={1800}
              loading="lazy"
            />
          </figure>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-16">
          <Reveal>
            <p className="max-w-[42ch] font-serif text-2xl leading-snug text-charcoal md:text-[2rem]">
              Architecture is the centre of gravity. Education, products, public
              speaking, and faith-based work grow from the same attention to how
              people inhabit a place.
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-10 grid gap-8 border-t border-charcoal/15 pt-10 sm:grid-cols-2">
              <p className="text-[0.98rem] leading-relaxed text-charcoal/80">
                Crystal is Design Director of Studio COKA, a Nigeria-based
                design-build studio working across architecture, interiors, and
                urban design. She holds a B.Sc in Architecture from the
                University of Nigeria and a Master’s in Interior Architecture
                from Coventry University, and trained with the University of
                Cambridge in Sustainable Real Estate.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-charcoal/80">
                Before the studio, she led the redesign of Nigeria’s first
                fully off-grid hospital in Nsukka — a project still cited as the
                studio’s performance benchmark. The rest of the ecosystem —
                ELEvated, TEA, AKO Alliance, Alive and Free, and her own writing
                — extends that concern from buildings into objects, learning,
                and community.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-charcoal/15 pt-8 sm:grid-cols-3">
              <div>
                <dt className="eyebrow">Based</dt>
                <dd className="mt-2 font-serif text-xl">Enugu, Nigeria</dd>
              </div>
              <div>
                <dt className="eyebrow">Practice</dt>
                <dd className="mt-2 font-serif text-xl">Studio COKA</dd>
              </div>
              <div>
                <dt className="eyebrow">Public work</dt>
                <dd className="mt-2 font-serif text-xl">TEDxPortHarcourt</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
