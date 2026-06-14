import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "They didn't just take photographs — they directed a masterpiece. Looking at our album feels like flipping through the pages of Vogue Italia. Breathtaking, and worth every penny.",
    name: "Isabella & Thomas Remy",
    location: "Lake Como, Italy",
    event: "Villa Wedding · Summer 2024",
  },
  {
    quote:
      "Flying the team to Bali was the best decision we made. Their calm presence, their eye for light, and their ability to find the extraordinary in unscripted moments — simply unmatched.",
    name: "Sarah & David Chen",
    location: "Uluwatu, Bali",
    event: "Clifftop Ceremony · Spring 2024",
  },
  {
    quote:
      "A luxury experience from the first email to final delivery. The film they produced for our anniversary gala reduced the entire room to silence. Pure art.",
    name: "The Vanguard Group",
    location: "London, United Kingdom",
    event: "Corporate Gala · Winter 2023",
  },
  {
    quote:
      "We wanted images that felt like cinema. What we received surpassed even that. Our pre-wedding shoot in Paris belongs in a gallery, not just an album.",
    name: "Priya & Nikhil Sharma",
    location: "Paris, France",
    event: "Pre-Wedding · Autumn 2024",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-40 md:py-56 bg-dark relative overflow-hidden">

      {/* Decorative large quote mark */}
      <div
        className="absolute top-0 right-0 text-white/[0.025] font-serif leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(12rem, 30vw, 28rem)" }}
        aria-hidden
      >
        "
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold uppercase tracking-[0.35em] text-[10px] mb-20 font-light"
        >
          Client Voices
        </motion.p>

        {/* Testimonial */}
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote
                className="font-serif text-white leading-[1.4] mb-12 italic font-light"
                style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)" }}
              >
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>

              <div>
                <p className="text-white font-light text-sm tracking-wider mb-1">
                  {testimonials[current].name}
                </p>
                <p className="text-white/30 uppercase tracking-[0.25em] text-[10px]">
                  {testimonials[current].location} &nbsp;·&nbsp; {testimonials[current].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 mt-20">
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-400 ${
                  i === current
                    ? "w-8 h-px bg-gold"
                    : "w-4 h-px bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-white/20 text-[10px] uppercase tracking-widest">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}
