import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventDate: "", service: "", guestCount: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", eventDate: "", service: "", guestCount: "", budget: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <div className="pt-20">
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-deep-rose font-medium tracking-[0.2em] uppercase text-xs mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-5 tracking-tight">Book a Consultation</h1>
          <div className="section-divider mb-5" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed">Ready to start planning your dream event? Fill out the form below.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-8 tracking-tight">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "Park Street, Kolkata 700016, West Bengal" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "hello@utsaav.com" },
                { icon: Clock, label: "Hours", value: "Mon-Sat: 10 AM - 7 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-deep-rose" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{c.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://chat.whatsapp.com/E0IEJulwpgP6K5nvnGSBTj?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] text-background font-semibold text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>

            <div className="mt-8 rounded-3xl overflow-hidden shadow-romantic">
              <iframe
                title="Utsaav Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.35!3d22.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzAwLjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-romantic rounded-3xl p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Full Name *</label>
                  <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Phone *</label>
                  <input required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Event Date</label>
                  <input type="date" value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Service</label>
                  <select value={form.service} onChange={(e) => update("service", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all">
                    <option value="">Select a service</option>
                    <option>Venue Booking</option>
                    <option>Event Management</option>
                    <option>Pujas</option>
                    <option>Clothing</option>
                    <option>Pre Wedding Shoots</option>
                    <option>Catering and Food</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Guest Count</label>
                  <input type="number" value={form.guestCount} onChange={(e) => update("guestCount", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all" placeholder="Approx. guests" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block text-foreground">Estimated Budget</label>
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all">
                  <option value="">Select budget range</option>
                  <option>₹50,000 - ₹2 Lakhs</option>
                  <option>₹2-5 Lakhs</option>
                  <option>₹5-10 Lakhs</option>
                  <option>₹10-25 Lakhs</option>
                  <option>₹25-50 Lakhs</option>
                  <option>₹50 Lakhs+</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block text-foreground">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-deep-rose/30 focus:border-deep-rose transition-all resize-none" placeholder="Tell us about your dream event..." />
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 rounded-full bg-deep-rose text-card font-semibold flex items-center justify-center gap-2 hover:bg-deep-rose/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-60">
                <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Consultation Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
