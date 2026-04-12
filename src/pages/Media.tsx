import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const categories = ["All", "Training", "Matches", "Events", "Milestones", "Community"];

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  aspectClass: string;
};

const gallery: GalleryItem[] = [
  {
    id: 1,
    category: "Training",
    title: "Morning drills, winter 2024",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 2,
    category: "Milestones",
    title: "Arjun's national selection ceremony",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-square",
  },
  {
    id: 3,
    category: "Training",
    title: "Goalkeeping session",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 4,
    category: "Community",
    title: "School outreach, Thane Municipal School",
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 5,
    category: "Matches",
    title: "District championship semi-final",
    imageUrl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-square",
  },
  {
    id: 6,
    category: "Events",
    title: "Annual felicitation ceremony",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 7,
    category: "Training",
    title: "Fitness conditioning camp",
    imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 8,
    category: "Milestones",
    title: "Sneha's school games selection",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-square",
  },
  {
    id: 9,
    category: "Community",
    title: "Parent orientation day",
    imageUrl: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
  },
];

const videos = [
  { id: 1, title: "PCube Foundation — Our Story", thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop", description: "The origin story of PCube Foundation and the children who made it possible." },
  { id: 2, title: "Training Day: Field Hockey", thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80&auto=format&fit=crop", description: "A full day at PCube's field hockey training ground in Thane." },
];

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const prefersReduced = useReducedMotion();

  const filtered = activeCategory === "All" ? gallery : gallery.filter(g => g.category === activeCategory);

  const navigate = (dir: "prev" | "next") => {
    if (!lightboxItem) return;
    const idx = filtered.findIndex(g => g.id === lightboxItem.id);
    const nextIdx = dir === "prev" ? (idx - 1 + filtered.length) % filtered.length : (idx + 1) % filtered.length;
    setLightboxItem(filtered[nextIdx]);
  };

  return (
    <main>
      <a href="#media-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]">
        Skip to content
      </a>

      <section id="media-content" aria-label="Media hero" className="pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-[hsl(var(--border))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">DOCUMENTING THE JOURNEY</span>
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none">MEDIA</h1>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section aria-label="Photo gallery" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">PHOTO GALLERY</span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">IN PICTURES</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Gallery categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`font-display text-xs tracking-widest px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-[hsl(var(--primary))] text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5"
                    : "border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))]/40"
                }`}
                data-testid={`tab-gallery-${cat.toLowerCase()}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3"
            >
              {filtered.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxItem(item)}
                  className="break-inside-avoid w-full block group"
                  aria-label={`View ${item.title}`}
                  data-testid={`gallery-item-${item.id}`}
                >
                  <div className={`relative ${item.aspectClass} overflow-hidden`}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="text-white" size={28} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="font-display text-xs tracking-wider text-white">{item.title.toUpperCase()}</p>
                      <span className="text-white/50 text-[10px]">{item.category}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section aria-label="Video gallery" className="py-20 lg:py-28 bg-[hsl(var(--card))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-xs tracking-widest text-[hsl(var(--primary))]">YOUTUBE CHANNEL</span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">WATCH THE JOURNEY</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                data-testid={`video-card-${video.id}`}
              >
                <div className="relative aspect-video overflow-hidden border border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary))]/40 transition-colors duration-300 mb-3">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                      <span className="text-black text-2xl ml-1">▶</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-3 right-3">
                    <span className="font-display text-[10px] tracking-widest bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-2 py-1">YOUTUBE</span>
                  </div>
                </div>
                <h3 className="font-display text-lg tracking-wider text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">{video.title.toUpperCase()}</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">{video.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://youtube.com/@pcubefoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] font-display tracking-widest text-sm px-6 py-3 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-200"
              data-testid="link-youtube-channel"
            >
              VISIT OUR YOUTUBE CHANNEL →
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-8"
            onClick={() => setLightboxItem(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="mt-4">
                <p className="font-display text-sm tracking-wider text-white">{lightboxItem.title.toUpperCase()}</p>
                <span className="text-white/50 text-xs">{lightboxItem.category}</span>
              </div>
            </motion.div>
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxItem(null)}
              aria-label="Close lightbox"
              data-testid="button-close-lightbox"
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              onClick={() => navigate("prev")}
              aria-label="Previous image"
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              onClick={() => navigate("next")}
              aria-label="Next image"
              data-testid="button-lightbox-next"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
