import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "500+", label: "Events Covered" },
  { value: "8+", label: "Years of Excellence" },
  { value: "12", label: "Countries" },
  { value: "50+", label: "Destination Weddings" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="bg-dark overflow-hidden">

      {/* Top full-bleed image strip */}
      <div ref={ref} className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=90&w=2400&h=1600"
            alt="Behind the scenes at Lumière Studio"
            className="w-full h-[110%] object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=90&w=2400";
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.05) 60%, rgba(10,10,10,0.35) 100%)",
            }}
          />
        </motion.div>

        {/* Overlay label */}
        <div className="absolute bottom-10 left-8 md:left-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/50 uppercase tracking-[0.35em] text-[10px] font-light mb-3"
          >
            Behind the lens
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            The Studio
          </motion.h2>
        </div>
      </div>

      {/* Content row */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left — text */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.35em] text-[10px] mb-8 font-light"
            >
              Est. 2016
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-7 text-white/70 font-light text-[15px] leading-[2]"
            >
              <p>
                Lumière Studio is a world-class photography and cinematography collective, built on the belief that every love story deserves to be told with cinematic grandeur and editorial precision.
              </p>
              <p>
                We blend the quiet intimacy of documentary photography with the visual language of luxury fashion — creating images that are simultaneously beautiful and deeply felt.
              </p>
              <p>
                Whether it's an intimate elopement on the Amalfi Coast or a grand palace celebration in Udaipur, we craft visual legacies for clients who value artistry above all else. Our studio takes on a carefully curated number of commissions each year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-400"
              >
                Inquire About Availability
              </a>
            </motion.div>
          </div>

          {/* Right — stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#0E0E0E] p-10 md:p-14 group border border-white/5"
                >
                  <div
                    className="font-serif text-white mb-3 leading-none"
                    style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="w-6 h-px bg-gold mb-4 group-hover:w-10 transition-all duration-500" />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
