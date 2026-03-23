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

const portraitImage =
  'url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80")';
const detailImage =
  'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80")';

function PremiumTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="premium-panel rounded-[1.7rem] p-7 md:p-8">
      <p className="font-display text-[1.45rem] leading-[1.55] text-[#18314b]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-7 flex items-center gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-full border border-[#8e6842]/20 bg-[#8e6842]/10 text-[0.78rem] font-semibold tracking-[0.14em] text-[#18314b]">
          {testimonial.initial}
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.08em] text-[#18314b] uppercase">
            {testimonial.name}
          </p>
          {"subtitle" in testimonial && testimonial.subtitle ? (
            <p className="mt-1 text-sm text-[#18314b]/68">{testimonial.subtitle}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function HomeStyle6() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <main className="premium-page premium-grain min-h-screen overflow-x-hidden text-[#18314b] lg:pl-24 xl:pl-32">
      <LeftProgressRail />

      <section
        id="intro"
        className="relative scroll-mt-24 overflow-hidden px-5 pb-20 pt-12 md:scroll-mt-28 md:px-8 md:pb-24 md:pt-20 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-3 text-[0.72rem] font-medium tracking-[0.16em] text-[#18314b]/64 uppercase">
            <span className="rounded-full border border-[#18314b]/10 bg-white/55 px-4 py-2 backdrop-blur-sm">
              4-weekse cursus
            </span>
            <span className="rounded-full border border-[#18314b]/10 bg-white/55 px-4 py-2 backdrop-blur-sm">
              Voor jonge professionals
            </span>
            <span className="rounded-full border border-[#18314b]/10 bg-white/55 px-4 py-2 backdrop-blur-sm">
              Begeleid door Ewout
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-5 text-[0.72rem] font-semibold tracking-[0.24em] text-[#8e6842] uppercase">
                Story Premium
              </p>
              <h1 className="font-display max-w-[11ch] text-[clamp(3.2rem,8vw,6.35rem)] leading-[0.96] tracking-[-0.04em] text-[#11253d]">
                {hero.headline}
              </h1>
              <p className="mt-7 max-w-[34rem] text-[clamp(1.03rem,1.45vw,1.18rem)] leading-[1.9] text-[#18314b]/82">
                {hero.subheadline}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-[1rem] bg-[#11253d] px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {hero.ctaPrimary}
                </a>
                <a
                  href="#"
                  className="premium-outline-button inline-flex items-center justify-center rounded-[1rem] px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-[#18314b] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {hero.ctaSecondary}
                </a>
              </div>

              <div className="mt-12 premium-divider pt-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8e6842] uppercase">
                  Een rustigere manier van kiezen
                </p>
                <p className="mt-3 max-w-[30rem] text-base leading-[1.85] text-[#18314b]/74">
                  Geen luidere doelen. Geen snellere hacks. Wel een helderder contact met je eigen
                  signalen, waarden en volgende stap.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full border border-[#8e6842]/22 bg-white/35 blur-sm md:block" />
              <div
                className="relative min-h-[32rem] overflow-hidden rounded-[2.2rem] border border-[#18314b]/10 bg-[#c8b499] shadow-[0_36px_64px_-42px_rgba(17,37,61,0.55)]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(17,37,61,0.06) 0%, rgba(17,37,61,0.42) 100%), ${portraitImage}`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="premium-panel max-w-sm rounded-[1.5rem] p-5">
                    <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#8e6842] uppercase">
                      Begeleide reflectie
                    </p>
                    <p className="mt-3 font-display text-[1.5rem] leading-[1.35] text-[#11253d]">
                      Helderheid die gegrond voelt, niet geforceerd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recognition" className="scroll-mt-24 px-5 py-20 md:scroll-mt-28 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#8e6842] uppercase">
              Herkenning
            </p>
            <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2.3rem,5vw,4rem)] leading-[1.02] tracking-[-0.035em] text-[#11253d]">
              {problem.title}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {problem.situations.map((s, index) => (
                <div
                  key={index}
                  className="border-t border-[#18314b]/12 py-4 text-[1.01rem] leading-[1.8] text-[#18314b]/82"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <aside className="premium-panel self-start rounded-[1.7rem] p-6 md:p-7">
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#8e6842] uppercase">
              Kerninzicht
            </p>
            <p className="mt-4 font-display text-[1.65rem] leading-[1.4] text-[#11253d]">
              {problem.insight}
            </p>
          </aside>
        </div>
      </section>

      <section id="problem" className="scroll-mt-24 px-5 py-20 md:scroll-mt-28 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl premium-divider pt-12 md:pt-16">
          <div className="grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#8e6842] uppercase">
                Het diepere probleem
              </p>
            </div>

            <div>
              <h2 className="font-display max-w-[13ch] text-[clamp(2.15rem,4.8vw,3.65rem)] leading-[1.02] tracking-[-0.035em] text-[#11253d]">
                {deeperProblem.title}
              </h2>
              <p className="mt-6 max-w-[40rem] text-[1.04rem] leading-[1.9] text-[#18314b]/82">
                {deeperProblem.intro}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {deeperProblem.points.map((point, index) => (
                  <div key={index} className="premium-panel rounded-[1.4rem] px-5 py-4">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#8e6842] uppercase">
                      Patroon {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-lg leading-[1.6] text-[#18314b]">{point}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-[40rem] text-base leading-[1.9] text-[#18314b]/72">
                {deeperProblem.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="guide"
        className="scroll-mt-24 bg-[#11253d] px-5 py-20 text-white md:scroll-mt-28 md:px-8 md:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,1.05fr)] lg:items-center">
          <div
            className="min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(17,37,61,0.16) 0%, rgba(17,37,61,0.58) 100%), ${detailImage}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#d8c6ae] uppercase">
              De gids
            </p>
            <h2 className="font-display mt-4 max-w-[11ch] text-[clamp(2.25rem,4.8vw,3.8rem)] leading-[1.03] tracking-[-0.035em] text-white">
              {guide.title}
            </h2>
            {guide.body.map((paragraph, index) => (
              <p key={index} className="mt-6 max-w-[39rem] text-[1.04rem] leading-[1.9] text-white/78">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="scroll-mt-24 px-5 py-20 md:scroll-mt-28 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#8e6842] uppercase">
              De 4-weekse reis
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.25rem,4.8vw,3.85rem)] leading-[1.02] tracking-[-0.035em] text-[#11253d]">
              {plan.title}
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.85] text-[#18314b]/76">{plan.intro}</p>
          </div>

          <ol className="mt-12 space-y-8 md:mt-14">
            {plan.weeks.map((week) => (
              <li
                key={week.number}
                className="grid gap-6 border-t border-[#18314b]/12 py-8 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-10"
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="font-display text-[2.5rem] leading-none text-[#8e6842] md:text-[3.4rem]">
                    {week.number}
                  </span>
                  <p className="pt-2 text-xs font-semibold tracking-[0.18em] text-[#18314b]/56 uppercase">
                    Week {week.number}
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
                  <div>
                    <h3 className="font-display text-[1.9rem] leading-[1.1] text-[#11253d]">{week.name}</h3>
                    <p className="mt-3 max-w-[24rem] text-[1.02rem] leading-[1.85] text-[#18314b]/76">
                      {week.subtitle}
                    </p>
                  </div>
                  <div className="premium-panel rounded-[1.5rem] p-5 md:p-6">
                    <ul className="space-y-3">
                      {week.points.map((point, index) => (
                        <li key={index} className="flex gap-3 text-[1.01rem] leading-[1.8] text-[#18314b]/82">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e6842]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl premium-divider pt-12 md:pt-16">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#8e6842] uppercase">
              Voor wie
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,4.8vw,3.7rem)] leading-[1.04] tracking-[-0.035em] text-[#11253d]">
              Past dit traject bij jou?
            </h2>
            <p className="mt-4 text-[1.02rem] leading-[1.85] text-[#18314b]/76">
              Maak dit vooraf helder. Zo weet je snel of dit je volgende stap is.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.8rem] border border-[#2a7a4b]/20 bg-[color:color-mix(in_oklab,#2a7a4b_9%,white)] p-6 md:p-7 shadow-[0_24px_52px_-40px_rgba(23,83,56,0.45)]">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#2a7a4b] uppercase">
                Dit is voor jou als
              </p>
              <ul className="mt-5 space-y-3">
                {forWho.forYou.items.map((item, index) => (
                  <li key={index} className="flex gap-3 text-[1rem] leading-[1.75] text-[#18314b]/84">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2a7a4b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[1.8rem] border border-[#8b2f2f]/20 bg-[color:color-mix(in_oklab,#8b2f2f_8%,white)] p-6 md:p-7 shadow-[0_24px_52px_-40px_rgba(85,23,23,0.45)]">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8b2f2f] uppercase">
                Dit is niet voor jou als
              </p>
              <ul className="mt-5 space-y-3">
                {forWho.notForYou.items.map((item, index) => (
                  <li key={index} className="flex gap-3 text-[1rem] leading-[1.75] text-[#18314b]/84">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b2f2f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-7 text-sm italic leading-[1.8] text-[#18314b]/62">{forWho.note}</p>
        </div>
      </section>

      <section id="results" className="scroll-mt-24 px-5 py-20 md:scroll-mt-28 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)]">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#8e6842] uppercase">
              Resultaat
            </p>
            <h2 className="font-display mt-4 max-w-[10ch] text-[clamp(2.3rem,5vw,4rem)] leading-[1.02] tracking-[-0.035em] text-[#11253d]">
              {result.title}
            </h2>
            <p className="mt-6 max-w-[38rem] text-[1.04rem] leading-[1.9] text-[#18314b]/78">
              {result.intro}
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {result.points.map((point, index) => (
                <li key={index} className="border-t border-[#18314b]/12 py-4 text-[1.01rem] leading-[1.8] text-[#18314b]/82">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[36rem] text-base leading-[1.9] text-[#18314b]/72">{result.closing}</p>
          </div>

          <aside className="premium-panel self-start rounded-[1.8rem] p-6 md:p-7">
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#8e6842] uppercase">
              Als er niets verandert
            </p>
            <h3 className="font-display mt-4 text-[2rem] leading-[1.1] text-[#11253d]">{stakes.title}</h3>
            <ul className="mt-6 space-y-3">
              {stakes.points.map((point, index) => (
                <li key={index} className="flex gap-3 text-[1rem] leading-[1.75] text-[#18314b]/82">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e6842]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-[1.85] text-[#18314b]/70">{stakes.closing}</p>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-[1rem] bg-[#11253d] px-5 py-3 text-sm font-medium tracking-[0.04em] text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              {cta.primary}
            </a>
          </aside>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-24 px-5 py-20 md:scroll-mt-28 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl premium-divider pt-12 md:pt-16">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#8e6842] uppercase">
              Ervaringen
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,4.8vw,3.7rem)] leading-[1.04] tracking-[-0.035em] text-[#11253d]">
              Minder stemmen, sterkere bewijskracht.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <PremiumTestimonial testimonial={featuredTestimonials[0]} />
            <div className="grid gap-6">
              <PremiumTestimonial testimonial={featuredTestimonials[1]} />
              <PremiumTestimonial testimonial={featuredTestimonials[2]} />
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="scroll-mt-24 px-5 pb-20 pt-8 md:scroll-mt-28 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.2rem] bg-[#11253d] px-6 py-10 text-white shadow-[0_36px_72px_-44px_rgba(17,37,61,0.8)] md:px-10 md:py-14 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#d8c6ae] uppercase">
                  Start nu
                </p>
                <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.1rem)] leading-[1.02] tracking-[-0.04em] text-white">
                  {cta.title}
                </h2>
                <p className="mt-6 max-w-[37rem] text-[1.04rem] leading-[1.9] text-white/76">{cta.body}</p>
              </div>

              <div className="premium-panel rounded-[1.7rem] p-6 text-[#11253d]">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8e6842] uppercase">
                  Snelle check
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Je wilt keuzes maken vanuit richting, niet vanuit twijfel.",
                    "Je bent bereid om eerlijk naar jezelf te kijken.",
                    "Je wil van denken naar concrete actie gaan.",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm leading-[1.75] text-[#18314b]/82">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e6842]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-[1rem] bg-[#d8c6ae] px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-[#11253d] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {cta.primary}
              </a>
              <a
                href="#"
                  className="inline-flex items-center justify-center rounded-[1rem] border border-white/20 px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                {cta.secondary}
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-10 border-t border-[#18314b]/12 pt-10 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start">
            <div>
              <p className="font-display max-w-[24ch] text-[1.7rem] leading-[1.45] text-[#11253d]">
                {closing.line1} {closing.line2} {closing.line3}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8e6842] uppercase">
                Past dit nu?
              </p>
              <p className="mt-4 text-sm leading-[1.8] text-[#18314b]/72">
                Als je hier “ja” op voelt, plan een kennismakingsgesprek of start direct met de cursus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
