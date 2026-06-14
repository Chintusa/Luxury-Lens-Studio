import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-6">LUMIÈRE STUDIO</h2>
            <p className="text-white/50 font-light max-w-sm mb-8">
              Documenting life's most beautiful moments with a cinematic and editorial eye. Available worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm text-gold mb-6">Explore</h3>
            <ul className="space-y-3 text-white/70 font-light">
              <li><a href="#work" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#films" className="hover:text-gold transition-colors">Cinematography</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">The Studio</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm text-gold mb-6">Contact</h3>
            <ul className="space-y-3 text-white/70 font-light">
              <li><a href="#contact" className="hover:text-gold transition-colors">Inquire</a></li>
              <li><a href="mailto:hello@lumierestudio.com" className="hover:text-gold transition-colors">hello@lumierestudio.com</a></li>
              <li className="pt-4">Paris • Dubai • Como • New York</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© 2025 Lumière Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
