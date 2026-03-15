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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4a7ba7] mb-6">
      {children}
    </p>
  );
}

export function HomeStyle1() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#2b2b2b] overflow-x-hidden">
      {/* Hero */}
      <section className="relative max-w-2xl mx-auto px-6 pt-28 pb-36">
        <div className="absolute inset-0 top-0 left-0 right-0 h-[90vh] max-h-[720px] bg-gradient-to-b from-[#1f3a5f]/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <SectionLabel>Voor young professionals</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-light leading-[1.15] text-[#1f3a5f] tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-10 text-lg text-[#2b2b2b]/75 leading-relaxed max-w-xl">
            {hero.subheadline}
          </p>
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#f2994a] px-8 py-4 text-[#1f3a5f] font-medium shadow-lg shadow-[#f2994a]/25 hover:bg-[#e67e22] hover:shadow-[#e67e22]/30 transition-all duration-200"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#4a7ba7] px-8 py-4 text-[#1f3a5f] font-medium hover:bg-[#4a7ba7]/8 transition-colors duration-200"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>Herkenning</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f]">{problem.title}</h2>
        <ul className="mt-8 space-y-5 text-[#2b2b2b]/85">
          {problem.situations.map((s, i) => (
            <li key={i} className="pl-5 border-l-2 border-[#4a7ba7]/25 leading-relaxed">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-2xl bg-white/80 p-6 border border-[#4a7ba7]/10">
          <p className="text-[#2b2b2b]/80 italic leading-relaxed">{problem.insight}</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>Het diepere probleem</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f]">
          {deeperProblem.title}
        </h2>
        <p className="mt-6 text-[#2b2b2b]/85 leading-relaxed">{deeperProblem.intro}</p>
        <ul className="mt-6 space-y-3 text-[#2b2b2b]/85">
          {deeperProblem.points.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#4a7ba7] mt-0.5">—</span>
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#2b2b2b]/78 leading-relaxed">{deeperProblem.closing}</p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>De gids</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f]">{guide.title}</h2>
        {guide.body.map((p, i) => (
          <p key={i} className="mt-6 text-[#2b2b2b]/85 leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>Het plan</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f]">{plan.title}</h2>
        <p className="mt-4 text-[#2b2b2b]/78">{plan.intro}</p>
        <div className="mt-14 space-y-16">
          {plan.weeks.map((w) => (
            <div key={w.number} className="relative pl-8 border-l-2 border-[#4a7ba7]/20">
              <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#f2994a]/90 flex items-center justify-center text-white text-xs font-semibold">
                {w.number}
              </span>
              <h3 className="text-lg font-medium text-[#1f3a5f]">
                {w.name}
              </h3>
              <p className="mt-2 text-[#2b2b2b]/78 text-sm">{w.subtitle}</p>
              <ul className="mt-4 space-y-2 text-[#2b2b2b]/85 text-sm">
                {w.points.map((p, i) => (
                  <li key={i} className="pl-2">• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>Resultaat</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f]">{result.title}</h2>
        <p className="mt-4 text-[#2b2b2b]/78">{result.intro}</p>
        <ul className="mt-6 space-y-3 text-[#2b2b2b]/85">
          {result.points.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#f2994a] shrink-0">✓</span>
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#2b2b2b]/78 leading-relaxed">{result.closing}</p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>Urgentie</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f]">{stakes.title}</h2>
        <ul className="mt-6 space-y-3 text-[#2b2b2b]/85">
          {stakes.points.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
        <p className="mt-6 text-[#2b2b2b]/78 leading-relaxed">{stakes.closing}</p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>Voor wie</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f]">
          {forWho.forYou.title}
        </h2>
        <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
          {forWho.forYou.items.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-light text-[#1f3a5f] mt-12">
          {forWho.notForYou.title}
        </h2>
        <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
          {forWho.notForYou.items.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
        <p className="mt-8 text-[#2b2b2b]/78 italic">{forWho.note}</p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <div className="rounded-3xl bg-[#1f3a5f] p-10 md:p-12 text-white shadow-xl shadow-[#1f3a5f]/20">
          <h2 className="text-2xl font-light">{cta.title}</h2>
          <p className="mt-4 text-white/88 leading-relaxed">{cta.body}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#f2994a] px-8 py-4 text-[#1f3a5f] font-medium shadow-lg hover:bg-[#e67e22] hover:text-white transition-all duration-200"
            >
              {cta.primary}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors duration-200"
            >
              {cta.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24">
        <p className="text-lg text-[#2b2b2b]/78 leading-relaxed max-w-xl">
          {closing.line1} {closing.line2} {closing.line3}
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 border-t border-[#4a7ba7]/12">
        <SectionLabel>Ervaringen</SectionLabel>
        <h2 className="text-2xl font-light text-[#1f3a5f] mb-10">Testimonials</h2>
        <div className="space-y-10">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="pl-6 border-l-2 border-[#f2994a]/60 text-[#2b2b2b]/85 italic leading-relaxed"
            >
              &ldquo;{t.quote}&rdquo;
              <footer className="mt-4 not-italic font-medium text-[#1f3a5f] text-sm">
                — {t.initial}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
