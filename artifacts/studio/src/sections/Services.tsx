import { motion } from "framer-motion";
import { Camera, Film, Heart, Globe, Building, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    name: "Wedding Photography",
    desc: "Timeless, editorial captures of your most extraordinary day. We document moments that unfold naturally, with a quiet, unobtrusive presence.",
    img: "photo-1519741497674-611481863552",
    fallback: "photo-1583939003579-730e3918a45a",
  },
  {
    icon: Film,
    name: "Wedding Cinematography",
    desc: "Cinematic films that play like a feature — scored, graded, and paced with an auteur's precision. Not a highlight reel, but a true narrative.",
    img: "photo-1537633552985-df8429e8048b",
    fallback: "photo-1511285560929-80b456fea0bc",
  },
  {
    icon: Heart,
    name: "Pre-Wedding Shoot",
    desc: "Intimate, styled sessions in breathtaking locations. Where you learn to be in front of the lens — and fall in love with the process.",
    img: "photo-1464699908537-0954e50791ee",
    fallback: "photo-1522673607200-164d1b6ce486",
  },
  {
    icon: Globe,
    name: "Destination Wedding",
    desc: "Full-scale coverage for celebrations across continents. We travel wherever your love story takes us, with no compromise on artistry.",
    img: "photo-1520242739010-44e95bde329e",
    fallback: "photo-1537996194471-e657df975ab4",
  },
  {
    icon: Building,
    name: "Corporate Events",
    desc: "Premium visual documentation for brand activations, galas, conferences, and executive portraits. The boardroom, reimagined.",
    img: "photo-1519741497674-611481863552",
    fallback: "photo-1537633552985-df8429e8048b",
  },
  {
    icon: Sparkles,
    name: "Fashion Photography",
    desc: "Editorial and commercial shoots with a luxury fashion sensibility. We work with brands, designers, and talent who expect the extraordinary.",
    img: "photo-1469371670807-013ccf25f16a",
    fallback: "photo-1583939003579-730e3918a45a",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 md:py-52 bg-dark">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.35em] text-[10px] mb-5 font-light"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Our<br /><em>Services</em>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0E0E0E] group relative overflow-hidden p-10 lg:p-14 hover:bg-[#141414] border border-white/5 hover:border-gold/30 transition-all duration-700 cursor-pointer"
            >
              <div className="relative z-10">
                <service.icon
                  className="w-7 h-7 text-gold mb-10 transition-colors duration-700"
                  strokeWidth={1.25}
                />
                <span className="absolute top-0 right-0 font-serif text-[5rem] leading-none text-white/5 group-hover:text-gold/20 select-none transition-colors duration-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-white text-2xl md:text-[1.6rem] mb-5 leading-tight transition-colors duration-700">
                  {service.name}
                </h3>
                <div className="w-8 h-px bg-gold mb-6 group-hover:w-14 transition-all duration-500" />
                <p className="text-white/60 group-hover:text-white/80 font-light text-sm leading-[1.9] transition-colors duration-700">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
