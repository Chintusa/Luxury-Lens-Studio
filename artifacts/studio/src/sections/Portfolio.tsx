import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { id: "photo-1519741497674-611481863552", h: "tall", fallback: "photo-1583939003579-730e3918a45a" },
  { id: "photo-1464699908537-0954e50791ee", h: "short", fallback: "photo-1469371670807-013ccf25f16a" },
  { id: "photo-1520242739010-44e95bde329e", h: "medium", fallback: "photo-1520854221256-17451cc331bf" },
  { id: "photo-1583939003579-730e3918a45a", h: "tall", fallback: "photo-1469371670807-013ccf25f16a" },
  { id: "photo-1499856871958-5b9627545d1a", h: "short", fallback: "photo-1537633552985-df8429e8048b" },
  { id: "photo-1537633552985-df8429e8048b", h: "medium", fallback: "photo-1511285560929-80b456fea0bc" },
  { id: "photo-1548013146-72479768bada", h: "tall", fallback: "photo-1587474260584-136574528ed5" },
  { id: "photo-1522673607200-164d1b6ce486", h: "short", fallback: "photo-1591604466107-ec97de577aff" },
  { id: "photo-1469371670807-013ccf25f16a", h: "medium", fallback: "photo-1583939003579-730e3918a45a" },
  { id: "photo-1511285560929-80b456fea0bc", h: "tall", fallback: "photo-1464699908537-0954e50791ee" },
  { id: "photo-1512453979798-5ea266f8880c", h: "short", fallback: "photo-1525625293386-3f8f99389edd" },
  { id: "photo-1606800052052-a08af7148866", h: "medium", fallback: "photo-1515934751635-c81c6bc9a2d8" },
];

const heightMap = {
  short: "h-56 md:h-64",
  medium: "h-72 md:h-80",
  tall: "h-96 md:h-[420px]",
};

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = useCallback(() => {
    setSelected((s) => (s === null ? null : (s - 1 + photos.length) % photos.length));
  }, []);

  const next = useCallback(() => {
    setSelected((s) => (s === null ? null : (s + 1) % photos.length));
  }, []);

  return (
    <section id="portfolio" className="py-40 md:py-52 bg-dark">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.35em] text-[10px] mb-5 font-light"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[0.95]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Portfolio
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 font-light text-sm max-w-xs leading-relaxed"
          >
            A curated selection across all disciplines. Click any image to view full size.
          </motion.p>
        </div>

        {/* Masonry — 3 col */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`break-inside-avoid cursor-pointer group relative overflow-hidden block ${heightMap[photo.h as keyof typeof heightMap]}`}
              onClick={() => setSelected(i)}
            >
              <img
                src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&q=85&w=800`}
                alt={`Portfolio ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/${photo.fallback}?auto=format&fit=crop&q=85&w=800`;
                }}
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/35 transition-colors duration-700" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="border border-white/60 text-white px-6 py-2 text-[10px] uppercase tracking-[0.25em] translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  View Full
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 md:mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:border-gold hover:text-gold hover:bg-gold/5 px-10 py-4 text-[11px] uppercase tracking-[0.25em] transition-all duration-400"
          >
            Commission a Shoot
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-dark/98 flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-6 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl w-full px-16 md:px-24"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={`https://images.unsplash.com/${photos[selected].id}?auto=format&fit=crop&q=95&w=1600`}
                  alt={`Portfolio ${selected + 1}`}
                  className="max-h-[85vh] max-w-full mx-auto object-contain block"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/${photos[selected].fallback}?auto=format&fit=crop&q=95&w=1600`;
                  }}
                />
                <p className="text-center text-white/25 text-xs uppercase tracking-widest mt-5">
                  {selected + 1} / {photos.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
