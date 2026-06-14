import { Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const explore = [
  { label: "Portfolio", href: "#work" },
  { label: "Cinematography", href: "#films" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "The Studio", href: "#about" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-28 pb-12">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-20 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-white text-4xl md:text-5xl mb-6 leading-tight"
            >
              Lumière<br /><em className="text-gold">Studio</em>
            </motion.h2>
            <p className="text-white/30 font-light text-sm leading-[2] max-w-xs mb-10">
              Luxury photography & cinematography for discerning clients — available worldwide.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-white/12 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.35em] text-gold mb-8 font-light">Explore</h3>
            <ul className="space-y-4">
              {explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/35 hover:text-white text-sm font-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.35em] text-gold mb-8 font-light">Contact</h3>
            <ul className="space-y-4 text-white/35 text-sm font-light">
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">
                  Begin an Inquiry
                </a>
              </li>
              <li>
                <a href="mailto:hello@lumierestudio.com" className="hover:text-white transition-colors duration-300">
                  hello@lumierestudio.com
                </a>
              </li>
              <li>
                <a href="tel:+12345678900" className="hover:text-white transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="pt-2 text-white/20 text-[11px] tracking-wider">
                Paris · Dubai · Mumbai · New York
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em]">
            © 2025 Lumière Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/20 text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white/40 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors duration-300">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
