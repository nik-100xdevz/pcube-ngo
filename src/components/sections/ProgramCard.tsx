import { motion } from "framer-motion";

interface ProgramCardProps {
  sport: string;
  description: string;
  status: "active" | "expanding";
  icon: string;
  accentColor?: string;
  imageUrl?: string;
}

export default function ProgramCard({ sport, description, status, icon, accentColor = "hsl(var(--primary))", imageUrl }: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative flex-shrink-0 w-72 lg:w-80 bg-[hsl(var(--card))] border border-[hsl(var(--card-border))] group cursor-pointer overflow-hidden"
      data-testid={`card-program-${sport.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {imageUrl && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={imageUrl}
            alt={sport}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <span className="absolute top-4 left-4 text-3xl">{icon}</span>
          <span
            className={`absolute bottom-4 right-4 text-[10px] font-display tracking-widest px-2 py-1 border ${
              status === "active"
                ? "border-[hsl(var(--primary))] text-[hsl(var(--primary))] bg-black/40"
                : "border-white/40 text-white/70 bg-black/40"
            }`}
          >
            {status === "active" ? "● ACTIVE" : "EXPANDING"}
          </span>
        </div>
      )}

      <div className="p-8">
        {!imageUrl && (
          <>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${accentColor}08 0%, transparent 60%)` }}
            />
            <div className="text-4xl mb-6">{icon}</div>
            <div className="flex items-start justify-between mb-4">
              <span
                className={`text-[10px] font-display tracking-widest px-2 py-1 border ${
                  status === "active"
                    ? "border-[hsl(var(--primary))] text-[hsl(var(--primary))]"
                    : "border-[hsl(var(--muted-foreground))] text-[hsl(var(--muted-foreground))]"
                }`}
              >
                {status === "active" ? "● ACTIVE" : "EXPANDING"}
              </span>
            </div>
          </>
        )}

        <h3 className="font-display text-2xl tracking-wider text-[hsl(var(--foreground))] mb-3">{sport.toUpperCase()}</h3>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center gap-2 text-[hsl(var(--primary))] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <span>→</span>
        </div>
      </div>
    </motion.div>
  );
}
