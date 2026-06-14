import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-dark">
      {/* Background with animated gradient simulating cinematic feel */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] via-[#0a0a0a] to-[#000000]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6"
        >
          Award-Winning Photography & Cinematography
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          Capturing Stories<br />
          <span className="italic">Beyond Borders</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/70 font-light text-lg md:text-xl max-w-2xl mb-12"
        >
          Luxury Photography & Cinematography for Discerning Clients Worldwide
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#portfolio" className="bg-gold text-dark px-10 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
            View Portfolio
          </a>
          <a href="#contact" className="border border-gold text-gold px-10 py-4 uppercase tracking-widest text-sm hover:bg-gold hover:text-dark transition-colors duration-300">
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
