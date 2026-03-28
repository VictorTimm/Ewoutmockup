import {
  hero,
  problem,
  deeperProblem,
  guide,
  plan,
  result,
  stakes,
  forWho,
  cta,
  closing,
  testimonials,
} from "@/lib/home-content";
import { LeftProgressRail } from "@/components/home/LeftProgressRail";

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ testimonial, bodyClass }: { testimonial: Testimonial; bodyClass: string }) {
  const quote = testimonial.quote.trim();
  const cappedQuote = quote.length > 280 ? `${quote.slice(0, 277).trimEnd()}...` : quote;
  const firstSentenceMatch = cappedQuote.match(/^.*?[.!?](?=\s|$)/);
  const firstSentence = firstSentenceMatch?.[0] ?? cappedQuote;
  const remainingText = cappedQuote.slice(firstSentence.length).trimStart();

  return (
    <article className="testimonial-card micro-lift micro-soft-shadow flex-none w-[85vw] sm:w-[68vw] md:w-[20rem] lg:w-[18.5rem] xl:w-[18rem] bg-[color:color-mix(in_oklab,white_94%,var(--color-calm-blue)_6%)] rounded-2xl p-6 md:p-7 border border-[color:color-mix(in_oklab,var(--color-calm-blue)_12%,transparent)] shadow-sm hover:-translate-y-1 transition-shadow duration-200">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--color-calm-blue)_20%,white)] text-[var(--color-primary-blue)] border border-[color:color-mix(in_oklab,var(--color-calm-blue)_25%,transparent)] grid place-items-center text-[0.82rem] font-semibold tracking-wide">
          {testimonial.initial}
        </div>
        <div className="min-w-0">
          <p className="font-medium text-[var(--color-primary-blue)] leading-tight">{testimonial.name}</p>
          {"subtitle" in testimonial && testimonial.subtitle ? (
            <p className="mt-1 text-[0.88rem] text-[color:color-mix(in_oklab,var(--color-foreground)_68%,transparent)]">
              {testimonial.subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <p className={`mt-4 max-w-[34ch] leading-[1.78] ${bodyClass}`}>
        <span className="font-medium italic">&ldquo;{firstSentence}</span>
        {remainingText ? <span> {remainingText}</span> : null}
        <span>&rdquo;</span>
      </p>
    </article>
  );
}

export function HomeStyle51() {
  const sectionY = "py-16 md:py-20 lg:py-24";
  const trackedSection = "scroll-mt-24 md:scroll-mt-28";
  const container = "w-[92%] max-w-6xl mx-auto";
  const narrowContainer = "w-[92%] max-w-4xl mx-auto";
  const eyebrow =
    "text-[var(--color-warm-orange)] text-[0.72rem] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4";
  const h1 =
    "font-display text-[clamp(2.6rem,5.8vw,4.2rem)] font-medium text-[var(--color-primary-blue)] leading-[1.05] tracking-[-0.03em]";
  const h2 =
    "font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium text-[var(--color-primary-blue)] leading-[1.1] tracking-[-0.02em]";
  const h3 =
    "font-display text-[clamp(1.15rem,2vw,1.5rem)] font-medium text-[var(--color-primary-blue)]";
  const body =
    "text-[clamp(1rem,1.35vw,1.125rem)] text-[color:color-mix(in_oklab,var(--color-foreground)_85%,transparent)] leading-relaxed";
  const bodySm =
    "text-[clamp(0.95rem,1.1vw,1.03rem)] text-[color:color-mix(in_oklab,var(--color-foreground)_78%,transparent)]";
  const ctaPrimaryButton =
    "micro-lift micro-soft-shadow w-full sm:w-auto inline-flex justify-center rounded-lg bg-[var(--color-warm-orange)] px-[1.55em] py-[0.9em] text-white font-medium hover:bg-[var(--color-soft-orange)] transition-colors duration-200 shadow-md shadow-[color:color-mix(in_oklab,var(--color-warm-orange)_25%,transparent)]";
  const ctaSecondaryButton =
    "micro-lift w-full sm:w-auto inline-flex justify-center rounded-lg border-2 border-[var(--color-calm-blue)] px-[1.55em] py-[0.9em] text-[var(--color-primary-blue)] font-medium hover:bg-[color:color-mix(in_oklab,var(--color-calm-blue)_12%,transparent)] transition-colors duration-200";

  return (
    <main className="story51-canvas min-h-screen overflow-x-hidden text-[var(--color-foreground)] lg:pl-24 xl:pl-32">
      <LeftProgressRail />

      {/* ── HERO ── */}
      <section
        id="intro"
        className={`${trackedSection} pt-16 pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28`}
      >
        <div className={container}>
          <div className="grid gap-10 md:grid-cols-5 md:gap-14 lg:items-center">
            <div className="reveal-up reveal-delay-2 md:col-span-2 order-2 md:order-1 relative">
              <div className="absolute -left-6 top-6 hidden h-20 w-20 rounded-full border border-[var(--color-calm-blue)]/18 bg-white/30 blur-sm md:block" />
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:color-mix(in_oklab,var(--color-calm-blue)_12%,transparent)] shadow-[0_32px_56px_-36px_color-mix(in_oklab,var(--color-primary-blue)_50%,transparent)]"
                style={{
                  background: `linear-gradient(180deg, color-mix(in oklab, var(--calm-blue) 18%, transparent) 0%, color-mix(in oklab, var(--primary-blue) 28%, transparent) 100%)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-[color:color-mix(in_oklab,var(--color-primary-blue)_40%,transparent)] text-sm font-medium">
                  [Foto Ewout]
                </div>
              </div>
            </div>

            <div className="reveal-up md:col-span-3 order-1 md:order-2">
              <p className={`${eyebrow} micro-underline inline-block`}>Verhaal</p>
              <h1 className={`${h1} max-w-[14ch] reveal-up reveal-delay-1`}>{hero.headline}</h1>
              <p className={`mt-6 max-w-[52ch] ${body} reveal-up reveal-delay-2`}>{hero.subheadline}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#" className={ctaPrimaryButton}>
                  {hero.ctaPrimary}
                </a>
                <a href="#" className={ctaSecondaryButton}>
                  {hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERKENNING ── */}
      <section id="recognition" className={`${trackedSection} ${sectionY}`}>
        <div className={`${container} story51-divider pt-12 md:pt-16`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <p className={`${eyebrow} micro-underline inline-block`}>Herkenning</p>
              <h2 className={`${h2} max-w-[14ch] reveal-up`}>{problem.title}</h2>
              <div className="mt-8 grid gap-0 md:grid-cols-2">
                {problem.situations.map((s, i) => (
                  <div
                    key={i}
                    className="border-t border-[color:color-mix(in_oklab,var(--color-primary-blue)_10%,transparent)] py-4 text-[clamp(1rem,1.3vw,1.1rem)] leading-[1.8] text-[color:color-mix(in_oklab,var(--color-foreground)_82%,transparent)]"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <aside className="self-start border-l-2 border-[var(--color-warm-orange)] pl-5 md:pl-6">
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--color-warm-orange)] uppercase">
                Kerninzicht
              </p>
              <p className="mt-4 font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.45] text-[var(--color-primary-blue)]">
                {problem.insight}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── DIEPER PROBLEEM ── */}
      <section id="problem" className={`${trackedSection} ${sectionY}`}>
        <div className={`${container} story51-divider pt-12 md:pt-16`}>
          <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <div>
              <p className={`${eyebrow} micro-underline inline-block`}>Het diepere probleem</p>
            </div>

            <div>
              <h2 className={`${h2} max-w-[15ch]`}>{deeperProblem.title}</h2>
              <p className={`mt-5 max-w-[52ch] ${body}`}>{deeperProblem.intro}</p>
              <ul className="mt-8 grid gap-0 md:grid-cols-2">
                {deeperProblem.points.map((p, i) => (
                  <li
                    key={i}
                    className="border-t border-[color:color-mix(in_oklab,var(--color-primary-blue)_10%,transparent)] py-4 flex gap-3"
                  >
                    <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--color-warm-orange)] uppercase shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.05rem] leading-[1.7] text-[color:color-mix(in_oklab,var(--color-foreground)_82%,transparent)]">{p}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-6 max-w-[52ch] ${bodySm}`}>{deeperProblem.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DE GIDS (dark band) ── */}
      <section
        id="guide"
        className={`${trackedSection} ${sectionY} bg-[var(--color-primary-blue)] text-white`}
      >
        <div className={`${container} grid md:grid-cols-5 gap-10 md:gap-14 items-center`}>
          <div className="md:col-span-2">
            <div
              className="aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-[0_28px_52px_-36px_rgba(0,0,0,0.5)]"
              style={{
                background: `linear-gradient(180deg, color-mix(in oklab, var(--calm-blue) 30%, transparent) 0%, color-mix(in oklab, var(--primary-blue) 50%, transparent) 100%)`,
              }}
            >
              <div className="flex h-full items-center justify-center text-white/30 text-sm font-medium">
                [Beeld]
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-[0.72rem] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-[var(--color-soft-orange)]">
              De gids
            </p>
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium text-white leading-[1.1] tracking-[-0.02em] max-w-[14ch]">
              {guide.title}
            </h2>
            {guide.body.map((p, i) => (
              <p key={i} className="mt-4 max-w-[52ch] text-[clamp(1rem,1.35vw,1.125rem)] text-white/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── HET PLAN (vertical journey) ── */}
      <section id="plan" className={`${trackedSection} ${sectionY}`}>
        <div className={container}>
          <p className={`${eyebrow} micro-underline inline-block`}>Het plan</p>
          <h2 className={`${h2} max-w-[16ch]`}>{plan.title}</h2>
          <p className={`mt-2 max-w-[52ch] ${bodySm}`}>{plan.intro}</p>

          <ol className="mt-12 space-y-6 md:mt-14">
            {plan.weeks.map((w) => (
              <li
                key={w.number}
                className="grid gap-5 border-t border-[color:color-mix(in_oklab,var(--color-primary-blue)_10%,transparent)] py-7 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-8"
              >
                <div className="flex items-start gap-3 md:block">
                  <span className="font-display text-[2.2rem] leading-none text-[var(--color-warm-orange)] md:text-[3rem]">
                    {w.number}
                  </span>
                  <p className="pt-1.5 text-xs font-semibold tracking-[0.18em] text-[var(--color-primary-blue)]/50 uppercase">
                    Week {w.number}
                  </p>
                </div>

                <div>
                  <h3 className={h3}>{w.name}</h3>
                  <p className={`mt-2 max-w-[36rem] ${bodySm}`}>{w.subtitle}</p>
                  <ul className="mt-4 space-y-2">
                    {w.points.map((p, i) => (
                      <li key={i} className={`flex gap-3 ${body}`}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-warm-orange)]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── RESULTAAT + URGENTIE (two-col) ── */}
      <div id="results" className={trackedSection}>
        <section className={`${sectionY}`}>
          <div className={`${container} story51-divider pt-12 md:pt-16`}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)]">
              <div>
                <p className={`${eyebrow} micro-underline inline-block`}>Resultaat</p>
                <h2 className={`${h2} max-w-[12ch]`}>{result.title}</h2>
                <p className={`mt-3 max-w-[48ch] ${bodySm}`}>{result.intro}</p>
                <ul className="mt-8 grid gap-0 md:grid-cols-2">
                  {result.points.map((p, i) => (
                    <li
                      key={i}
                      className="border-t border-[color:color-mix(in_oklab,var(--color-primary-blue)_10%,transparent)] py-4 text-[clamp(1rem,1.3vw,1.1rem)] leading-[1.8] text-[color:color-mix(in_oklab,var(--color-foreground)_82%,transparent)]"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <p className={`mt-6 max-w-[48ch] ${bodySm}`}>{result.closing}</p>
              </div>

              <aside className="self-start border-l-2 border-[var(--color-warm-orange)] pl-5 md:pl-6">
                <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--color-warm-orange)] uppercase">
                  Als er niets verandert
                </p>
                <h3 className={`${h3} mt-3`}>{stakes.title}</h3>
                <ul className="mt-5 space-y-3">
                  {stakes.points.map((p, i) => (
                    <li key={i} className={`flex gap-3 ${body}`}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-warm-orange)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className={`mt-5 ${bodySm}`}>{stakes.closing}</p>
                <div className="mt-6">
                  <a href="#" className={ctaPrimaryButton}>
                    {cta.primary}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── VOOR WIE ── */}
        <section className={sectionY}>
          <div className={`${container} story51-divider pt-12 md:pt-16`}>
            <p className={`${eyebrow} micro-underline inline-block`}>Voor wie</p>
            <h2 className={`${h2} max-w-[16ch]`}>Past dit traject bij jou?</h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="border-l-2 border-[#22c55e] pl-5 md:pl-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#1a7a3a] uppercase">
                  Dit is voor jou als
                </p>
                <ul className="mt-5 space-y-3">
                  {forWho.forYou.items.map((item, i) => (
                    <li key={i} className={`flex gap-3 ${body}`}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-2 border-[#ef4444] pl-5 md:pl-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#b72828] uppercase">
                  Dit is niet voor jou als
                </p>
                <ul className="mt-5 space-y-3">
                  {forWho.notForYou.items.map((item, i) => (
                    <li key={i} className={`flex gap-3 ${body}`}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef4444]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className={`mt-6 text-center ${bodySm} italic`}>{forWho.note}</p>
          </div>
        </section>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        className={`${trackedSection} ${sectionY} bg-[color:color-mix(in_oklab,var(--color-calm-blue)_6%,white)]`}
      >
        <div className={container}>
          <p className={`${eyebrow} micro-underline inline-block`}>Ervaringen</p>
          <h2 className={`${h2} max-w-[16ch] mb-12`}>Wat anderen zeggen</h2>
        </div>
        {/* Full-bleed carousel: narrow edge fades, wide viewport so more cards show */}
        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-hidden">
          <div className="testimonial-carousel relative overflow-x-hidden overflow-y-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28 lg:w-32 bg-gradient-to-r from-[color:color-mix(in_oklab,var(--color-calm-blue)_6%,white)] from-50% to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28 lg:w-32 bg-gradient-to-l from-[color:color-mix(in_oklab,var(--color-calm-blue)_6%,white)] from-50% to-transparent" />
            <div className="testimonial-track flex flex-row flex-nowrap items-stretch">
              <div className="testimonial-track-group flex flex-row flex-nowrap items-stretch">
                {testimonials.map((t) => (
                  <TestimonialCard key={`group-a-${t.id}`} testimonial={t} bodyClass={body} />
                ))}
              </div>
              <div className="testimonial-track-group flex flex-row flex-nowrap items-stretch" aria-hidden="true">
                {testimonials.map((t) => (
                  <TestimonialCard key={`group-b-${t.id}`} testimonial={t} bodyClass={body} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div id="cta" className={trackedSection}>
        <section className={sectionY}>
          <div className={container}>
            <div className="reveal-up rounded-3xl bg-[var(--color-primary-blue)] p-10 md:p-16 text-white shadow-[0_32px_64px_-40px_color-mix(in_oklab,var(--color-primary-blue)_60%,transparent)]">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
                <div>
                  <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--color-soft-orange)] uppercase mb-4">
                    Start nu
                  </p>
                  <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium text-white leading-[1.08] max-w-[14ch]">
                    {cta.title}
                  </h2>
                  <p className="mt-4 text-[clamp(1rem,1.2vw,1.1rem)] text-white/82 max-w-[48ch] leading-relaxed">
                    {cta.body}
                  </p>
                </div>
                <div className="border-l-2 border-[var(--color-soft-orange)] pl-5">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-soft-orange)] uppercase">
                    Snelle check
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      "Je wilt keuzes maken vanuit richting.",
                      "Je bent bereid eerlijk naar jezelf te kijken.",
                      "Je wilt van denken naar actie gaan.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-[1.75] text-white/78">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-soft-orange)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="micro-lift micro-soft-shadow w-full sm:w-auto inline-flex justify-center rounded-lg bg-[var(--color-soft-orange)] px-[1.7em] py-[0.95em] text-[var(--color-primary-blue)] font-medium hover:bg-[var(--color-warm-orange)] hover:text-white transition-all duration-200"
                >
                  {cta.primary}
                </a>
                <a
                  href="#"
                  className="micro-lift w-full sm:w-auto inline-flex justify-center rounded-lg border-2 border-white/70 px-[1.7em] py-[0.95em] text-white font-medium hover:bg-white/10 transition-colors duration-200"
                >
                  {cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${sectionY} story51-divider`}>
          <div className={`${narrowContainer} text-center pt-8`}>
            <p className="font-display text-[clamp(1.3rem,2.4vw,1.8rem)] leading-[1.5] text-[var(--color-primary-blue)]">
              {closing.line1} {closing.line2} {closing.line3}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
