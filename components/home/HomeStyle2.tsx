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

const SECTIONS = [
  "Hero",
  "Herkenning",
  "Het probleem",
  "De gids",
  "Het plan",
  "Resultaat",
  "Urgentie",
  "Voor wie",
  "CTA",
  "Afsluiting",
  "Testimonials",
];

export function HomeStyle2() {
  return (
    <main className="min-h-screen bg-[#fafbfc] text-[#2b2b2b] overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 py-14">
        {/* Hero */}
        <section className="border-b-2 border-[#1f3a5f] pb-14">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[0]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1f3a5f] uppercase tracking-tight leading-tight max-w-2xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-[#2b2b2b]/88 leading-relaxed max-w-2xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-[#1f3a5f] text-white px-6 py-3.5 font-semibold text-sm tracking-wide hover:bg-[#2a4a75] transition-colors duration-200"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#"
              className="border-2 border-[#1f3a5f] text-[#1f3a5f] px-6 py-3.5 font-semibold text-sm tracking-wide hover:bg-[#1f3a5f]/05 transition-colors duration-200"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[1]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider">
            {problem.title}
          </h2>
          <ul className="mt-6 grid gap-4">
            {problem.situations.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-[#f2994a] font-bold text-sm shrink-0">{i + 1}.</span>
                <span className="text-[#2b2b2b]/88 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pl-5 border-l-4 border-[#4a7ba7]">
            <p className="text-[#2b2b2b]/82 leading-relaxed">{problem.insight}</p>
          </div>
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[2]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider">
            {deeperProblem.title}
          </h2>
          <p className="mt-4 text-[#2b2b2b]/88 leading-relaxed">{deeperProblem.intro}</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-[#2b2b2b]/88">
            {deeperProblem.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p className="mt-4 text-[#2b2b2b]/82 leading-relaxed">{deeperProblem.closing}</p>
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[3]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider">
            {guide.title}
          </h2>
          {guide.body.map((p, i) => (
            <p key={i} className="mt-4 text-[#2b2b2b]/88 leading-relaxed">
              {p}
            </p>
          ))}
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[4]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider">
            {plan.title}
          </h2>
          <p className="mt-2 text-[#2b2b2b]/80">{plan.intro}</p>
          <div className="mt-10 pl-6 border-l-2 border-[#1f3a5f] space-y-12 relative">
            {plan.weeks.map((w) => (
              <div key={w.number} className="relative">
                <span className="absolute -left-[30px] top-0.5 w-4 h-4 rounded-full bg-[#f2994a] ring-4 ring-[#fafbfc]" />
                <h3 className="text-lg font-bold text-[#1f3a5f]">
                  Week {w.number} – {w.name}
                </h3>
                <p className="text-sm text-[#2b2b2b]/80 mt-1">{w.subtitle}</p>
                <ul className="mt-3 list-disc list-inside text-[#2b2b2b]/85 text-sm space-y-1">
                  {w.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[5]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider">
            {result.title}
          </h2>
          <p className="mt-2 text-[#2b2b2b]/88">{result.intro}</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-[#2b2b2b]/88">
            {result.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p className="mt-4 text-[#2b2b2b]/82 leading-relaxed">{result.closing}</p>
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[6]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider">
            {stakes.title}
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-[#2b2b2b]/88">
            {stakes.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p className="mt-4 text-[#2b2b2b]/82 leading-relaxed">{stakes.closing}</p>
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15 grid md:grid-cols-2 gap-10">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4 md:col-span-2">
            {SECTIONS[7]}
          </span>
          <div className="bg-white p-6 border border-[#1f3a5f]/10 shadow-sm">
            <h2 className="text-lg font-bold text-[#1f3a5f] uppercase tracking-wide">
              {forWho.forYou.title}
            </h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-[#2b2b2b]/88">
              {forWho.forYou.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 border border-[#1f3a5f]/10 shadow-sm">
            <h2 className="text-lg font-bold text-[#1f3a5f] uppercase tracking-wide">
              {forWho.notForYou.title}
            </h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-[#2b2b2b]/88">
              {forWho.notForYou.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <p className="py-6 text-[#2b2b2b]/78 italic text-sm">{forWho.note}</p>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[8]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider">
            {cta.title}
          </h2>
          <p className="mt-4 text-[#2b2b2b]/88 leading-relaxed">{cta.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-[#f2994a] text-[#1f3a5f] px-6 py-3.5 font-bold text-sm hover:bg-[#e67e22] hover:text-white transition-all duration-200"
            >
              {cta.primary}
            </a>
            <a
              href="#"
              className="border-2 border-[#1f3a5f] text-[#1f3a5f] px-6 py-3.5 font-semibold text-sm hover:bg-[#1f3a5f] hover:text-white transition-colors duration-200"
            >
              {cta.secondary}
            </a>
          </div>
        </section>

        <section className="py-14 border-b border-[#1f3a5f]/15">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[9]}
          </span>
          <p className="text-lg text-[#2b2b2b]/88 leading-relaxed max-w-xl">
            {closing.line1} {closing.line2} {closing.line3}
          </p>
        </section>

        <section className="py-14">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#4a7ba7] mb-4">
            {SECTIONS[10]}
          </span>
          <h2 className="text-xl font-bold text-[#1f3a5f] uppercase tracking-wider mb-8">
            Testimonials
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="border border-[#1f3a5f]/12 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <p className="text-sm text-[#2b2b2b]/85 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-bold text-[#1f3a5f] text-sm">— {t.initial}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
