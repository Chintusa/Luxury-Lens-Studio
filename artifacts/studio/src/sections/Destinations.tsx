import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "India",
    subtitle: "Rajasthan Palaces",
    photo: "photo-1548013146-72479768bada",
    fallback: "photo-1587474260584-136574528ed5",
  },
  {
    name: "Dubai",
    subtitle: "Desert Luxury",
    photo: "photo-1512453979798-5ea266f8880c",
    fallback: "photo-1519741497674-611481863552",
  },
  {
    name: "Bali",
    subtitle: "Temple & Jungle",
    photo: "photo-1537996194471-e657df975ab4",
    fallback: "photo-1506665531195-3566af2b4dfa",
  },
  {
    name: "Thailand",
    subtitle: "Golden Shores",
    photo: "photo-1506665531195-3566af2b4dfa",
    fallback: "photo-1537996194471-e657df975ab4",
  },
  {
    name: "Singapore",
    subtitle: "Urban Elegance",
    photo: "photo-1525625293386-3f8f99389edd",
    fallback: "photo-1512453979798-5ea266f8880c",
  },
  {
    name: "Italy",
    subtitle: "Lakes & Amalfi",
    photo: "photo-1520242739010-44e95bde329e",
    fallback: "photo-1499856871958-5b9627545d1a",
  },
  {
    name: "France",
    subtitle: "Paris & Provence",
    photo: "photo-1499856871958-5b9627545d1a",
    fallback: "photo-1520242739010-44e95bde329e",
  },
];

export default function Destinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 480;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="destinations" className="py-40 md:py-52 bg-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.35em] text-[10px] mb-5 font-light"
            >
              We Travel
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[0.95]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Destination<br /><em>Weddings</em>
            </motion.h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-5 px-8 md:px-16"
        style={{ paddingRight: "calc(50vw - 680px + 4rem)", scrollPaddingLeft: "2rem" }}
      >
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 w-[340px] md:w-[420px] h-[500px] md:h-[600px] relative snap-start group overflow-hidden cursor-pointer"
          >
            <img
              src={`https://images.unsplash.com/${dest.photo}?auto=format&fit=crop&q=85&w=700&h=900`}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.06]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/${dest.fallback}?auto=format&fit=crop&q=85&w=700&h=900`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-700" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] mb-3 font-light">{dest.subtitle}</p>
              <h3 className="text-white font-serif leading-none mb-5"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                {dest.name}
              </h3>
              <div className="w-6 h-px bg-gold group-hover:w-14 transition-all duration-700" />
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-white/70 text-[10px] uppercase tracking-[0.25em] border border-white/25 px-3 py-1.5">
                View Stories
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
