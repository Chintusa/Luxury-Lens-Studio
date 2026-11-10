import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-[100dvh] flex items-end overflow-hidden bg-dark">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=90&w=2400"
          alt="Luxury wedding photography"
          className="w-full h-[115%] object-cover object-center"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=90&w=2400";
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.72) 100%)",
          }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          mixBlendMode: "overlay",
        }}
      />

      {/* Side text */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden xl:block"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <p
          className="text-white/30 text-[10px] uppercase tracking-[0.4em]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Scroll to explore
        </p>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-24 md:pb-32"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold uppercase tracking-[0.35em] text-[10px] md:text-xs mb-8 font-light"
        >
          Award-Winning Photography & Cinematography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-serif leading-[0.9] mb-10 max-w-5xl"
          style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
        >
          Capturing Stories<br />
          <em className="font-normal">Beyond Borders</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 sm:items-center"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center bg-gold text-dark font-medium px-10 py-4 uppercase tracking-[0.2em] text-[11px] hover:bg-gold-light transition-all duration-400 w-fit"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-4 uppercase tracking-[0.2em] text-[11px] hover:border-gold hover:text-gold transition-colors duration-500 w-fit"
          >
            Book Consultation
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
