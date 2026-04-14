import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Backpack,
  BookOpen,
  ChevronDown,
  Dumbbell,
  Flag,
  Medal,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import ImpactStats from "@/components/sections/ImpactStats";
import ProgramCard from "@/components/sections/ProgramCard";
import StudentProfile from "@/components/sections/StudentProfile";
import { BentoGridGalleryDemo } from "@/components/ui/demo";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const programs = [
  {
    sport: "Field Hockey",
    description:
      "Our flagship program — structured coaching, equipment support, and a proven pathway to national competition.",
    status: "active" as const,
    icon: "🏑",
    accentColor: "#f5a623",
    imageUrl:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Football",
    description:
      "Systematic identification and training pipeline for gifted youth footballers across Thane District.",
    status: "expanding" as const,
    icon: "⚽",
    imageUrl:
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Athletics",
    description:
      "Track & field development program nurturing sprinters, jumpers, and middle-distance runners.",
    status: "expanding" as const,
    icon: "🏃",
    imageUrl:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Cricket",
    description:
      "Structured batting, bowling, and fielding programs with competitive league exposure.",
    status: "expanding" as const,
    icon: "🏏",
    imageUrl:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Kabaddi",
    description:
      "Reviving the roots of Indian sport — disciplined training and regional tournament participation.",
    status: "expanding" as const,
    icon: "🤼",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&q=80&auto=format&fit=crop",
  },
  {
    sport: "Badminton",
    description:
      "Court-based program with technical skill development and inter-district tournament exposure.",
    status: "expanding" as const,
    icon: "🏸",
    imageUrl:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=640&q=80&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote:
      "Before PCube, I had talent but no direction. Now I've represented my district at the national level.",
    author: "Rohit M.",
    role: "Field Hockey Student",
  },
  {
    quote:
      "These children train like professionals. PCube's discipline and care changed not just their games — but their futures.",
    author: "Coach Priya S.",
    role: "Field Hockey Coach",
  },
  {
    quote:
      "My son came home with a national selection letter. I didn't believe it was real.",
    author: "Meena K.",
    role: "Parent",
  },
];

const impactHighlights = [
  {
    label: "Athletes Trained",
    value: "120+",
    icon: Users,
  },
  {
    label: "State Selections",
    value: "15",
    icon: Trophy,
  },
  {
    label: "National Players",
    value: "2",
    icon: Medal,
  },
];

const whyPcube = [
  {
    title: "Structured Training Programs",
    description:
      "Age-wise, skill-specific coaching plans designed for sustainable performance growth.",
    icon: Dumbbell,
  },
  {
    title: "Nutrition & Kit Support",
    description:
      "From sticks and shoes to recovery and nutrition guidance, we remove access barriers.",
    icon: Backpack,
  },
  {
    title: "Academic Mentoring",
    description:
      "We help athletes balance school and sport with mentoring and discipline systems.",
    icon: BookOpen,
  },
  {
    title: "Competition Exposure",
    description:
      "Players progress from local grounds to district, state, and national tournament pathways.",
    icon: Flag,
  },
];

const photoStrip = [
  {
    url: "https://lh3.googleusercontent.com/pw/AP1GczMrKHHu7zvAclrA0-REjQVaDunGh1dDwGiaJhKulmSMGTovigEEclrPPLdjORuHdXZUzmA18Er80PS-9t91Wx63tfhFFTh_wsz-q5DIXlct4k2Ks65jVa6OLnhmaL1PrTGEufeve0EozZ1Lvr6ZVGzI=w1376-h917-s-no-gm?authuser=0",
    caption: "Group photo · School 9-a-side hockey league",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/AP1GczNI_LpLp7RoNPSZTmpeDOaanEkfHrXBwqaeKOktToNyigSTUmnhLEoRcPKGsxCZMuIGik0xeQ1ix4ZTdFKTlhlFQUvoPOpRCYGfs57I3hMV_r6wXw17sC7rmxF3wM4k0DCGGDnPUH7duQ-ExynDI75i=w1376-h917-s-no-gm?authuser=0",
    caption: "Coach awards distribution",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/AP1GczPktW81ud2Fmkq9Ujw4ZEhdYSi00hyKYsovmM0aeeqq-spfJhVJBiMi7dgp1bqQQ1lLNmR9jpfiOAvX49Flon5g15MHhBVW4Rbm5ZF5dn55mhtEGSloYRZ6Rnt-G6vuwGJWHxOa7MRJOeXsCWMBI-uq=w1376-h917-s-no-gm?authuser=0",
    caption: "Junior kit distribution",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    document.title =
      "PCube Foundation – Empowering India's Future Athletes (Sports NGO)";

    let descriptionMeta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.name = "description";
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content =
      "PCube Foundation discovers and trains underprivileged youth in India through expert coaching, equipment support, and competition pathways that build future champions.";
  }, []);

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      {/* HERO */}
      <section
        id="main-content"
        aria-label="Hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      >
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80&auto=format&fit=crop"
            alt="Field hockey players in action"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[hsl(240,10%,4%)]/80" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(43,100%,50%,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 20%, hsl(240,100%,40%,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(240,10%,4%))",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 border border-[hsl(var(--primary))]/40 px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
              <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
                THANE DISTRICT · MAHARASHTRA · INDIA
              </span>
            </motion.div> */}

            <motion.h1
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-[hsl(var(--foreground))] max-w-4xl"
            >
              FROM VILLAGE GROUNDS
              <br />
              TO <span className="text-[hsl(var(--primary))]">NATIONAL</span>
              <br />
              ARENAS.
            </motion.h1>

            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 text-[hsl(var(--muted-foreground))] text-lg leading-relaxed max-w-xl"
            >
              At PCube Foundation, we discover and train underprivileged youth
              in India's towns and villages. Through expert coaching, equipment
              support, and competition pathways, we create future hockey and
              sports champions. Join our mission to unlock talent with Prospect.
              Progress. Play.
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
                  DONATE <ArrowRight size={14} />
                </motion.button>
              </Link>
              <Link href="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[hsl(var(--foreground))]/30 text-[hsl(var(--foreground))] font-display tracking-widest text-sm px-8 py-4 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-200"
                  data-testid="button-sponsor-hero"
                >
                  APPLY AS ATHLETE
                </motion.button>
              </Link>
              <Link href="/sponsors">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-[hsl(var(--muted-foreground))] font-display tracking-widest text-sm px-4 py-4 hover:text-[hsl(var(--foreground))] transition-colors duration-200 flex items-center gap-2"
                  data-testid="button-join-hero"
                >
                  SPONSOR AN ATHLETE →
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {[
                "80G Tax Exemption",
                "Child-Safe Coaching Practices",
                "Transparent Impact Reporting",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 border border-[hsl(var(--foreground))]/20 px-3 py-1.5 text-xs tracking-wide text-[hsl(var(--muted-foreground))]"
                >
                  <ShieldCheck
                    size={14}
                    className="text-[hsl(var(--primary))]"
                  />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown
            className="text-[hsl(var(--muted-foreground))] animate-bounce"
            size={20}
          />
        </motion.div>
      </section>

      {/* IMPACT HIGHLIGHTS */}
      <section
        aria-label="Impact highlights"
        className="py-12 bg-[hsl(var(--background))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {impactHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 grid place-items-center bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-display text-3xl tracking-tight text-[hsl(var(--foreground))]">
                        {item.value}
                      </p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <ImpactStats />

      {/* HOW WE HELP */}
      <section
        aria-label="How we help"
        className="py-20 lg:py-24 bg-[hsl(var(--muted))]/20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              HOW WE HELP
            </span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))]">
              FROM RAW TALENT TO REAL OPPORTUNITY
            </h2>
            <p className="mt-6 text-[hsl(var(--muted-foreground))] text-base lg:text-lg leading-relaxed">
              PCube identifies raw sporting talent in rural communities and
              provides the training, gear, and exposure these young athletes
              need. Our proven pipeline takes players from local fields to
              district, state and even national levels. By focusing first on
              hockey — India's game of passion — we're already seeing champions
              in the making.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/get-involved">
                <span className="inline-flex cursor-pointer items-center gap-2 bg-[hsl(var(--primary))] px-6 py-3 text-xs font-display tracking-widest text-[hsl(var(--primary-foreground))] hover:brightness-110 transition-all duration-200">
                  APPLY AS ATHLETE
                </span>
              </Link>
              <Link href="/sponsors">
                <span className="inline-flex cursor-pointer items-center gap-2 border border-[hsl(var(--border))] px-6 py-3 text-xs font-display tracking-widest text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-200">
                  SPONSOR AN ATHLETE
                </span>
              </Link>
              <Link href="/donate">
                <span className="inline-flex cursor-pointer items-center gap-2 border border-[hsl(var(--border))] px-6 py-3 text-xs font-display tracking-widest text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-200">
                  DONATE
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        aria-label="Manifesto"
        className="py-24 lg:py-36 bg-[hsl(var(--primary))]"
      >
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
            Every child who walks through our gates is a prospect. Every session
            is progress. Every game is play. This is PCube Foundation.
          </motion.p>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section
        aria-label="Field photos"
        className="py-16 lg:py-20 bg-[hsl(var(--background))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
          <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
            ON THE GROUND
          </span>
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
            IN THE FIELD
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {photoStrip.map((photo, i) => (
            <motion.div
              key={i}
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                <p className="font-display text-sm tracking-wider text-white">
                  {photo.caption.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED STORY */}
      <section
        aria-label="Featured athlete story"
        className="py-20 lg:py-24 border-y border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/10] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80&auto=format&fit=crop"
              alt="Young athletes training on a hockey field"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-display tracking-wide">
              FEATURED STORY · ATHLETE JOURNEY
            </p>
          </motion.div>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              CHAMPIONS IN THE MAKING
            </span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))]">
              MEET AANYA
            </h2>
            <p className="mt-5 text-[hsl(var(--muted-foreground))] leading-relaxed">
              From no cricket gear to district hockey captain — her journey
              started on a dusty village field. PCube gave Aanya training and
              support; now she's dreaming Olympic gold.
            </p>
            <Link href="/impact">
              <span className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-display tracking-wider text-[hsl(var(--primary))] hover:gap-3 transition-all duration-200">
                READ FULL STORY <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY PCUBE */}
      <section
        aria-label="Why PCube"
        className="py-20 lg:py-24 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              WHY PCUBE
            </span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))]">
              A COMPLETE SUPPORT SYSTEM FOR YOUNG ATHLETES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPcube.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6"
                >
                  <Icon size={20} className="text-[hsl(var(--primary))]" />
                  <h3 className="mt-4 font-display text-xl tracking-tight text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section aria-label="Programs" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
                MULTI-SPORT ECOSYSTEM
              </span>
              <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-[hsl(var(--foreground))] mt-2">
                WHAT WE DO
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
          <div
            className="flex gap-4 px-6 lg:px-10 pb-4"
            style={{ width: "max-content" }}
          >
            {programs.map((prog) => (
              <ProgramCard key={prog.sport} {...prog} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE GALLERY */}
      <section
        aria-label="Interactive gallery"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
          <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
            INSIDE THE JOURNEY
          </span>
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
            INTERACTIVE GALLERY
          </h2>
        </div>
        <BentoGridGalleryDemo />
      </section>

      {/* IMPACT STORIES */}
      <section
        aria-label="Impact Stories"
        className="py-20 lg:py-28 bg-[hsl(var(--muted))]/30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-xl tracking-widest text-[hsl(var(--primary))]">
              PROOF OF IMPACT
            </span>
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
      <section
        aria-label="Donate call to action"
        className="py-20 border-t border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display text-[clamp(1.5rem,4vw,3rem)] tracking-tight text-[hsl(var(--foreground))] max-w-xl">
              EVERY RUPEE FUNDS A CHILD'S SHOT AT THE CHAMPIONSHIP PODIUM.
            </p>
            <p className="mt-2 text-[hsl(var(--muted-foreground))] text-sm">
              All donations are 80G tax-exempt.
            </p>
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
      <section
        aria-label="Community voices"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              WHAT THEY SAY
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              COMMUNITY VOICES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-8"
                data-testid={`testimonial-${i}`}
              >
                <div className="text-[hsl(var(--primary))] text-4xl font-serif mb-4 leading-none select-none">
                  "
                </div>
                <p className="text-[hsl(var(--foreground))] text-sm leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div>
                  <p className="font-display text-sm tracking-wider text-[hsl(var(--primary))]">
                    {t.author.toUpperCase()}
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1">
                    {t.role}
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
