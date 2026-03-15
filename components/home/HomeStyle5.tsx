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

export function HomeStyle5() {
  return (
    <main className="min-h-screen bg-[#eef2f6] text-[#2b2b2b] overflow-x-hidden">
      {/* Hero – photo + copy */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#4a7ba7]/25 to-[#1f3a5f]/15 flex items-center justify-center text-[#1f3a5f]/40 text-sm font-medium border border-[#4a7ba7]/10">
              [Foto Ewout]
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2">
            <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Verhaal
            </p>
            <h1 className="text-3xl md:text-4xl font-medium text-[#1f3a5f] leading-snug tracking-tight">
              {hero.headline}
            </h1>
            <p className="mt-6 text-[#2b2b2b]/82 leading-relaxed">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-xl bg-[#e67e22] px-6 py-3.5 text-white font-medium hover:bg-[#d66d15] transition-colors duration-200 shadow-md shadow-[#e67e22]/20"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#"
                className="rounded-xl border-2 border-[#4a7ba7] px-6 py-3.5 text-[#1f3a5f] font-medium hover:bg-[#4a7ba7]/10 transition-colors duration-200"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Herkenning
          </p>
          <h2 className="text-2xl font-medium text-[#1f3a5f]">
            {problem.title}
          </h2>
          <ul className="mt-6 space-y-4 text-[#2b2b2b]/85 leading-relaxed">
            {problem.situations.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#4a7ba7] shrink-0">—</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[#2b2b2b]/78 leading-relaxed">
            {problem.insight}
          </p>
        </div>
      </section>

      {/* Deeper problem – full-width card with inner max-width so no edge stick */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-white/80 border border-[#4a7ba7]/10 p-8 md:p-12 shadow-sm">
          <div className="max-w-2xl ml-0">
            <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Het diepere probleem
            </p>
            <h2 className="text-2xl font-medium text-[#1f3a5f]">
              {deeperProblem.title}
            </h2>
            <p className="mt-4 text-[#2b2b2b]/85 leading-relaxed">{deeperProblem.intro}</p>
            <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
              {deeperProblem.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#4a7ba7] shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[#2b2b2b]/78 leading-relaxed">{deeperProblem.closing}</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1f3a5f]/12 to-[#4a7ba7]/15 flex items-center justify-center text-[#1f3a5f]/35 text-sm font-medium border border-[#4a7ba7]/10">
              [Beeld]
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              De gids
            </p>
            <h2 className="text-2xl font-medium text-[#1f3a5f]">
              {guide.title}
            </h2>
            {guide.body.map((p, i) => (
              <p key={i} className="mt-4 text-[#2b2b2b]/85 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Het plan
        </p>
        <h2 className="text-2xl font-medium text-[#1f3a5f]">{plan.title}</h2>
        <p className="mt-2 text-[#2b2b2b]/78">{plan.intro}</p>
        <div className="mt-14 flex flex-col gap-10">
          {plan.weeks.map((w) => (
            <div
              key={w.number}
              className="flex gap-6 md:gap-12 items-start border-b border-[#4a7ba7]/15 pb-10 last:border-0 last:pb-0"
            >
              <span className="text-4xl font-light text-[#4a7ba7]/70 tabular-nums shrink-0">
                {String(w.number).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-medium text-[#1f3a5f]">
                  {w.name}
                </h3>
                <p className="mt-1 text-[#2b2b2b]/78 text-sm">{w.subtitle}</p>
                <ul className="mt-3 space-y-2 text-[#2b2b2b]/85 text-sm">
                  {w.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Resultaat
        </p>
        <h2 className="text-2xl font-medium text-[#1f3a5f]">{result.title}</h2>
        <p className="mt-2 text-[#2b2b2b]/78">{result.intro}</p>
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

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Urgentie
        </p>
        <h2 className="text-2xl font-medium text-[#1f3a5f]">
          {stakes.title}
        </h2>
        <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
          {stakes.points.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
        <p className="mt-4 text-[#2b2b2b]/78 leading-relaxed">{stakes.closing}</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div className="bg-white/60 rounded-2xl p-6 border border-[#4a7ba7]/10">
          <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Voor jou
          </p>
          <h2 className="text-xl font-medium text-[#1f3a5f]">
            {forWho.forYou.title}
          </h2>
          <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
            {forWho.forYou.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/60 rounded-2xl p-6 border border-[#4a7ba7]/10">
          <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Niet voor jou
          </p>
          <h2 className="text-xl font-medium text-[#1f3a5f]">
            {forWho.notForYou.title}
          </h2>
          <ul className="mt-4 space-y-2 text-[#2b2b2b]/85">
            {forWho.notForYou.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
      <p className="max-w-5xl mx-auto px-6 text-center text-[#2b2b2b]/78 italic">
        {forWho.note}
      </p>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-[#1f3a5f] p-12 md:p-16 text-white text-center shadow-xl shadow-[#1f3a5f]/20">
          <h2 className="text-2xl md:text-3xl font-medium">{cta.title}</h2>
          <p className="mt-4 text-white/88 max-w-xl mx-auto leading-relaxed">{cta.body}</p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="rounded-xl bg-[#f2994a] px-8 py-4 text-[#1f3a5f] font-medium hover:bg-[#e67e22] hover:text-white transition-all duration-200"
            >
              {cta.primary}
            </a>
            <a
              href="#"
              className="rounded-xl border-2 border-white/70 px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors duration-200"
            >
              {cta.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-lg text-[#2b2b2b]/85 leading-relaxed">
          {closing.line1} {closing.line2} {closing.line3}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-[#4a7ba7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Ervaringen
        </p>
        <h2 className="text-2xl font-medium text-[#1f3a5f] mb-12">
          Wat anderen zeggen
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#4a7ba7]/12 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-[#2b2b2b]/85 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 font-medium text-[#1f3a5f]">— {t.initial}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
