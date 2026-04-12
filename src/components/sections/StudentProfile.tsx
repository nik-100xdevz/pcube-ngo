import { motion } from "framer-motion";

interface StudentProfileProps {
  name: string;
  sport: string;
  achievement: string;
  quote: string;
  journey: string;
  initials: string;
  imageUrl?: string;
}

export default function StudentProfile({ name, sport, achievement, quote, journey, initials, imageUrl }: StudentProfileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[hsl(var(--border))] overflow-hidden"
      data-testid={`profile-student-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative bg-[hsl(var(--card))] aspect-square lg:aspect-auto min-h-72 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={`${name} — ${sport}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/20 to-transparent" />
            <span className="font-display text-8xl lg:text-[10rem] text-[hsl(var(--primary))]/20 select-none">{initials}</span>
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] px-4 py-2">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary-foreground))]">{sport.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-12 flex flex-col justify-center bg-[hsl(var(--card))]">
        <div className="mb-4">
          <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">NATIONAL COMPETITOR</span>
        </div>
        <h3 className="font-display text-4xl lg:text-5xl tracking-wider text-[hsl(var(--foreground))] mb-2">{name.toUpperCase()}</h3>
        <p className="text-[hsl(var(--primary))] text-sm font-medium mb-6">{achievement}</p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-8">{journey}</p>
        <blockquote className="border-l-2 border-[hsl(var(--primary))] pl-6">
          <p className="text-[hsl(var(--foreground))] text-lg italic leading-relaxed">"{quote}"</p>
        </blockquote>
      </div>
    </motion.article>
  );
}
