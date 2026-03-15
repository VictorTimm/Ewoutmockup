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

export function HomeStyle3() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero – full-bleed with layered gradient and subtle pattern */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[#1f3a5f]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a4a75] via-[#1f3a5f] to-[#152a45]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(242,153,74,0.15),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1f33] to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#f2994a] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            True North Cursus
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-[#f2994a] px-10 py-4 text-[#1f3a5f] text-lg font-bold shadow-xl shadow-black/20 hover:bg-[#e67e22] hover:text-white hover:shadow-[#e67e22]/40 transition-all duration-200"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 px-10 py-4 text-white text-lg font-bold hover:bg-white hover:text-[#1f3a5f] transition-all duration-200"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Content – card-style sections on dark bg */}
      <div className="bg-[#0f1f33] text-white">
        <div className="max-w-2xl mx-auto px-6 py-20 space-y-24">
          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#f2994a]">{problem.title}</h2>
            <ul className="mt-6 space-y-4 text-white/88 leading-relaxed">
              {problem.situations.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#f2994a] shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-white/75 leading-relaxed pl-6 border-l-2 border-[#f2994a]/50">
              {problem.insight}
            </p>
          </section>

          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#f2994a]">
              {deeperProblem.title}
            </h2>
            <p className="mt-4 text-white/88 leading-relaxed">{deeperProblem.intro}</p>
            <ul className="mt-4 space-y-2 text-white/88">
              {deeperProblem.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#f2994a] shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white/75 leading-relaxed">{deeperProblem.closing}</p>
          </section>

          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#f2994a]">{guide.title}</h2>
            {guide.body.map((p, i) => (
              <p key={i} className="mt-4 text-white/88 leading-relaxed">
                {p}
              </p>
            ))}
          </section>

          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#f2994a]">{plan.title}</h2>
            <p className="mt-2 text-white/75">{plan.intro}</p>
            <div className="mt-8 space-y-8">
              {plan.weeks.map((w) => (
                <div
                  key={w.number}
                  className="pl-6 border-l-4 border-[#f2994a] border-opacity-80"
                >
                  <h3 className="text-lg font-bold text-white">
                    Week {w.number} – {w.name}
                  </h3>
                  <p className="text-white/75 text-sm mt-1">{w.subtitle}</p>
                  <ul className="mt-2 space-y-1 text-white/88 text-sm">
                    {w.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#f2994a]">{result.title}</h2>
            <p className="mt-2 text-white/75">{result.intro}</p>
            <ul className="mt-4 space-y-3 text-white/88">
              {result.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#f2994a] shrink-0">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white/75 leading-relaxed">{result.closing}</p>
          </section>

          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#f2994a]">{stakes.title}</h2>
            <ul className="mt-4 space-y-2 text-white/88">
              {stakes.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#f2994a] shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white/75 leading-relaxed">{stakes.closing}</p>
          </section>

          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#f2994a]">
                {forWho.forYou.title}
              </h2>
              <ul className="mt-3 space-y-2 text-white/88 text-sm">
                {forWho.forYou.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#f2994a]">
                {forWho.notForYou.title}
              </h2>
              <ul className="mt-3 space-y-2 text-white/88 text-sm">
                {forWho.notForYou.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>
          <p className="text-white/75 italic text-sm -mt-12">{forWho.note}</p>

          {/* CTA block */}
          <section className="rounded-2xl bg-gradient-to-br from-[#f2994a] to-[#e67e22] p-10 md:p-14 text-center text-[#1f3a5f]">
            <h2 className="text-3xl font-bold">{cta.title}</h2>
            <p className="mt-4 text-[#1f3a5f]/90 max-w-lg mx-auto">{cta.body}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f3a5f] px-10 py-4 text-white text-lg font-bold hover:bg-[#2a4a75] transition-colors duration-200"
              >
                {cta.primary}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#1f3a5f] px-10 py-4 text-[#1f3a5f] font-bold hover:bg-[#1f3a5f] hover:text-white transition-all duration-200"
              >
                {cta.secondary}
              </a>
            </div>
          </section>

          <p className="text-center text-lg text-white/85 leading-relaxed">
            {closing.line1} {closing.line2} {closing.line3}
          </p>

          <section className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#f2994a] mb-8">Testimonials</h2>
            <div className="space-y-8">
              {testimonials.map((t) => (
                <blockquote
                  key={t.id}
                  className="text-white/88 pl-6 border-l-4 border-[#f2994a] leading-relaxed"
                >
                  &ldquo;{t.quote}&rdquo;
                  <footer className="mt-3 font-semibold text-white text-sm">
                    — {t.initial}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
