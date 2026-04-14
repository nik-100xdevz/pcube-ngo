import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SponsorTierProps {
  name: string;
  tagline: string;
  investment: string;
  funds: string;
  benefits: string[];
  featured?: boolean;
}

export default function SponsorTier({
  name,
  tagline,
  investment,
  funds,
  benefits,
  featured,
}: SponsorTierProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative p-8 border flex flex-col h-full ${
        featured
          ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5"
          : "border-[hsl(var(--border))] bg-[hsl(var(--card))]"
      }`}
      data-testid={`card-sponsor-${name.toLowerCase()}`}
    >
      {featured && (
        <div className="absolute -top-px left-0 right-0 h-[3px] bg-[hsl(var(--primary))]" />
      )}
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="font-display text-[10px] tracking-widest bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-2 py-1">
            MOST POPULAR
          </span>
        </div>
      )}
      <div className="mb-6">
        <p className="font-display text-sm tracking-widest text-[hsl(var(--muted-foreground))] mb-1">
          {tagline.toUpperCase()}
        </p>
        <h3
          className={`font-display text-4xl tracking-wider ${featured ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]"}`}
        >
          {name.toUpperCase()}
        </h3>
      </div>
      <div className="mb-6 pb-6 border-b border-[hsl(var(--border))]">
        <p className="font-display text-3xl text-[hsl(var(--foreground))]">
          {investment}
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
          minimum annual commitment
        </p>
        <p className="text-[hsl(var(--primary))] text-sm mt-2 font-medium">
          {funds}
        </p>
      </div>
      <ul className="space-y-3 flex-1">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-3 text-sm text-[hsl(var(--muted-foreground))]"
          >
            <Check
              size={14}
              className="text-[hsl(var(--primary))] mt-0.5 flex-shrink-0"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-8 block text-center font-display tracking-widest text-sm py-3 px-6 transition-all duration-200 ${
          featured
            ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:brightness-110"
            : "border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
        }`}
        data-testid={`button-sponsor-${name.toLowerCase()}`}
      >
        ENQUIRE →
      </motion.a>
    </motion.div>
  );
}
