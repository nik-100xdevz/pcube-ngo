import { motion } from "framer-motion";
import { Link } from "wouter";
import StudentProfile from "@/components/sections/StudentProfile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const impactData = [
  { label: "Students Supported", value: 47 },
  { label: "National Selections", value: 2 },
  { label: "Active Programs", value: 1 },
  { label: "Years Active", value: 3 },
];

function Counter({ value, label }: { value: number; label: string }) {
  const prefersReduced = useReducedMotion();
  const displayRef = (node: HTMLSpanElement | null) => {
    if (!node || prefersReduced) {
      if (node) node.textContent = String(value);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          let start = 0;
          const duration = 1600;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            node.textContent = String(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else node.textContent = String(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
  };
  return (
    <div
      className="text-center"
      data-testid={`impact-stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span
        ref={displayRef}
        className="font-display text-7xl lg:text-9xl text-[hsl(var(--primary))] tabular-nums block"
      >
        0
      </span>
      <p className="font-display text-sm tracking-widest text-[hsl(var(--foreground))] mt-2">
        {label.toUpperCase()}
      </p>
    </div>
  );
}

export default function Impact() {
  const prefersReduced = useReducedMotion();

  return (
    <main>
      <a
        href="#impact-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      {/* HERO STATS */}
      <section
        id="impact-content"
        aria-label="Impact statistics"
        className="pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              THE NUMBERS
            </span>
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none">
              IMPACT
            </h1>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-[hsl(var(--border))]">
            {impactData.map((item) => (
              <Counter key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT PROFILES */}
      <section aria-label="National champions" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              PROOF THAT IT WORKS
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              THE PROSPECTS
            </h2>
            <p className="mt-4 text-[hsl(var(--muted-foreground))] max-w-2xl">
              Two children from Thane are now national-level competitors. Their
              stories are not inspirational footnotes — they are evidence of a
              working system.
            </p>
          </div>
          <div className="space-y-8">
            <StudentProfile
              name="Arjun Patil"
              sport="Field Hockey"
              achievement="Sub-Junior National Championship, 2024"
              journey="Arjun came to PCube at age 11. He'd played in the street, improvising equipment from sticks and balled-up cloth. He had instinct, but no system. Two years of structured coaching, equipment provision, and competitive exposure later, he earned a district selection, then a state berth. In 2024, he represented Maharashtra at the Sub-Junior National Championship — travelling on a train ticket PCube paid for, wearing a kit PCube provided, coached by a team that believed in him before he fully believed in himself."
              quote="PCube didn't just teach me hockey. They taught me how to compete."
              initials="AP"
            />
            <StudentProfile
              name="Sneha Jadhav"
              sport="Field Hockey"
              achievement="National School Games, 2024"
              journey="Sneha's school had a field but no program. Her family had ambition but no money. When PCube's community outreach team found her during a school visit, she was playing barefoot. Within eighteen months, she had proper footwear, a proper stick, a proper training schedule — and a slot at the National School Games. She became one of the standout performers in her category, catching the attention of selectors who hadn't previously heard of Thane District as a source of talent."
              quote="My mother cried when I told her I was going to Delhi for a national tournament. So did I."
              initials="SJ"
            />
          </div>
        </div>
      </section>

      {/* IMPACT VISUALIZATION */}
      <section
        aria-label="Program growth"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              GROWTH OVER TIME
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              IN NUMBERS
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { year: "2022", students: 12, events: 2 },
              { year: "2023", students: 28, events: 6 },
              { year: "2024", students: 47, events: 11 },
            ].map((row, i) => (
              <motion.div
                key={row.year}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-8"
                data-testid={`growth-row-${row.year}`}
              >
                <p className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] mb-4">
                  {row.year}
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="font-display text-5xl text-[hsl(var(--primary))]">
                      {row.students}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs tracking-wide mt-1">
                      Students
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-5xl text-[hsl(var(--foreground))]">
                      {row.events}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs tracking-wide mt-1">
                      Events
                    </p>
                  </div>
                </div>
                <div className="mt-6 h-1 bg-[hsl(var(--border))] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(row.students / 47) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.3,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full bg-[hsl(var(--primary))]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY RIPPLE */}
      <section aria-label="Community impact" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
                BEYOND THE INDIVIDUAL
              </span>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2 mb-8">
                THE RIPPLE EFFECT
              </h2>
            </div>
            <div className="space-y-6 text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                When Arjun received his national selection, two things happened.
                His younger brother, who had never shown interest in sport,
                asked to join PCube's program. His school principal, who had
                previously declined to allocate time for sports, reversed the
                decision.
              </p>
              <p>
                This is how transformation compounds. One child's success
                reshapes what their family believes is possible. That shift
                ripples into the neighborhood, the school, the community —
                changing the collective imagination of what children from Thane
                can achieve.
              </p>
              <p className="text-[hsl(var(--foreground))] font-medium">
                PCube's impact is not measured only in national selections. It
                is measured in every sibling who signed up, every teacher who
                started paying attention, every parent who started believing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        aria-label="Closing call to action"
        className="py-20 bg-[hsl(var(--primary))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-[clamp(2rem,6vw,5rem)] tracking-tight text-[hsl(var(--primary-foreground))] leading-tight max-w-3xl mx-auto"
          >
            THESE TWO STUDENTS ARE THE BEGINNING.
          </motion.p>
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-[hsl(var(--primary-foreground))]/70 text-lg max-w-xl mx-auto"
          >
            Help us fund the next Arjun. The next Sneha. The next generation of
            national champions from Thane.
          </motion.p>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10"
          >
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[hsl(var(--primary-foreground))] text-[hsl(var(--primary))] font-display tracking-widest text-lg px-10 py-5 hover:brightness-90 transition-all duration-200"
                data-testid="button-donate-impact"
              >
                DONATE NOW →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
