import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Work", "Services", "Films", "Portfolio", "Destinations", "About", "Contact"];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-dark/90 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif text-white tracking-widest">
          LUMIÈRE STUDIO
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-dark px-6 py-2 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors"
          >
            Book Now
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
