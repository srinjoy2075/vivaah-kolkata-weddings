import SectionHeading from "@/components/SectionHeading";
import decorImg from "@/assets/wedding-decor.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import { Heart, Award, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Heart, value: "1000+", label: "Events Managed" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Expert Team" },
  { icon: Calendar, value: "100%", label: "Client Satisfaction" },
];

const About = () => (
  <div className="pt-20">
    <section className="relative py-24 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <p className="text-deep-rose font-medium tracking-[0.2em] uppercase text-xs mb-4">Our Story</p>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-5 tracking-tight">About Utsaav</h1>
        <div className="section-divider mb-5" />
        <p className="text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed">Kolkata's premier luxury event management service, specializing in weddings, birthdays, pujas, engagements, and all celebrations.</p>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <img src={decorImg} alt="Event decoration" className="rounded-3xl shadow-romantic" />
        <div>
          <h2 className="font-heading text-3xl font-semibold mb-5 tracking-tight">Crafting Celebrations into Memories</h2>
          <div className="section-divider mb-6 mx-0" />
          <p className="text-muted-foreground mb-5 leading-[1.8] text-[15px]">
            Utsaav was born from a passion for creating extraordinary celebrations. Whether it's a grand wedding, a joyful birthday, a sacred puja, or an intimate anniversary — we bring your vision to life with elegance and precision.
          </p>
          <p className="text-muted-foreground mb-5 leading-[1.8] text-[15px]">
            Our team of experienced event planners, decorators, and coordinators work tirelessly to ensure that every event we manage is unique, personal, and absolutely breathtaking. From intimate gatherings to grand celebrations at five-star venues — we handle it all.
          </p>
          <p className="text-muted-foreground leading-[1.8] text-[15px]">
            We cover the full spectrum of events — weddings, engagements, birthdays, baby showers, family reunions, pujas, and corporate events — ensuring every cultural and personal detail is honored with grace.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 romantic-gradient">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center shadow-soft">
              <s.icon className="w-7 h-7 text-deep-rose" />
            </div>
            <p className="font-heading text-3xl font-semibold text-primary-foreground mb-1">{s.value}</p>
            <p className="text-primary-foreground/75 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Popular Kolkata Venues" className="text-left [&_.section-divider]:mx-0" />
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We have extensive experience managing events at Kolkata's most prestigious venues. Our relationships with top venues ensure you get the best experience and rates.
          </p>
          <ul className="space-y-3">
            {["The Oberoi Grand", "Taj Bengal", "ITC Royal Bengal", "JW Marriott Kolkata", "The Lalit Great Eastern", "Rajbari Bawali", "Belgadia Palace"].map((v) => (
              <li key={v} className="flex items-center gap-2 text-foreground">
                <Heart className="w-3.5 h-3.5 text-deep-rose fill-deep-rose" /> {v}
              </li>
            ))}
          </ul>
        </div>
        <img src={p4} alt="Premium event venue in Kolkata" className="rounded-2xl shadow-romantic" />
      </div>
    </section>
  </div>
);

export default About;
