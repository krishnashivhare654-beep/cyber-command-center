"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ShieldCheck, Target, Award, Terminal } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(".about-item", 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto bg-black text-white">
      <header className="mb-12 about-item">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-emerald-500 flex items-center gap-4">
          <Terminal size={40} /> IDENTITY_VAULT.exe
        </h1>
      </header>

      <div className="grid gap-8">
        <section className="about-item p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
          <h2 className="text-2xl flex items-center gap-2 font-bold text-emerald-400 mb-4">
            <Target /> Professional Bio
          </h2>
          <p className="text-gray-300 leading-relaxed font-mono">
            Main **Krishna Shivhare**, VIT Bhopal ka B.Tech student hoon. Mera core focus Cybersecurity, Threat Intel aur Full-Stack Development par hai.
          </p>
        </section>

        <section className="about-item grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-emerald-500/10 bg-zinc-900/50 rounded-xl">
            <h3 className="flex items-center gap-2 font-bold mb-2 text-emerald-400">
              <ShieldCheck size={20} /> Ethics
            </h3>
            <p className="text-sm text-gray-500 italic">"Loyalty and care for everyone."</p>
          </div>
          <div className="p-6 border border-emerald-500/10 bg-zinc-900/50 rounded-xl">
            <h3 className="flex items-center gap-2 font-bold mb-2 text-emerald-400">
              <Award size={20} /> Status
            </h3>
            <p className="text-sm text-gray-500">Currently building Sentinel Prime & ShadowTrace.</p>
          </div>
        </section>
      </div>
    </div>
  );
}