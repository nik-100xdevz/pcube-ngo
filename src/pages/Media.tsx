import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { BentoGridGalleryDemo } from "@/components/ui/demo";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const categories = [
  "All",
  "Training",
  "Matches",
  "Events",
  "Milestones",
  "Community",
];

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
    category: "Events",
    title: "Group Photo",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMrKHHu7zvAclrA0-REjQVaDunGh1dDwGiaJhKulmSMGTovigEEclrPPLdjORuHdXZUzmA18Er80PS-9t91Wx63tfhFFTh_wsz-q5DIXlct4k2Ks65jVa6OLnhmaL1PrTGEufeve0EozZ1Lvr6ZVGzI=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 2,
    category: "Community",
    title: "PCube Logo Moment",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczO0Uo1Wq3AZ2P6dhO5jrs8wkh7nq-6xYbcBsNSmwyqf50G842ybIqkbktHlPC2cSCVovSXRB33ilUjOkFdwz9fHJGt6BTZ2skwP0qdPJa9SkiEu46qgEf2xzwHfkxdTz8BApqn-mJ5-SkU1JuZzn-aT=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 3,
    category: "Training",
    title: "PCube Niche Session",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNa2XaKWb00wduVEkANE8V-oIMjmMeQCuzQ-m_To8qcyRVRQ9BYW7ELPvDKVrF0DZNNShO3UUVDIG_L3jIbxpZa2fgpTHhAoXAtFjGnThNpskDlKSYXJ1fhdejgk7s8GQ-Dy5r4ZXl9xQNBY7oS8h6q=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 4,
    category: "Milestones",
    title: "Coach Awards Distribution",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNI_LpLp7RoNPSZTmpeDOaanEkfHrXBwqaeKOktToNyigSTUmnhLEoRcPKGsxCZMuIGik0xeQ1ix4ZTdFKTlhlFQUvoPOpRCYGfs57I3hMV_r6wXw17sC7rmxF3wM4k0DCGGDnPUH7duQ-ExynDI75i=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 5,
    category: "Events",
    title: "Kit Distribution",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczPktW81ud2Fmkq9Ujw4ZEhdYSi00hyKYsovmM0aeeqq-spfJhVJBiMi7dgp1bqQQ1lLNmR9jpfiOAvX49Flon5g15MHhBVW4Rbm5ZF5dn55mhtEGSloYRZ6Rnt-G6vuwGJWHxOa7MRJOeXsCWMBI-uq=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-square",
  },
  {
    id: 6,
    category: "Training",
    title: "Ground Training Action",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMy6EX2KZVl7UQnppYqMwJp-wWVoMjkuPgMqqb3KKY-8jxl-E8h6N_9VAXu7tTtlV50Vbxscvulq4o9gXFlToRcg6GbGQl2NNJASrSumEOe29ZLMH8ENngHlqiUS1pXr7fOvCvwf5L9E7bm4vCCbStt=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 7,
    category: "Milestones",
    title: "Medal Ceremony",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczN-PXnmyROLJSqHZzlSCAPsXCJ45yOjxVcBDa7FQxkKKAgBHiNxyb4U-Z6BY8IglWXoXgZ9OX8s7G2q7MXRtO8drHPdXpYCm0YjCMLu1QlHMmValvvRAtORET911sv9G0tMvlFa4Tr4FKxH_FNgpe6D=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 8,
    category: "Events",
    title: "Junior Kit Distribution",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNrIr9c5eZ7M8NGOiUVFxzORxrIferxm0u3FO6Cqgv9fd-92wCqPLyrMlDiCnyem2yWTmeHhrun-33nSi5BbLaOJmQfoWeBRZl-_GVy0sezBydDzpmH5M9_EB2oJyHRhhc3C_7lERobT_Cb43fhlPQf=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-square",
  },
  {
    id: 9,
    category: "Training",
    title: "Coach on Ground",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMfFOVkuuBY6Sf2jiH7zJFQF_e2GHj3LfAoboKGlcDs9M-gK9THCb0EvW5a40Hagoq-icqboB7b8izWDaReg14-5sds1ni5MztToPLn9GZyHClapeTKVZFtQA7qH_Cta1n4aQ5OokEP8im33RJlIiuO=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 10,
    category: "Community",
    title: "Boys Small Kids",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczOcMZy0o4hVeMz8LcCdqlr6MK4kq0ChgPhIjvLuii7c9RWU7BSG_JjBjrVR4SQcnUdg7U93u_dVpEpSPUa5_dixKM0mppxHCxEn9pn-Gz5jpnJ54uWnTqhKeO4TVFF0Cpdkb16uLQXnDcQM5Q1KfLHg=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-square",
  },
  {
    id: 11,
    category: "Training",
    title: "Training Line-Up",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczO8I_j1jgXl1M6pGESCSYOn7KuJ6kTTP55hkTFQqrNWRc-9iAzbZvEg98UB3M6rV4YMjJJFymdrAK5-A55rPmxVKT6jlVQZQQ6euq9KzrpA5yvOWSwu-TyJRPaOZh4C6ZcBE_EjUVNEm87wvb0WL7tD=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 12,
    category: "Training",
    title: "Ground Session Different",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNWLTW7HM5WYVud7p9NFreuHqWXFcswjfb3ZhgTCrJlutfeci92uTYqNPdQ1uWYHUGDqxdWZiEaXt6jzL_MnFdViXYvAwlDHVeZZ5mm0gWrddvwcQgzOFeUrA1wIBT6vZIxISCVw02ScrvdDSs9o_8K=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 13,
    category: "Milestones",
    title: "Awards & Recognition",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczM0tyAL5Y9WDB8AjqV4DxOCU0Ep_p9q92Ms2F_uHkdxZg4OVdJZkiB6MwVy5N6xzABITbaArs6GpOZvRQHIpnO1bU0CsCa21F5VIyfEKdilY0SAPUCdrhADdTDj7e7WCkRjFUI5jPGZWhw3UFb7SUSH=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 14,
    category: "Matches",
    title: "Matchday Momentum",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMkksmAKTZeot_BPN3GGX3hYsIjGWqChjobxLNxOP37IPrcv_AiS5YeTsuqR7OrSrdGm4ChXStspc8N3qOOsn7KipHIHLkzrajSuDUiaiMmpvO-s4m4CJHBGbvtk63QdUzy0OTeqnOadP0A_1ln-TRX=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 15,
    category: "Community",
    title: "PCube Team Spirit",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczOpw_ZJqh92ZsPQeCZ8om2txVOMyMZJ7lzXr3Ysgp3ohhaWd_phd2b4wiEkzFYiSrTTOt6aCXujyTW8Ergl1w1pEdk6CLuOCGXXHDRXvMcA4w-k55d-lkbn2b66HnqnSK8243AqC8ybbtY5tzmuUL3M=w1376-h917-s-no-gm?authuser=0",
    aspectClass: "aspect-[3/4]",
  },
];

const videos = [
  {
    id: 1,
    title: "PCube Foundation — Our Story",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop",
    description:
      "The origin story of PCube Foundation and the children who made it possible.",
  },
  {
    id: 2,
    title: "Training Day: Field Hockey",
    thumbnail:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80&auto=format&fit=crop",
    description: "A full day at PCube's field hockey training ground in Thane.",
  },
];

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!lightboxItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem]);

  const filtered =
    activeCategory === "All"
      ? gallery
      : gallery.filter((g) => g.category === activeCategory);

  const navigate = (dir: "prev" | "next") => {
    if (!lightboxItem) return;
    const idx = filtered.findIndex((g) => g.id === lightboxItem.id);
    const nextIdx =
      dir === "prev"
        ? (idx - 1 + filtered.length) % filtered.length
        : (idx + 1) % filtered.length;
    setLightboxItem(filtered[nextIdx]);
  };

  return (
    <main>
      <a
        href="#media-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      <section
        id="media-content"
        aria-label="Media hero"
        className="pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              DOCUMENTING THE JOURNEY
            </span>
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none">
              MEDIA
            </h1>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section aria-label="Photo gallery" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              PHOTO GALLERY
            </span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              IN PICTURES
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Gallery categories"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`font-display text-sm tracking-widest px-4 py-2 border transition-all duration-200 ${
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
                  <div
                    className={`relative ${item.aspectClass} overflow-hidden`}
                  >
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
                      <p className="font-display text-xs tracking-wider text-white">
                        {item.title.toUpperCase()}
                      </p>
                      <span className="text-white/50 text-[10px]">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* INTERACTIVE GALLERY */}
      {/* <section
        aria-label="Interactive gallery"
        className="py-20 lg:py-28 border-t border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
          <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
            DRAG & EXPLORE
          </span>
          <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
            INTERACTIVE GALLERY
          </h2>
        </div>
        <BentoGridGalleryDemo />
      </section> */}

      {/* VIDEO SECTION */}
      <section
        aria-label="Video gallery"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              YOUTUBE CHANNEL
            </span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              WATCH THE JOURNEY
            </h2>
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
                    <span className="font-display text-[10px] tracking-widest bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-2 py-1">
                      YOUTUBE
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-lg tracking-wider text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                  {video.title.toUpperCase()}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                  {video.description}
                </p>
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
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
              <button
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 hover:bg-white transition-colors"
                onClick={() => setLightboxItem(null)}
                aria-label="Back to gallery"
                data-testid="button-back-lightbox"
              >
                <ArrowLeft size={14} />
                Back to gallery
              </button>

              <button
                className="inline-flex items-center gap-1 rounded-full bg-gray-900/75 px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-gray-900 transition-colors"
                onClick={() => setLightboxItem(null)}
                aria-label="Close lightbox"
                data-testid="button-close-lightbox"
              >
                <X size={14} />
                Close
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="mt-4">
                <p className="font-display text-sm tracking-wider text-white">
                  {lightboxItem.title.toUpperCase()}
                </p>
                <span className="text-white/50 text-xs">
                  {lightboxItem.category}
                </span>
              </div>
            </motion.div>
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
