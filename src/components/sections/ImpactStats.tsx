import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 2, label: "National Selections", description: "Students competing at the national level" },
  { value: 47, label: "Children Supported", description: "Active athletes receiving coaching & mentorship" },
  { value: 3, suffix: "+", label: "Years Active", description: "Building structured pathways since 2021" },
];

function AnimatedCounter({ value, suffix = "", label, description }: Stat) {
  const countRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = countRef.current;
    if (!el || hasRun.current) return;

    if (prefersReduced) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let start = 0;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(eased * value);
            el.textContent = `${current}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = `${value}${suffix}`;
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, prefersReduced]);

  return (
    <div className="text-center" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <span
        ref={countRef}
        className="font-display text-6xl lg:text-8xl text-[hsl(var(--primary))] tabular-nums"
      >
        0{suffix}
      </span>
      <p className="font-display text-sm tracking-widest text-[hsl(var(--foreground))] mt-2 mb-1">{label.toUpperCase()}</p>
      <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-xs mx-auto">{description}</p>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section aria-label="Impact statistics" className="py-20 lg:py-28 border-y border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-0 md:divide-x md:divide-[hsl(var(--border))]">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 border border-[hsl(var(--primary))] px-6 py-3">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              12A & 80G CERTIFIED · ALL DONATIONS TAX-EXEMPT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
