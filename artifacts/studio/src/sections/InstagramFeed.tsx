import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const feed = [
  { id: "photo-1519225421-a9572-3a74", fallback: "photo-1583939411023" },
  { id: "photo-1464699908537-0954e50791ee", fallback: "photo-1529636443475" },
  { id: "photo-1606216840-e34c-4ade", fallback: "photo-1519225421-a9572-3a74" },
  { id: "photo-1537633552985-df8429e8048b", fallback: "photo-1511285560929-80b456fea0bc" },
  { id: "photo-1524492412937-b28074d582d1", fallback: "photo-1537996194471-e657df975ab4" },
  { id: "photo-1512453979798-5ea266f8880c", fallback: "photo-1519225421-a9572-3a74" },
  { id: "photo-1499856871958-5b9627545d1a", fallback: "photo-1520242739010-44e95bde329e" },
  { id: "photo-1491809842219-3b69f4a1d4cb", fallback: "photo-1500313830540-7b6650e1c013" },
];

export default function InstagramFeed() {
  return (
    <section className="py-40 md:py-52 bg-cream">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.35em] text-[10px] mb-5 font-light"
            >
              Follow Along
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-dark leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Our Journey
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-3"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark/50 text-sm font-light hover:text-gold transition-colors duration-300 tracking-wider"
            >
              @lumierestudio
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-dark/20 hover:border-gold text-dark/60 hover:text-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-400"
            >
              <Instagram className="w-3.5 h-3.5" />
              Follow on Instagram
            </a>
          </motion.div>
        </div>
      </div>

      {/* Grid — edge to edge */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-1.5 px-8 md:px-16 max-w-[1440px] mx-auto">
        {feed.map((item, i) => (
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-square relative group block overflow-hidden"
          >
            <img
              src={`https://images.unsplash.com/${item.id}?auto=format&fit=crop&q=75&w=600&h=600`}
              alt={`Instagram ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/${item.fallback}?auto=format&fit=crop&q=75&w=600&h=600`;
              }}
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors duration-500 flex items-center justify-center">
              <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
