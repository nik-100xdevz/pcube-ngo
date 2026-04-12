import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ImpactStats from "@/components/sections/ImpactStats";
import ProgramCard from "@/components/sections/ProgramCard";
import StudentProfile from "@/components/sections/StudentProfile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const programs = [
  {
    sport: "Field Hockey",
    description: "Our flagship program — structured coaching, equipment support, and a proven pathway to national competition.",
    status: "active" as const,
    icon: "🏑",
    accentColor: "#f5a623",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Football",
    description: "Systematic identification and training pipeline for gifted youth footballers across Thane District.",
    status: "expanding" as const,
    icon: "⚽",
    imageUrl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Athletics",
    description: "Track & field development program nurturing sprinters, jumpers, and middle-distance runners.",
    status: "expanding" as const,
    icon: "🏃",
    imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Cricket",
    description: "Structured batting, bowling, and fielding programs with competitive league exposure.",
    status: "expanding" as const,
    icon: "🏏",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Kabaddi",
    description: "Reviving the roots of Indian sport — disciplined training and regional tournament participation.",
    status: "expanding" as const,
    icon: "🤼",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Badminton",
    description: "Court-based program with technical skill development and inter-district tournament exposure.",
    status: "expanding" as const,
    icon: "🏸",
    imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=640&q=80&auto=format&fit=crop",
  },
];

const testimonials = [
  { quote: "Before PCube, I had talent but no direction. Now I've represented my district at the national level.", author: "Rohit M.", role: "Field Hockey Student" },
  { quote: "These children train like professionals. PCube's discipline and care changed not just their games — but their futures.", author: "Coach Priya S.", role: "Field Hockey Coach" },
  { quote: "My son came home with a national selection letter. I didn't believe it was real.", author: "Meena K.", role: "Parent" },
];

const photoStrip = [
  {
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop",
    caption: "Training on the field",
  },
  {
    url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80&auto=format&fit=crop",
    caption: "Community outreach",
  },
  {
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80&auto=format&fit=crop",
    caption: "Celebrating champions",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    let frame: number;
    const animate = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [prefersReduced]);

  return (
    <main>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]">
        Skip to content
      </a>

      {/* HERO */}
      <section id="main-content" aria-label="Hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80&auto=format&fit=crop"
            alt="Field hockey players in action"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[hsl(240,10%,4%)]/80" />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(43,100%,50%,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 20%, hsl(240,100%,40%,0.06) 0%, transparent 70%)"
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, hsl(240,10%,4%))" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 border border-[hsl(var(--primary))]/40 px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
              <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">THANE DISTRICT · MAHARASHTRA · INDIA</span>
            </motion.div>

            <motion.h1
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-[hsl(var(--foreground))] max-w-4xl"
            >
              TWO CHILDREN
              <br />
              FROM THANE
              <br />
              <span className="text-[hsl(var(--primary))]">NOW COMPETE</span>
              <br />
              FOR INDIA.
            </motion.h1>

            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-[hsl(var(--muted-foreground))] text-lg leading-relaxed max-w-xl"
            >
              PCube Foundation gives underprivileged children across Thane District a structured, supported pathway into competitive sports at the national level. This is how transformation begins — one session, one child, one chance.
            </motion.p>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/donate">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-display tracking-widest text-sm px-8 py-4 flex items-center gap-2 hover:brightness-110 transition-all duration-200"
                  data-testid="button-donate-hero"
                >
                  DONATE NOW <ArrowRight size={14} />
                </motion.button>
              </Link>
              <Link href="/sponsors">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[hsl(var(--foreground))]/30 text-[hsl(var(--foreground))] font-display tracking-widest text-sm px-8 py-4 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-200"
                  data-testid="button-sponsor-hero"
                >
                  BECOME A SPONSOR
                </motion.button>
              </Link>
              <Link href="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-[hsl(var(--muted-foreground))] font-display tracking-widest text-sm px-4 py-4 hover:text-[hsl(var(--foreground))] transition-colors duration-200 flex items-center gap-2"
                  data-testid="button-join-hero"
                >
                  JOIN THE MISSION →
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="text-[hsl(var(--muted-foreground))] animate-bounce" size={20} />
        </motion.div>
      </section>

      {/* IMPACT STATS */}
      <ImpactStats />

      {/* MANIFESTO */}
      <section aria-label="Manifesto" className="py-24 lg:py-36 bg-[hsl(var(--primary))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(1.8rem,5vw,4rem)] leading-tight tracking-tight text-[hsl(var(--primary-foreground))] max-w-4xl mx-auto"
          >
            SPORT IS NOT THE REWARD. IT IS THE ROAD.
          </motion.p>
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-[hsl(var(--primary-foreground))]/70 text-lg max-w-2xl mx-auto"
          >
            Every child who walks through our gates is a prospect. Every session is progress. Every game is play. This is PCube Foundation.
          </motion.p>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section aria-label="Field photos" className="py-16 lg:py-20 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
          <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">ON THE GROUND</span>
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">IN THE FIELD</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {photoStrip.map((photo, i) => (
            <motion.div
              key={i}
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <p className="font-display text-sm tracking-wider text-white">{photo.caption.toUpperCase()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section aria-label="Programs" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">MULTI-SPORT ECOSYSTEM</span>
              <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-[hsl(var(--foreground))] mt-2">
                WHAT<br />WE DO
              </h2>
            </div>
            <Link href="/programs">
              <span className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200 text-sm font-medium cursor-pointer">
                View all programs →
              </span>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-6 lg:px-10 pb-4" style={{ width: "max-content" }}>
            {programs.map((prog) => (
              <ProgramCard key={prog.sport} {...prog} />
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section aria-label="Impact Stories" className="py-20 lg:py-28 bg-[hsl(var(--muted))]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">PROOF OF IMPACT</span>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              THE PROSPECTS
            </h2>
          </div>
          <div className="space-y-8">
            <StudentProfile
              name="Arjun Patil"
              sport="Field Hockey"
              achievement="Selected for Sub-Junior National Championship, 2024"
              journey="Arjun joined PCube Foundation at age 11 with raw talent and no equipment. Within two years of structured coaching, he earned his district selection and then his state berth — ultimately representing Maharashtra at the Sub-Junior National Championship."
              quote="PCube didn't just teach me hockey. They taught me how to compete."
              initials="AP"
              imageUrl="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80&auto=format&fit=crop"
            />
            <StudentProfile
              name="Sneha Jadhav"
              sport="Field Hockey"
              achievement="Selected for National School Games, 2024"
              journey="Sneha's family couldn't afford her equipment or travel costs. PCube covered every expense — from her first stick to her train ticket to the nationals. She went on to be one of the standout performers in her age group at the National School Games."
              quote="My mother cried when I told her I was going to Delhi for a national tournament. So did I."
              initials="SJ"
              imageUrl="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* DONATE CTA BAND */}
      <section aria-label="Donate call to action" className="py-20 border-t border-[hsl(var(--border))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display text-[clamp(1.5rem,4vw,3rem)] tracking-tight text-[hsl(var(--foreground))] max-w-xl">
              EVERY RUPEE FUNDS A CHILD'S SHOT AT THE CHAMPIONSHIP PODIUM.
            </p>
            <p className="mt-2 text-[hsl(var(--muted-foreground))] text-sm">All donations are 80G tax-exempt.</p>
          </div>
          <Link href="/donate">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex-shrink-0 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-display tracking-widest text-lg px-10 py-5 hover:brightness-110 transition-all duration-200"
              data-testid="button-donate-cta-band"
            >
              DONATE NOW →
            </motion.button>
          </Link>
        </div>
      </section>

      {/* COMMUNITY VOICES */}
      <section aria-label="Community voices" className="py-20 lg:py-28 bg-[hsl(var(--card))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">WHAT THEY SAY</span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">COMMUNITY VOICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-8"
                data-testid={`testimonial-${i}`}
              >
                <div className="text-[hsl(var(--primary))] text-4xl font-serif mb-4 leading-none select-none">"</div>
                <p className="text-[hsl(var(--foreground))] text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <div>
                  <p className="font-display text-sm tracking-wider text-[hsl(var(--primary))]">{t.author.toUpperCase()}</p>
                  <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
