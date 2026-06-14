import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const feed = [
  "1491814", "1519225421", "1606216840", "1537633552",
  "1511285560", "1464699908", "1500558", "1583939"
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center mb-12">
        <h2 className="text-4xl font-serif text-dark mb-4">Follow Our Journey</h2>
        <a href="#" className="text-gold hover:text-dark transition-colors tracking-widest uppercase text-sm">@lumierestudio</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {feed.map((id, i) => (
          <motion.a
            href="#"
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="aspect-square relative group block overflow-hidden"
          >
            <img 
              src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=60&w=400`}
              alt="Instagram feed"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="#" className="inline-flex items-center gap-2 border border-gold text-gold px-8 py-3 uppercase tracking-widest text-xs hover:bg-gold hover:text-white transition-colors duration-300">
          <Instagram className="w-4 h-4" />
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
