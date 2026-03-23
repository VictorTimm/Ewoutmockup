"use client";

import { useEffect, useMemo, useState } from "react";
import { homeSections, type HomeSectionId } from "@/lib/home-sections";

const observerThresholds = Array.from({ length: 11 }, (_, index) => index / 10);

function getSectionScore(element: HTMLElement) {
  const viewportHeight = window.innerHeight || 1;
  const rect = element.getBoundingClientRect();
  const topBoundary = viewportHeight * 0.18;
  const bottomBoundary = viewportHeight * 0.82;
  const visibleHeight =
    Math.min(rect.bottom, bottomBoundary) - Math.max(rect.top, topBoundary);

  if (visibleHeight <= 0) {
    return 0;
  }

  const normalizedHeight = Math.min(rect.height, bottomBoundary - topBoundary);
  return visibleHeight / Math.max(normalizedHeight, 1);
}

export function LeftProgressRail() {
  const [activeId, setActiveId] = useState<HomeSectionId>(homeSections[0].id);

  useEffect(() => {
    const sectionElements = homeSections
      .map((section) => {
        const element = document.getElementById(section.id);
        return element ? [section.id, element] : null;
      })
      .filter(Boolean) as Array<[HomeSectionId, HTMLElement]>;

    if (!sectionElements.length) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;

      let bestId: HomeSectionId = homeSections[0].id;
      let bestScore = -1;

      for (const [sectionId, element] of sectionElements) {
        const score = getSectionScore(element);

        if (score > bestScore) {
          bestScore = score;
          bestId = sectionId;
        }
      }

      setActiveId((current) => (current === bestId ? current : bestId));
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveSection);
    };

    const observer = new IntersectionObserver(scheduleUpdate, {
      threshold: observerThresholds,
      rootMargin: "-18% 0px -18% 0px",
    });

    sectionElements.forEach(([, element]) => observer.observe(element));
    scheduleUpdate();
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const activeIndex = useMemo(
    () => homeSections.findIndex((section) => section.id === activeId),
    [activeId],
  );

  const progressHeight =
    activeIndex <= 0
      ? "0%"
      : `${(activeIndex / (homeSections.length - 1)) * 100}%`;

  const scrollToSection = (sectionId: HomeSectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    element.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="Pagina voortgang"
      className="pointer-events-none fixed left-[max(1rem,3vw)] top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="pointer-events-auto rounded-[1.75rem] border border-[color:color-mix(in_oklab,var(--color-calm-blue)_14%,transparent)] bg-[color:color-mix(in_oklab,white_88%,transparent)] px-3 py-4 backdrop-blur-md shadow-[0_16px_38px_-28px_color-mix(in_oklab,var(--color-primary-blue)_42%,transparent)] xl:px-4">
        <div className="relative">
          <div className="absolute bottom-4 left-[0.6875rem] top-4 w-px bg-[color:color-mix(in_oklab,var(--color-calm-blue)_18%,transparent)] xl:left-[0.75rem]" />
          <div
            className="absolute left-[0.6875rem] top-4 w-px rounded-full bg-[var(--color-warm-orange)]/80 transition-[height] duration-300 ease-out xl:left-[0.75rem]"
            style={{ height: `calc((100% - 2rem) * ${progressHeight.replace("%", "")} / 100)` }}
          />

          <ol className="flex flex-col gap-3 xl:gap-4">
            {homeSections.map((section, index) => {
              const state =
                index < activeIndex
                  ? "past"
                  : index === activeIndex
                    ? "active"
                    : "future";

              const itemClass =
                state === "active"
                  ? "text-[var(--color-primary-blue)] opacity-100 scale-105"
                  : state === "past"
                    ? "text-[color:color-mix(in_oklab,var(--color-primary-blue)_76%,transparent)] opacity-80"
                    : "text-[color:color-mix(in_oklab,var(--color-primary-blue)_58%,transparent)] opacity-50";

              const dotClass =
                state === "active"
                  ? "h-3.5 w-3.5 border-[var(--color-warm-orange)] bg-[var(--color-warm-orange)] shadow-[0_0_0_0.28rem_color-mix(in_oklab,var(--color-warm-orange)_14%,transparent)]"
                  : state === "past"
                    ? "h-3 w-3 border-[color:color-mix(in_oklab,var(--color-warm-orange)_44%,white)] bg-[color:color-mix(in_oklab,var(--color-warm-orange)_80%,white)]"
                    : "h-2.5 w-2.5 border-[color:color-mix(in_oklab,var(--color-calm-blue)_32%,transparent)] bg-white/80";

              return (
                <li key={section.id}>
                  <button
                    type="button"
                    aria-current={state === "active" ? "step" : undefined}
                    onClick={() => scrollToSection(section.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-2 py-1.5 text-left text-[0.72rem] font-medium tracking-[0.02em] transition-all duration-200 ease-out hover:scale-105 hover:opacity-100 focus-visible:scale-105 focus-visible:opacity-100 xl:text-xs ${itemClass}`}
                  >
                    <span
                      className={`relative z-10 inline-flex shrink-0 rounded-full border transition-all duration-250 ease-out ${dotClass}`}
                    />
                    <span className="whitespace-nowrap transition-opacity duration-200 group-hover:opacity-100">
                      {section.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
}
