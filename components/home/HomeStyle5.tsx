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

export function HomeStyle5() {
  const sectionY = "py-16 md:py-20 lg:py-24";
  const trackedSection = "scroll-mt-24 md:scroll-mt-28";
  const container = "w-[90%] max-w-5xl mx-auto";
  const narrowContainer = "w-[90%] max-w-3xl mx-auto";
  const eyebrow =
    "text-[var(--color-warm-orange)] text-[0.72rem] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4";
  const h1 =
    "text-[clamp(1.9rem,4.6vw,3.15rem)] font-medium text-[var(--color-primary-blue)] leading-[1.15] tracking-tight";
  const h2 =
    "text-[clamp(1.5rem,3vw,2.15rem)] font-medium text-[var(--color-primary-blue)] leading-[1.2]";
  const h3 =
    "text-[clamp(1.08rem,1.8vw,1.35rem)] font-medium text-[var(--color-primary-blue)]";
  const body =
    "text-[clamp(1rem,1.35vw,1.125rem)] text-[color:color-mix(in_oklab,var(--color-foreground)_85%,transparent)] leading-relaxed";
  const bodySm =
    "text-[clamp(0.95rem,1.1vw,1.03rem)] text-[color:color-mix(in_oklab,var(--color-foreground)_78%,transparent)]";
  const ctaPrimaryButton =
    "micro-lift micro-soft-shadow w-full sm:w-auto inline-flex justify-center rounded-xl bg-[var(--color-warm-orange)] px-[1.55em] py-[0.9em] text-white font-medium hover:bg-[var(--color-soft-orange)] transition-colors duration-200 shadow-md shadow-[color:color-mix(in_oklab,var(--color-warm-orange)_25%,transparent)]";
  const ctaSecondaryButton =
    "micro-lift w-full sm:w-auto inline-flex justify-center rounded-xl border-2 border-[var(--color-calm-blue)] px-[1.55em] py-[0.9em] text-[var(--color-primary-blue)] font-medium hover:bg-[color:color-mix(in_oklab,var(--color-calm-blue)_12%,transparent)] transition-colors duration-200";
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-background)] text-[var(--color-foreground)] lg:pl-24 xl:pl-32">
      <LeftProgressRail />

      <section
        id="intro"
        className={`${trackedSection} pt-16 pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28 bg-transparent`}
      >
        <div className={`${container} grid md:grid-cols-5 gap-12 md:gap-16 items-center`}>
          <div className="reveal-up reveal-delay-2 md:col-span-2 order-2 md:order-1">
            <div className="micro-lift aspect-[4/5] rounded-3xl bg-gradient-to-br from-[color:color-mix(in_oklab,var(--color-calm-blue)_25%,transparent)] to-[color:color-mix(in_oklab,var(--color-primary-blue)_15%,transparent)] flex items-center justify-center text-[color:color-mix(in_oklab,var(--color-primary-blue)_40%,transparent)] text-sm font-medium border border-[color:color-mix(in_oklab,var(--color-calm-blue)_10%,transparent)]">
              [Foto Ewout]
            </div>
          </div>
          <div className="reveal-up md:col-span-3 order-1 md:order-2">
            <p className={`${eyebrow} micro-underline inline-block`}>Verhaal</p>
            <h1 className={`${h1} reveal-up reveal-delay-1`}>{hero.headline}</h1>
            <p className={`mt-6 max-w-[62ch] ${body} reveal-up reveal-delay-2`}>{hero.subheadline}</p>
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
      </section>

      <section id="recognition" className={`${trackedSection} ${sectionY} bg-white/60`}>
        <div className={`${container} max-w-2xl`}>
          <p className={`${eyebrow} micro-underline inline-block`}>Herkenning</p>
          <h2 className={`${h2} reveal-up`}>{problem.title}</h2>
          <ul className="mt-6 grid gap-4 md:gap-5">
            {problem.situations.map((s, i) => (
              <li
                key={i}
                className="micro-lift micro-soft-shadow flex items-start gap-3 rounded-xl bg-white/75 px-4 py-3 md:px-5 md:py-4 border border-[color:color-mix(in_oklab,var(--color-warm-orange)_15%,transparent)]"
              >
                <span className="text-[var(--color-warm-orange)] shrink-0 mt-1">—</span>
                <span className={body}>{s}</span>
              </li>
            ))}
          </ul>
          <div className="reveal-up reveal-delay-1 mt-8 rounded-2xl bg-[color:color-mix(in_oklab,var(--color-soft-orange)_16%,white)] border border-[color:color-mix(in_oklab,var(--color-warm-orange)_25%,transparent)] p-5 md:p-7">
            <p className={`${body} text-[clamp(1.02rem,1.5vw,1.18rem)]`}>{problem.insight}</p>
          </div>
        </div>
      </section>

      <section id="problem" className={`${trackedSection} ${sectionY} bg-transparent`}>
        <div className={container}>
          <div className="micro-lift micro-soft-shadow rounded-3xl bg-white/80 border border-[color:color-mix(in_oklab,var(--color-calm-blue)_10%,transparent)] p-8 md:p-12 shadow-sm">
            <div className="max-w-2xl ml-0">
              <p className={`${eyebrow} micro-underline inline-block`}>Het diepere probleem</p>
              <h2 className={h2}>{deeperProblem.title}</h2>
              <p className={`mt-4 max-w-[62ch] ${body}`}>{deeperProblem.intro}</p>
              <ul className="mt-4 space-y-2">
                {deeperProblem.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[var(--color-warm-orange)] shrink-0">•</span>
                    <span className={body}>{p}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-4 max-w-[62ch] ${bodySm}`}>{deeperProblem.closing}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="guide" className={`${trackedSection} ${sectionY} bg-white/60`}>
        <div className={`${container} grid md:grid-cols-5 gap-12 md:gap-16 items-center`}>
          <div className="md:col-span-2">
            <div className="micro-lift aspect-square rounded-3xl bg-gradient-to-br from-[color:color-mix(in_oklab,var(--color-primary-blue)_12%,transparent)] to-[color:color-mix(in_oklab,var(--color-calm-blue)_15%,transparent)] flex items-center justify-center text-[color:color-mix(in_oklab,var(--color-primary-blue)_35%,transparent)] text-sm font-medium border border-[color:color-mix(in_oklab,var(--color-calm-blue)_10%,transparent)]">
              [Beeld]
            </div>
          </div>
          <div className="md:col-span-3">
            <p className={`${eyebrow} micro-underline inline-block`}>De gids</p>
            <h2 className={h2}>{guide.title}</h2>
            {guide.body.map((p, i) => (
              <p key={i} className={`mt-4 max-w-[62ch] ${body}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className={`${trackedSection} ${sectionY} bg-transparent`}>
        <div className={container}>
          <p className={`${eyebrow} micro-underline inline-block`}>Het plan</p>
          <h2 className={h2}>{plan.title}</h2>
          <p className={`mt-2 max-w-[62ch] ${bodySm}`}>{plan.intro}</p>
          <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-6">
            {plan.weeks.map((w) => (
              <div
                key={w.number}
                className="micro-lift micro-soft-shadow rounded-2xl border border-[color:color-mix(in_oklab,var(--color-calm-blue)_16%,transparent)] bg-white/70 p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:color-mix(in_oklab,var(--color-warm-orange)_18%,white)] text-[var(--color-warm-orange)] text-lg shrink-0">
                    {w.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className={h3}>{w.name}</h3>
                    <p className={`mt-1 ${bodySm}`}>{w.subtitle}</p>
                    <ul className="mt-3 space-y-2">
                      {w.points.map((p, i) => (
                        <li key={i} className={body}>
                          • {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="results" className={trackedSection}>
        <section className={`${sectionY} bg-white/60`}>
          <div className={container}>
            <p className={`${eyebrow} micro-underline inline-block`}>Resultaat</p>
            <h2 className={h2}>{result.title}</h2>
            <p className={`mt-2 max-w-[62ch] ${bodySm}`}>{result.intro}</p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.points.map((p, i) => (
                <li
                  key={i}
                  className="micro-lift micro-soft-shadow flex gap-3 rounded-xl bg-white/70 border border-[color:color-mix(in_oklab,var(--color-calm-blue)_14%,transparent)] px-4 py-4"
                >
                  <span className="text-[var(--color-soft-orange)] shrink-0">✓</span>
                  <span className={body}>{p}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-6 max-w-[62ch] ${bodySm}`}>{result.closing}</p>
          </div>
        </section>

        <section className={`${sectionY} bg-transparent`}>
          <div className={container}>
            <p className={`${eyebrow} micro-underline inline-block`}>Urgentie</p>
            <h2 className={h2}>{stakes.title}</h2>
            <ul className="mt-4 space-y-3">
              {stakes.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[var(--color-warm-orange)] shrink-0">•</span>
                  <span className={body}>{p}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-5 max-w-[62ch] ${bodySm}`}>
              <span className="text-[var(--color-warm-orange)] font-medium">Wachten kost richting.</span>{" "}
              {stakes.closing}
            </p>
            <div className="mt-8">
              <a href="#" className={ctaPrimaryButton}>
                {cta.primary}
              </a>
            </div>
          </div>
        </section>

        <section className={`${sectionY} bg-white/60`}>
          <div className={`${container} grid md:grid-cols-2 gap-12`}>
            <div className="micro-lift micro-soft-shadow glow-green bg-white/60 rounded-2xl p-6 border border-[color:color-mix(in_oklab,var(--color-calm-blue)_10%,transparent)]">
              <p className={eyebrow}>Voor jou</p>
              <h2 className={h3}>{forWho.forYou.title}</h2>
              <ul className="mt-4 space-y-2">
                {forWho.forYou.items.map((item, i) => (
                  <li key={i} className={body}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="micro-lift micro-soft-shadow glow-red bg-white/60 rounded-2xl p-6 border border-[color:color-mix(in_oklab,var(--color-calm-blue)_10%,transparent)]">
              <p className={eyebrow}>Niet voor jou</p>
              <h2 className={h3}>{forWho.notForYou.title}</h2>
              <ul className="mt-4 space-y-2">
                {forWho.notForYou.items.map((item, i) => (
                  <li key={i} className={body}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="pb-16 md:pb-20 lg:pb-24 bg-white/60">
          <p className={`${container} text-center text-[color:color-mix(in_oklab,var(--color-foreground)_78%,transparent)] italic`}>
            {forWho.note}
          </p>
        </section>
      </div>

      <section
        id="testimonials"
        className={`${trackedSection} ${sectionY} bg-[color:color-mix(in_oklab,var(--color-calm-blue)_6%,white)]`}
      >
        <div className={container}>
          <p className={`${eyebrow} micro-underline inline-block`}>Ervaringen</p>
          <h2 className={`${h2} mb-12`}>Wat anderen zeggen</h2>
        </div>
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

      <div id="cta" className={trackedSection}>
        <section className={`${sectionY} bg-transparent`}>
          <div className={container}>
            <div className="reveal-up rounded-3xl bg-[var(--color-primary-blue)] p-12 md:p-16 text-white text-center shadow-xl shadow-[color:color-mix(in_oklab,var(--color-primary-blue)_20%,transparent)]">
              <h2 className="text-[clamp(1.5rem,3vw,2.3rem)] font-medium">{cta.title}</h2>
              <p className="mt-4 text-[clamp(1rem,1.2vw,1.1rem)] text-white/88 max-w-[62ch] mx-auto leading-relaxed">
                {cta.body}
              </p>
              <div className="mt-12 flex flex-wrap gap-4 justify-center">
                <a
                  href="#"
                  className="micro-lift micro-soft-shadow w-full sm:w-auto inline-flex justify-center rounded-xl bg-[var(--color-soft-orange)] px-[1.7em] py-[0.95em] text-[var(--color-primary-blue)] font-medium hover:bg-[var(--color-warm-orange)] hover:text-white transition-all duration-200"
                >
                  {cta.primary}
                </a>
                <a
                  href="#"
                  className="micro-lift w-full sm:w-auto inline-flex justify-center rounded-xl border-2 border-white/70 px-[1.7em] py-[0.95em] text-white font-medium hover:bg-white/10 transition-colors duration-200"
                >
                  {cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${sectionY} bg-white/60`}>
          <div className={`${narrowContainer} text-center`}>
            <p className={body}>
              {closing.line1} {closing.line2} {closing.line3}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
