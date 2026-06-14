import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Events" },
  { value: "8+", label: "Years Experience" },
  { value: "12", label: "Countries Covered" },
  { value: "50+", label: "Destination Weddings" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 aspect-[4/5] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a92233f208?auto=format&fit=crop&q=80&w=1000" 
              alt="Studio behind the scenes"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cream -z-10 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-gold -z-10 hidden md:block"></div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-8">The Studio</h2>
            <div className="space-y-6 text-dark/70 font-light text-lg mb-12">
              <p>
                Lumière Studio is a world-class photography and cinematography collective dedicated to documenting the most extraordinary celebrations across the globe.
              </p>
              <p>
                Founded on the belief that every love story deserves to be told with cinematic grandeur, we blend editorial fashion aesthetics with raw, unscripted emotion. Our approach is unhurried, tactile, and profoundly intentional.
              </p>
              <p>
                Whether it's an intimate ceremony on the Amalfi Coast or a grand celebration in a Rajasthani palace, we craft visual legacies for discerning clients who value artistry above all else.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-2 border-gold pl-6"
                >
                  <div className="text-4xl font-serif text-dark mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest text-dark/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
