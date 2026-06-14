import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-8">Begin Your Story</h2>
            <p className="text-dark/70 font-light mb-12">
              We take on a limited number of commissions each year to ensure the highest level of detail and attention for our clients. Please fill out the form to inquire about our availability.
            </p>
            
            <div className="space-y-6 text-sm tracking-widest uppercase">
              <div>
                <div className="text-dark/50 mb-1">Email</div>
                <a href="mailto:inquiries@lumierestudio.com" className="text-dark hover:text-gold transition-colors">inquiries@lumierestudio.com</a>
              </div>
              <div>
                <div className="text-dark/50 mb-1">Phone</div>
                <a href="tel:+1234567890" className="text-dark hover:text-gold transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="pt-6">
                <a href="#" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 hover:bg-[#128C7E] transition-colors rounded-sm">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white p-8 md:p-12 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-dark/60 mb-2">Name</label>
                  <input type="text" className="w-full border-b border-dark/10 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-dark/60 mb-2">Email</label>
                  <input type="email" className="w-full border-b border-dark/10 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-dark/60 mb-2">Phone</label>
                  <input type="tel" className="w-full border-b border-dark/10 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-dark/60 mb-2">Event Date</label>
                  <input type="date" className="w-full border-b border-dark/10 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-dark/60 mb-2">Event Type</label>
                  <select className="w-full border-b border-dark/10 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option value="">Select an option</option>
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding</option>
                    <option value="destination">Destination Wedding</option>
                    <option value="corporate">Corporate</option>
                    <option value="fashion">Fashion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-dark/60 mb-2">Location</label>
                  <input type="text" className="w-full border-b border-dark/10 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-dark/60 mb-2">Message & Details</label>
                <textarea rows={4} className="w-full border-b border-dark/10 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="bg-gold text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-dark transition-colors duration-300 w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
