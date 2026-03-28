"use client";

import { useRouter, useSearchParams } from "next/navigation";

const STYLES = [
  { v: "1", label: "Style 1 · Spacious" },
  { v: "2", label: "Style 2 · Editorial" },
  { v: "3", label: "Style 3 · Landing" },
  { v: "4", label: "Style 4 · Warm" },
  { v: "5", label: "Style 5 · Story" },
  { v: "5.1", label: "Style 5.1 · Story (sandbox)" },
  { v: "6", label: "Style 6 · Premium Story" },
] as const;

export function StyleSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("v") || "1";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-[#1f3a5f]/70 mr-1">Variant:</span>
      {STYLES.map(({ v, label }) => (
        <button
          key={v}
          onClick={() => router.push(`/?v=${encodeURIComponent(v)}`)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            current === v
              ? "bg-[#1f3a5f] text-white"
              : "bg-white/80 text-[#1f3a5f] border border-[#4a7ba7]/30 hover:border-[#1f3a5f] hover:bg-[#f5f8fb]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
