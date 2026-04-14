import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const hockeyPillars = [
  {
    title: "Coaching",
    content:
      "Structured training under qualified coaches with experience in state and national level competition. Sessions cover technical skill, tactical understanding, physical conditioning, and mental preparation.",
  },
  {
    title: "Equipment",
    content:
      "Full equipment provision — sticks, shin guards, helmets, footwear — so no student is held back by what they can't afford. Equipment is maintained, replaced, and upgraded as students progress.",
  },
  {
    title: "Mentorship",
    content:
      "One-on-one mentorship from coaches who understand both the sport and the pressures of growing up in underserved communities. Academic support, career guidance, and personal development run parallel to athletic training.",
  },
  {
    title: "Competition",
    content:
      "Students are entered into district, state, and national tournaments on a structured timeline. Travel, accommodation, and participation costs are fully covered by PCube Foundation.",
  },
];

const expansionSports = [
  {
    sport: "Football",
    icon: "⚽",
    phase: "Phase 1 — 2025",
    description:
      "Ground-level talent identification across Thane's municipal schools, followed by structured coaching and district tournament participation.",
  },
  {
    sport: "Athletics",
    icon: "🏃",
    phase: "Phase 1 — 2025",
    description:
      "Track & field program with a focus on sprints, middle distance, and field events. Targeting state athletics championships within two years.",
  },
  {
    sport: "Cricket",
    icon: "🏏",
    phase: "Phase 2 — 2026",
    description:
      "Batting, bowling, and fielding development with competitive league exposure and BCCI-pathway alignment.",
  },
  {
    sport: "Kabaddi",
    icon: "🤼",
    phase: "Phase 2 — 2026",
    description:
      "Reviving traditional Indian sport with modern training methodology and systematic tournament pipeline.",
  },
  {
    sport: "Badminton",
    icon: "🏸",
    phase: "Phase 3 — 2027",
    description:
      "Court-based program with technical development and inter-district tournament exposure targeting state ranking.",
  },
];

const steps = [
  {
    label: "Identify",
    description:
      "Community outreach and school programs identify children with athletic potential across Thane District.",
  },
  {
    label: "Train",
    description:
      "Structured, professional coaching programs develop technical skill, fitness, and competitive mindset.",
  },
  {
    label: "Equip",
    description:
      "Full equipment provision ensures no financial barrier stands between a child and their training.",
  },
  {
    label: "Compete",
    description:
      "Systematic entry into district, state, and national tournaments builds competitive experience.",
  },
  {
    label: "Achieve",
    description:
      "National selections, scholarships, and professional pathways open for those who've earned them.",
  },
];

function ExpandablePillar({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[hsl(var(--border))]">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[hsl(var(--muted))]/20 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-testid={`button-pillar-${title.toLowerCase()}`}
      >
        <span className="font-display text-xl tracking-wider text-[hsl(var(--foreground))]">
          {title.toUpperCase()}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-[hsl(var(--primary))]" size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[hsl(var(--muted-foreground))] text-sm leading-relaxed border-t border-[hsl(var(--border))] pt-4">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Programs() {
  const prefersReduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main>
      <a
        href="#programs-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      {/* HERO */}
      <section
        id="programs-content"
        aria-label="Programs hero"
        className="pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              MULTI-SPORT ECOSYSTEM
            </span>
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none">
              IN PLAY
            </h1>
            <p className="mt-6 text-[hsl(var(--muted-foreground))] text-lg max-w-2xl leading-relaxed">
              PCube Foundation is not a hockey organization. It is a sports
              ecosystem builder that started with hockey and is growing outward
              — systematically, sustainably, with the same commitment to
              structure and excellence across every discipline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FIELD HOCKEY */}
      <section aria-label="Field Hockey program" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🏑</span>
                <span className="font-display text-sm tracking-widest border border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-3 py-1">
                  ● ACTIVE PROGRAM
                </span>
              </div>
              <h2 className="font-display text-5xl lg:text-6xl tracking-tight text-[hsl(var(--foreground))] mb-4">
                FIELD HOCKEY
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
                Our first and most advanced program. Two national selections in
                three years. A proven pipeline from Thane's streets to national
                competition. This is what structured sports development looks
                like.
              </p>
              <div className="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                <div className="text-center">
                  <p className="font-display text-3xl text-[hsl(var(--primary))]">
                    2
                  </p>
                  <p className="text-xs tracking-wide">National Selections</p>
                </div>
                <div className="w-px h-10 bg-[hsl(var(--border))]" />
                <div className="text-center">
                  <p className="font-display text-3xl text-[hsl(var(--primary))]">
                    47
                  </p>
                  <p className="text-xs tracking-wide">Active Students</p>
                </div>
                <div className="w-px h-10 bg-[hsl(var(--border))]" />
                <div className="text-center">
                  <p className="font-display text-3xl text-[hsl(var(--primary))]">
                    3
                  </p>
                  <p className="text-xs tracking-wide">Years Running</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-sm tracking-widest text-[hsl(var(--muted-foreground))] mb-4">
                THE FOUR PILLARS
              </h3>
              {hockeyPillars.map((pillar) => (
                <ExpandablePillar key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPANSION ROADMAP */}
      <section
        aria-label="Multi-sport expansion"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              WHAT'S COMING
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              THE ROADMAP
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expansionSports.map((sport, i) => (
              <motion.div
                key={sport.sport}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-6 hover:border-[hsl(var(--primary))]/40 transition-colors duration-300"
                data-testid={`card-expansion-${sport.sport.toLowerCase()}`}
              >
                <div className="text-3xl mb-4">{sport.icon}</div>
                <h3 className="font-display text-2xl tracking-wider text-[hsl(var(--foreground))] mb-1">
                  {sport.sport.toUpperCase()}
                </h3>
                <span className="font-display text-[10px] tracking-widest text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))] px-2 py-1 inline-block mb-4">
                  {sport.phase.toUpperCase()}
                </span>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {sport.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PROGRAMS WORK */}
      <section aria-label="How programs work" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              THE PROCESS
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              HOW IT WORKS
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                onClick={() => setActiveStep(i)}
                className={`flex-1 p-8 border-r border-b lg:border-b-0 border-[hsl(var(--border))] cursor-pointer transition-all duration-300 ${
                  activeStep === i
                    ? "bg-[hsl(var(--primary))]/5 border-r-[hsl(var(--primary))]"
                    : "hover:bg-[hsl(var(--card))]"
                }`}
                data-testid={`step-${step.label.toLowerCase()}`}
              >
                <div
                  className={`font-display text-4xl mb-4 ${activeStep === i ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"}`}
                >
                  0{i + 1}
                </div>
                <h3
                  className={`font-display text-xl tracking-wider mb-2 ${activeStep === i ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]"}`}
                >
                  {step.label.toUpperCase()}
                </h3>
                <AnimatePresence mode="wait">
                  {activeStep === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed overflow-hidden"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
