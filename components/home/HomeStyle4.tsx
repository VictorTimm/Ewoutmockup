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

export function HomeStyle4() {
  return (
    <main className="min-h-screen bg-[#fefaf6] text-[#2b2b2b] overflow-x-hidden">
      {/* Hero card */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <div className="rounded-[2rem] bg-white p-10 md:p-14 shadow-xl shadow-[#f2994a]/08 border border-[#f2994a]/15">
          <p className="text-[#e67e22] text-sm font-semibold tracking-widest uppercase mb-4">
            Innerlijk kompas
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-[#1f3a5f] leading-tight">
            {hero.headline}
          </h1>
          <p className="mt-6 text-[#2b2b2b]/82 leading-relaxed text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-2xl bg-[#f2994a] px-8 py-4 text-white font-semibold shadow-lg shadow-[#f2994a]/25 hover:bg-[#e67e22] transition-all duration-200"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#"
              className="rounded-2xl bg-[#4a7ba7]/12 text-[#1f3a5f] px-8 py-4 font-semibold hover:bg-[#4a7ba7]/20 transition-colors duration-200 border border-[#4a7ba7]/20"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[#e67e22] text-xs font-semibold tracking-widest uppercase mb-4">
          Herkenning
        </p>
        <h2 className="text-2xl font-semibold text-[#1f3a5f]">
          {problem.title}
        </h2>
        <ul className="mt-6 space-y-3">
          {problem.situations.map((s, i) => (
            <li
              key={i}
              className="rounded-2xl bg-[#f2994a]/10 text-[#2b2b2b] px-5 py-3.5 text-left border border-[#f2994a]/15"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-md border border-[#f2994a]/15">
          <p className="text-[#2b2b2b]/85 leading-relaxed">{problem.insight}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[#e67e22] text-xs font-semibold tracking-widest uppercase mb-4">
          Het probleem
        </p>
        <h2 className="text-2xl font-semibold text-[#1f3a5f]">
          {deeperProblem.title}
        </h2>
        <p className="mt-4 text-[#2b2b2b]/85 leading-relaxed">{deeperProblem.intro}</p>
        <ul className="mt-4 space-y-3 text-[#2b2b2b]/85">
          {deeperProblem.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f2994a] shrink-0 mt-1.5" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[#2b2b2b]/78 leading-relaxed">{deeperProblem.closing}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="rounded-[2rem] bg-[#1f3a5f] p-8 md:p-12 text-white shadow-xl shadow-[#1f3a5f]/15">
          <p className="text-[#f2994a] text-xs font-semibold tracking-widest uppercase mb-4">
            De gids
          </p>
          <h2 className="text-2xl font-semibold text-white">
            {guide.title}
          </h2>
          {guide.body.map((p, i) => (
            <p key={i} className="mt-4 text-white/88 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[#e67e22] text-xs font-semibold tracking-widest uppercase mb-4">
          Het plan
        </p>
        <h2 className="text-2xl font-semibold text-[#1f3a5f]">{plan.title}</h2>
        <p className="mt-2 text-[#2b2b2b]/78 leading-relaxed">{plan.intro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {plan.weeks.map((w) => (
            <div
              key={w.number}
              className="rounded-[1.5rem] bg-white p-6 shadow-lg shadow-[#f2994a]/06 border border-[#f2994a]/15 hover:shadow-xl transition-shadow duration-200"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#f2994a] text-white text-sm font-bold w-9 h-9">
                {w.number}
              </span>
              <h3 className="mt-4 font-semibold text-[#1f3a5f] text-lg">
                {w.name}
              </h3>
              <p className="mt-2 text-sm text-[#2b2b2b]/78">{w.subtitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-[#2b2b2b]/85">
                {w.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[#e67e22] text-xs font-semibold tracking-widest uppercase mb-4">
          Resultaat
        </p>
        <h2 className="text-2xl font-semibold text-[#1f3a5f]">
          {result.title}
        </h2>
        <p className="mt-2 text-[#2b2b2b]/78">{result.intro}</p>
        <ul className="mt-4 space-y-3 text-[#2b2b2b]/85">
          {result.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f2994a] shrink-0 mt-1.5" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[#2b2b2b]/78 leading-relaxed">{result.closing}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[#e67e22] text-xs font-semibold tracking-widest uppercase mb-4">
          Urgentie
        </p>
        <h2 className="text-2xl font-semibold text-[#1f3a5f]">
          {stakes.title}
        </h2>
        <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
          {stakes.points.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
        <p className="mt-4 text-[#2b2b2b]/78 leading-relaxed">{stakes.closing}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="rounded-[1.5rem] bg-white p-6 shadow-lg border border-[#f2994a]/15">
          <p className="text-[#e67e22] text-xs font-semibold tracking-widest uppercase mb-3">
            Voor jou
          </p>
          <h2 className="text-xl font-semibold text-[#1f3a5f]">
            {forWho.forYou.title}
          </h2>
          <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
            {forWho.forYou.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.5rem] bg-white p-6 shadow-lg border border-[#4a7ba7]/15">
          <p className="text-[#4a7ba7] text-xs font-semibold tracking-widest uppercase mb-3">
            Niet voor jou
          </p>
          <h2 className="text-xl font-semibold text-[#1f3a5f]">
            {forWho.notForYou.title}
          </h2>
          <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
            {forWho.notForYou.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
      <p className="max-w-3xl mx-auto px-6 text-center text-[#2b2b2b]/78 italic">
        {forWho.note}
      </p>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#f2994a] to-[#e67e22] p-10 md:p-14 text-[#1f3a5f] text-center shadow-xl shadow-[#f2994a]/20">
          <h2 className="text-2xl md:text-3xl font-bold">{cta.title}</h2>
          <p className="mt-4 text-[#1f3a5f]/90 max-w-lg mx-auto leading-relaxed">
            {cta.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="rounded-2xl bg-[#1f3a5f] px-8 py-4 text-white font-semibold hover:bg-[#2a4a75] transition-colors duration-200"
            >
              {cta.primary}
            </a>
            <a
              href="#"
              className="rounded-2xl bg-white/95 px-8 py-4 text-[#1f3a5f] font-semibold hover:bg-white transition-colors duration-200 shadow-md"
            >
              {cta.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-lg text-[#2b2b2b]/85 leading-relaxed max-w-xl mx-auto">
          {closing.line1} {closing.line2} {closing.line3}
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[#e67e22] text-xs font-semibold tracking-widest uppercase mb-4">
          Ervaringen
        </p>
        <h2 className="text-2xl font-semibold text-[#1f3a5f] mb-10">
          Wat anderen zeggen
        </h2>
        <div className="space-y-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-[1.5rem] bg-white p-8 shadow-xl shadow-[#f2994a]/06 border border-[#f2994a]/12"
            >
              <p className="text-[#2b2b2b]/88 italic leading-relaxed text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-[#f2994a]/20 flex items-center justify-center font-bold text-[#1f3a5f] text-sm">
                  {t.initial}
                </span>
                <span className="font-semibold text-[#1f3a5f]">{t.initial}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
