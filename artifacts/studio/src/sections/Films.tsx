import { motion } from "framer-motion";
import { Play } from "lucide-react";

const films = [
  { id: "1537633552", title: "A Tuscan Dream", location: "Florence, Italy" },
  { id: "1606800", title: "The Royal Affair", location: "Udaipur, India" },
  { id: "1464699908", title: "Midnight in Paris", location: "Paris, France" },
];

export default function Films() {
  return (
    <section id="films" className="py-24 bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Cinematic Films</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {films.map((film, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative cursor-pointer aspect-video overflow-hidden"
            >
              <img 
                src={`https://images.unsplash.com/photo-${film.id}?auto=format&fit=crop&q=80&w=800`} 
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-serif text-2xl">{film.title}</h3>
                <p className="text-white/70 uppercase tracking-widest text-xs mt-2">{film.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
