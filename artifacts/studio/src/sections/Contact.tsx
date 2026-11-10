import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const eventTypes = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre-Wedding Shoot",
  "Destination Wedding",
  "Corporate Event",
  "Fashion Photography",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000 – $35,000",
  "$35,000+",
  "Prefer not to say",
];

const inputClass =
  "w-full border-b border-white/15 py-4 bg-transparent focus:outline-none focus:border-gold transition-colors duration-300 text-white placeholder:text-white/25 font-light text-sm";
const labelClass =
  "block text-[9px] uppercase tracking-[0.3em] text-gold/80 mb-2 font-medium";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-dark py-40 md:py-52">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.35em] text-[10px] mb-5 font-light"
          >
            Work With Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Begin Your<br /><em>Story</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-12"
          >
            <p className="text-white/60 font-light text-[15px] leading-[2]">
              We accept a limited number of commissions each year to ensure every client receives our complete attention. Please share your story — we would love to hear about your plans.
            </p>

            <div className="space-y-8">
              <div>
                <div className={labelClass}>Email</div>
                <a
                  href="mailto:inquiries@lumierestudio.com"
                  className="flex items-center gap-3 text-white text-sm hover:text-gold transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 text-gold/60" strokeWidth={1.5} />
                  inquiries@lumierestudio.com
                </a>
              </div>
              <div>
                <div className={labelClass}>Phone</div>
                <a
                  href="tel:+12345678900"
                  className="flex items-center gap-3 text-white text-sm hover:text-gold transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-gold/60" strokeWidth={1.5} />
                  +1 (234) 567-8900
                </a>
              </div>
              <div>
                <div className={labelClass}>Studios</div>
                <div className="flex items-start gap-3 text-white/60 text-sm font-light">
                  <MapPin className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  Paris · Dubai · Mumbai · New York
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/12345678900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold px-7 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-gold hover:text-dark transition-all duration-300 backdrop-blur-sm bg-gold/5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Small portrait image */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] overflow-hidden mt-4 img-hover-zoom border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600"
                  alt="Studio"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 bg-[#0E0E0E] p-10 md:p-16 border border-white/5"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-12 h-px bg-gold mx-auto mb-8" />
                <h3 className="font-serif text-white text-3xl mb-4">Thank you</h3>
                <p className="text-white/50 font-light text-sm max-w-sm leading-relaxed">
                  Your inquiry has been received. We will be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <input type="text" placeholder="Your full name" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" placeholder="your@email.com" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" placeholder="+1 (000) 000-0000" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Event Date</label>
                    <input type="date" className={`${inputClass} [color-scheme:dark]`} />
                  </div>
                  <div>
                    <label className={labelClass}>Event Type *</label>
                    <select className={`${inputClass} cursor-pointer [&>option]:bg-[#141414] [&>option]:text-white`} required defaultValue="">
                      <option value="" disabled className="text-white/40">Select service</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Location</label>
                    <input type="text" placeholder="City, Country" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Budget Range</label>
                    <select className={`${inputClass} cursor-pointer [&>option]:bg-[#141414] [&>option]:text-white`} defaultValue="">
                      <option value="" disabled className="text-white/40">Select range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Your Story</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your vision, your venue, and what you are looking for…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-gold text-dark font-medium px-14 py-5 uppercase tracking-[0.2em] text-[11px] hover:bg-gold-light hover:text-dark transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
