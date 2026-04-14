import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const milestones = [
  {
    year: "2021",
    event: "Foundation Registered",
    description:
      "PCube Foundation formally registered as a non-profit organization in Maharashtra.",
  },
  {
    year: "2022",
    event: "12A Certification",
    description:
      "Received 12A certification, making organizational income tax-exempt.",
  },
  {
    year: "2022",
    event: "80G Certification",
    description:
      "Received 80G certification, making all donor contributions tax-deductible.",
  },
  {
    year: "2022",
    event: "First Hockey Program",
    description:
      "Launched field hockey as our flagship program with 12 students in Thane.",
  },
  {
    year: "2023",
    event: "First National Selection",
    description:
      "Arjun Patil becomes PCube's first student to receive a national-level selection.",
  },
  {
    year: "2024",
    event: "Second National Selection",
    description:
      "Sneha Jadhav selected for National School Games — proof that Arjun's journey wasn't a fluke.",
  },
  {
    year: "2025+",
    event: "Multi-Sport Expansion",
    description:
      "Systematic expansion into football, athletics, cricket, kabaddi, and badminton underway.",
  },
];

const team = [
  {
    name: "Rajesh Nair",
    role: "Founder & Executive Director",
    bio: "Former district-level athlete turned educator who saw the gap between talent and opportunity in Thane.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    name: "Priya Sharma",
    role: "Head Coach — Field Hockey",
    bio: "National-level player with 8 years of coaching experience, building the next generation.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    name: "Amit Kulkarni",
    role: "Program Director",
    bio: "Coordinates all coaching pipelines, equipment procurement, and competitive scheduling.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    name: "Sunita Patil",
    role: "Community Outreach Lead",
    bio: "Identifies promising students in schools and underserved neighborhoods across Thane District.",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop&crop=faces",
  },
];

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <main>
      <a
        href="#about-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      {/* HERO */}
      <section
        id="about-content"
        aria-label="About hero"
        className="pt-40 pb-20 lg:pt-48 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            {["PROSPECT.", "PROGRESS.", "PLAY."].map((word, i) => (
              <motion.div
                key={word}
                initial={prefersReduced ? {} : { opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-baseline gap-6 mb-2"
              >
                <span
                  className={`font-display text-[clamp(3rem,9vw,7rem)] tracking-tight leading-none ${i === 0 ? "text-[hsl(var(--primary))]" : i === 1 ? "text-[hsl(var(--foreground))]" : "text-[hsl(var(--muted-foreground))]"}`}
                >
                  {word}
                </span>
                <span className="text-[hsl(var(--muted-foreground))] text-sm hidden lg:block">
                  {i === 0
                    ? "— Every child who walks through our gates"
                    : i === 1
                      ? "— Every session moves them forward"
                      : "— Every game is where they belong"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section
        aria-label="Origin story"
        className="py-20 lg:py-28 border-t border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              THE BEGINNING
            </span>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-[hsl(var(--foreground))] mt-2 mb-8">
              WHERE WE CAME FROM
            </h2>
            <div className="w-24 h-[2px] bg-[hsl(var(--primary))] mb-8" />
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-sm max-w-none"
            >
              <p className="text-[hsl(var(--foreground))] text-lg leading-relaxed mb-6">
                Rajesh Nair had watched Thane's sports story for years. The
                District had produced athletes — real, talented, hungry athletes
                — who disappeared into the system not because they lacked
                ability, but because nobody gave them a structure.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                There were no organized training programs. No equipment
                pipelines. No coaches who knew how to navigate the state
                selection system. Children with genuine ability were left to
                figure it out alone, and most didn't. They went back to school,
                found work, and sport stayed a fantasy.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                In 2021, Rajesh and a small group of coaches, educators, and
                community leaders registered PCube Foundation with one mandate:
                build the infrastructure that was missing. Not charity —
                structure. Not sympathy — systems.
              </p>
              <p className="text-[hsl(var(--foreground))] leading-relaxed">
                Field hockey was the first sport, not because it was the only
                sport that mattered, but because the coaches were there, the
                pathways were understood, and the need was acute. Two national
                selections later, PCube is now building the same infrastructure
                for five more disciplines.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=900&q=80&auto=format&fit=crop"
                alt="Youth athletes training at PCube Foundation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="border-l-2 border-[hsl(var(--primary))] pl-4">
                  <p className="font-display text-sm tracking-wider text-white">
                    THANE DISTRICT, MAHARASHTRA
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Where every child gets a shot
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--primary))] flex items-center justify-center">
              <div className="text-center">
                <span className="font-display text-3xl text-[hsl(var(--primary-foreground))]">
                  3+
                </span>
                <p className="font-display text-[10px] tracking-widest text-[hsl(var(--primary-foreground))]/80 mt-1">
                  YEARS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section
        aria-label="Vision and mission"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[hsl(var(--primary))] p-12 lg:p-16"
            >
              <span className="font-display text-sm tracking-widest text-[hsl(var(--primary-foreground))]/60 block mb-6">
                VISION
              </span>
              <p className="font-display text-3xl lg:text-4xl tracking-tight leading-tight text-[hsl(var(--primary-foreground))]">
                A Thane where underprivileged children compete at the national
                level not as exceptions, but as the rule.
              </p>
            </motion.div>
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="bg-[hsl(var(--background))] p-12 lg:p-16 border border-[hsl(var(--border))]"
            >
              <span className="font-display text-sm tracking-widest text-[hsl(var(--muted-foreground))] block mb-6">
                MISSION
              </span>
              <p className="font-display text-3xl lg:text-4xl tracking-tight leading-tight text-[hsl(var(--foreground))]">
                To identify, train, equip, and expose underprivileged youth to
                structured competitive sports pathways across multiple
                disciplines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY SPORTS */}
      <section aria-label="Why sports" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-video overflow-hidden order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80&auto=format&fit=crop"
              alt="Field hockey in action"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[hsl(var(--primary))]/20" />
          </motion.div>

          <div className="order-1 lg:order-2">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              THE BELIEF
            </span>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-[hsl(var(--foreground))] mt-2 mb-8">
              WHY SPORT?
              <br />
              WHY NOW?
            </h2>
            <div className="space-y-6 text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                Sport is not entertainment. For children from underserved
                communities, it is one of the few meritocracies they can access.
                A hockey field doesn't care about your father's income. It cares
                about your speed, your skill, your discipline.
              </p>
              <p>
                But sport access isn't equal. The child in a government school
                in Thane and the child in a private school in Mumbai are not
                playing the same game. Equipment, coaching, travel, exposure —
                the gap between them is not talent. It's infrastructure.
              </p>
              <p className="text-[hsl(var(--foreground))] font-medium">
                PCube Foundation exists to close that gap — one sport, one
                child, one opportunity at a time. Because when a child from
                Thane stands on a national podium, it doesn't just change their
                life. It changes what every child in their neighborhood thinks
                is possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section
        aria-label="Milestone timeline"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              OUR JOURNEY
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              TRACKING PROGRESS
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-[2px] bg-[hsl(var(--border))] hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex gap-6 md:gap-12 items-start"
                  data-testid={`milestone-${i}`}
                >
                  <div className="flex-shrink-0 w-[80px] md:w-[120px]">
                    <span className="font-display text-sm tracking-wider text-[hsl(var(--primary))]">
                      {m.year}
                    </span>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 items-center justify-center w-4 h-4 rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--card))] mt-0.5 relative z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-display text-xl tracking-wider text-[hsl(var(--foreground))] mb-1">
                      {m.event.toUpperCase()}
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section aria-label="Leadership team" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              THE PEOPLE
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              WHO WE ARE
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] overflow-hidden group"
                data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative aspect-square overflow-hidden">
                  {member.imageUrl ? (
                    <>
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                      <span className="font-display text-4xl text-[hsl(var(--primary))]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-[hsl(var(--primary))] px-2 py-1">
                      <span className="font-display text-[10px] tracking-widest text-[hsl(var(--primary-foreground))]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg tracking-wider text-[hsl(var(--foreground))] mb-1">
                    {member.name.toUpperCase()}
                  </h3>
                  <p className="text-[hsl(var(--primary))] text-xs font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
