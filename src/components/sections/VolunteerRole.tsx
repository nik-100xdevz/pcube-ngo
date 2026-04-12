import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";

interface VolunteerRoleProps {
  title: string;
  timeCommitment: string;
  skills: string;
  impact: string;
  index: number;
}

export default function VolunteerRole({ title, timeCommitment, skills, impact, index }: VolunteerRoleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 4 }}
      className="border border-[hsl(var(--border))] p-6 bg-[hsl(var(--card))] group hover:border-[hsl(var(--primary))]/40 transition-colors duration-300 cursor-pointer"
      data-testid={`card-volunteer-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-xl tracking-wider text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
          {title.toUpperCase()}
        </h3>
        <span className="text-[hsl(var(--primary))] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">Apply →</span>
      </div>
      <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">{impact}</p>
      <div className="flex flex-wrap gap-4 text-xs text-[hsl(var(--muted-foreground))]">
        <div className="flex items-center gap-1.5">
          <Clock size={12} className="text-[hsl(var(--primary))]" />
          <span>{timeCommitment}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap size={12} className="text-[hsl(var(--primary))]" />
          <span>{skills}</span>
        </div>
      </div>
    </motion.div>
  );
}
