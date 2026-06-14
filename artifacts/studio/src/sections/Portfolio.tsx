import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  "1500558", "1583939", "1469460", "1529634", 
  "1583195", "1606800", "1467803", "1511285560", 
  "1519225421", "1491814", "1606216840", "1537633552"
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((id, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid cursor-pointer group relative"
              onClick={() => setSelectedImage(id)}
            >
              <img 
                src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`} 
                alt="Portfolio"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white tracking-widest uppercase text-sm border-b border-white pb-1 transition-opacity duration-300">
                  View Large
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-gold transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={`https://images.unsplash.com/photo-${selectedImage}?auto=format&fit=crop&q=100&w=1600`}
              className="max-w-full max-h-full object-contain"
              alt="Expanded portfolio"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
