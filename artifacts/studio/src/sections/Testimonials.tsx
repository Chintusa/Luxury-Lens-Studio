import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "They didn't just take photos; they directed a masterpiece. Looking at our wedding album feels like flipping through the pages of Vogue. Absolutely breathtaking.",
    name: "Isabella & Thomas",
    location: "Lake Como, Italy"
  },
  {
    quote: "Flying the team out to Bali was the best decision we made. Their calm presence amidst the chaos and their eye for cinematic moments is unmatched in the industry.",
    name: "Sarah & David",
    location: "Uluwatu, Bali"
  },
  {
    quote: "A luxury experience from the first consultation to the final delivery. The film they created for our anniversary gala moved everyone to tears.",
    name: "The Vanguard Group",
    location: "London, UK"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-16">What Couples Say</h2>
        
        <div className="max-w-4xl mx-auto h-64 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="text-gold text-6xl font-serif leading-none mb-6">"</div>
              <p className="text-white md:text-2xl lg:text-3xl font-serif italic font-light mb-8 leading-relaxed">
                {testimonials[current].quote}
              </p>
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <div className="uppercase tracking-widest text-sm text-white/60">
                <span className="text-white font-medium">{testimonials[current].name}</span> — {testimonials[current].location}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-8" : "bg-white/20"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
