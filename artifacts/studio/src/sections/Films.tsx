import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const films = [
  {
    photo: "photo-1606216840-e34c-4ade",
    fallback: "photo-1519225421-a9572-3a74",
    title: "A Tuscan Dream",
    location: "Florence & Como, Italy",
    duration: "12:48",
    year: "2024",
    featured: true,
  },
  {
    photo: "photo-1524492412937-b28074d582d1",
    fallback: "photo-1537633552985-df8429e8048b",
    title: "The Royal Affair",
    location: "Udaipur, India",
    duration: "18:22",
    year: "2024",
    featured: false,
  },
  {
    photo: "photo-1499856871958-5b9627545d1a",
    fallback: "photo-1464699908537-0954e50791ee",
    title: "Midnight in Paris",
    location: "Paris, France",
    duration: "09:15",
    year: "2023",
    featured: false,
  },
];

export default function Films() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="films" className="bg-dark py-40 md:py-52 overflow-hidden">
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
              Cinematography
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[0.95]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Cinematic<br /><em>Films</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/30 font-light text-sm max-w-xs leading-relaxed"
          >
            Not highlight reels — full narrative films, graded and scored to last a lifetime.
          </motion.p>
        </div>

        {/* Featured film — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/8] overflow-hidden group cursor-pointer mb-5 md:mb-6"
          onClick={() => setPlaying(0)}
        >
          <img
            src={`https://images.unsplash.com/photo-1606216840-e34c-4ade?auto=format&fit=crop&q=90&w=2400&h=1200`}
            alt={films[0].title}
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1519225421-a9572-3a74?auto=format&fit=crop&q=90&w=2400`;
            }}
          />
          <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors duration-700" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500"
            >
              <Play className="w-7 h-7 text-white ml-1.5" fill="currentColor" />
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div>
              <p className="text-white/50 uppercase tracking-[0.25em] text-[10px] mb-2">{films[0].location} · {films[0].year}</p>
              <h3 className="text-white font-serif text-3xl md:text-5xl">{films[0].title}</h3>
            </div>
            <span className="text-white/30 font-light text-sm hidden md:block">{films[0].duration}</span>
          </div>

          <div className="absolute top-6 left-8">
            <span className="text-gold uppercase tracking-[0.25em] text-[10px] border border-gold/30 px-3 py-1.5">Featured Film</span>
          </div>
        </motion.div>

        {/* Two smaller films */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {films.slice(1).map((film, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video overflow-hidden group cursor-pointer"
              onClick={() => setPlaying(i + 1)}
            >
              <img
                src={`https://images.unsplash.com/${film.photo}?auto=format&fit=crop&q=85&w=1200&h=675`}
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/${film.fallback}?auto=format&fit=crop&q=85&w=1200`;
                }}
              />
              <div className="absolute inset-0 bg-dark/45 group-hover:bg-dark/30 transition-colors duration-700" />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500"
                >
                  <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                </motion.div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-white/50 uppercase tracking-[0.25em] text-[10px] mb-2">{film.location} · {film.year}</p>
                  <h3 className="text-white font-serif text-xl md:text-2xl">{film.title}</h3>
                </div>
                <span className="text-white/30 font-light text-xs hidden md:block">{film.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Video modal placeholder */}
      <AnimatePresence>
        {playing !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/98 flex items-center justify-center p-6 md:p-16"
            onClick={() => setPlaying(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setPlaying(null)}
            >
              <X className="w-7 h-7" />
            </button>
            <div className="w-full max-w-4xl">
              <div className="aspect-video bg-white/5 flex flex-col items-center justify-center border border-white/10">
                <Play className="w-16 h-16 text-gold/40 mb-4" />
                <p className="text-white/30 text-sm uppercase tracking-widest">Film Preview</p>
                <p className="text-white/20 text-xs mt-2">{films[playing]?.title}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
