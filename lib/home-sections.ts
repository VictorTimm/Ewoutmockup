export const homeSections = [
  { id: "intro", label: "Start" },
  { id: "recognition", label: "Herkenning" },
  { id: "problem", label: "Probleem" },
  { id: "guide", label: "Gids" },
  { id: "plan", label: "Plan" },
  { id: "results", label: "Resultaat" },
  { id: "testimonials", label: "Ervaringen" },
  { id: "cta", label: "Start nu" },
] as const;

export type HomeSectionId = (typeof homeSections)[number]["id"];
