import { motion } from "framer-motion";

const destinations = [
  { name: "Italy", img: "1520242761-1279a32c2533" }, // Lake Comoish
  { name: "France", img: "1499856871958-5b9627545d1a" }, // Paris
  { name: "Bali", img: "1537996194471-e657df975ab4" },
  { name: "India", img: "1524492412937-b28074d582d1" }, // Udaipur/Palace
  { name: "Dubai", img: "1512453979798-5ea266f8880c" },
  { name: "Thailand", img: "1552465011-b4e21cd65ab1" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Destination Weddings</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 md:px-12 gap-6">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex-shrink-0 w-80 md:w-[400px] aspect-[3/4] relative snap-center group overflow-hidden cursor-pointer"
          >
            <img 
              src={`https://images.unsplash.com/photo-${dest.img}?auto=format&fit=crop&q=80&w=600`}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-serif text-4xl mb-2">{dest.name}</h3>
              <div className="w-8 h-[2px] bg-gold group-hover:w-16 transition-all duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
