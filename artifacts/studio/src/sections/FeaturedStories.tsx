import { motion } from "framer-motion";

const stories = [
  { id: 1491814, name: "Elena & James", location: "Lake Como, Italy", type: "Wedding" },
  { id: 1519225421, name: "Sophia & Michael", location: "Paris, France", type: "Pre-Wedding" },
  { id: 1606216840, name: "Isabella & Lucas", location: "Santorini, Bali", type: "Ceremony" },
  { id: 1537633552, name: "The Vanguard", location: "New York, USA", type: "Corporate" },
  { id: 1511285560, name: "Aria & Oliver", location: "Amalfi Coast, Greece", type: "Engagement" },
  { id: 1464699908, name: "Met Gala 2024", location: "London, UK", type: "Luxury Event" },
];

export default function FeaturedStories() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Featured Stories</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${i === 0 || i === 3 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/5]"}`}
            >
              <img 
                src={`https://images.unsplash.com/photo-${story.id}?auto=format&fit=crop&q=80&w=1200`} 
                alt={story.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-gold tracking-widest uppercase text-sm border-b border-gold pb-1">View Story</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 uppercase tracking-wider text-xs mb-2">{story.type} — {story.location}</p>
                <h3 className="text-white font-serif text-2xl md:text-3xl">{story.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
