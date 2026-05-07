"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ShieldCheck, Target, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    gsap.from(".about-content", { opacity: 0, x: -50, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-mono font-bold text-emerald-500 mb-8 tracking-tighter">
        IDENTITY_VAULT.exe
      </h1>
      <div className="grid gap-12">
        <section className="about-content space-y-4">
          <h2 className="text-2xl flex items-center gap-2 font-bold"><Target className="text-emerald-500" /> Professional Bio</h2>
          <p className="text-muted-foreground leading-relaxed">
            Main Krishna Shivare, VIT Bhopal ka B.Tech student hoon. Mera focus Cybersecurity aur Full-Stack Development par hai. 
            Mera vision "NERA" jaise smart hardware aur "ShadowTrace" jaise defensive tools banana hai jo digital assets ko secure karein.
          </p>
        </section>

        <section className="about-content grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
            <h3 className="flex items-center gap-2 font-bold mb-2"><ShieldCheck className="text-emerald-500" /> Ethics</h3>
            <p className="text-sm text-muted-foreground italic">"Loyalty and care for everyone—protecting the future of digital and real-world safety."</p>
          </div>
          <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
            <h3 className="flex items-center gap-2 font-bold mb-2"><Award className="text-emerald-500" /> Focus</h3>
            <p className="text-sm text-muted-foreground italic">Threat Intelligence, Malware Analysis, and High-Performance IoT Middleware.</p>
          </div>
        </section>
      </div>
    </div>
  );
}