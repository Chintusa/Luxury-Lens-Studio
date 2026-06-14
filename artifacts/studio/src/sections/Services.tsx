import { motion } from "framer-motion";
import { Camera, Film, Heart, Globe, Building, Sparkles } from "lucide-react";

const services = [
  { icon: Camera, name: "Wedding Photography", desc: "Timeless, editorial captures of your most important day." },
  { icon: Film, name: "Wedding Cinematography", desc: "Cinematic storytelling that brings your memories to life." },
  { icon: Heart, name: "Pre-Wedding Shoot", desc: "Intimate and styled sessions in breathtaking locations." },
  { icon: Globe, name: "Destination Wedding", desc: "Full-scale coverage for celebrations across the globe." },
  { icon: Building, name: "Corporate Events", desc: "Premium documentation for high-end corporate affairs." },
  { icon: Sparkles, name: "Fashion Photography", desc: "Editorial and commercial shoots with a luxury touch." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-10 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <service.icon className="w-10 h-10 text-gold mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl text-dark mb-4">{service.name}</h3>
              <p className="text-dark/70 font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
