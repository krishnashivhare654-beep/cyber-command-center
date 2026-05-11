"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ShieldCheck, Target, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline();
      tl.from(".about-content", { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto bg-black text-white">
      <h1 className="text-4xl font-mono font-bold text-emerald-500 mb-8 tracking-tighter">
        IDENTITY_VAULT.exe
      </h1>
      
      <div className="grid gap-12">
        <section className="about-content space-y-4">
          <h2 className="text-2xl flex items-center gap-2 font-bold">
            <Target className="text-emerald-500" /> Professional Bio
          </h2>
          <p className="text-gray-400 leading-relaxed font-mono">
            Hi, I'm Krishna Shivhare. Pursuing B.Tech at VIT Bhopal. 
            Cybersecurity researcher and Full-Stack Developer.
          </p>
        </section>

        <section className="about-content grid md:grid-cols-2 gap-6 pb-20">
          <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
            <h3 className="flex items-center gap-2 font-bold mb-2">
              <ShieldCheck className="text-emerald-500" /> Ethics
            </h3>
            <p className="text-sm text-gray-500 italic">"Loyalty and care for everyone."</p>
          </div>
          <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
            <h3 className="flex items-center gap-2 font-bold mb-2">
              <Award className="text-emerald-500" /> Goal
            </h3>
            <p className="text-sm text-gray-500 italic">Defending the digital frontier.</p>
          </div>
        </section>
      </div>
    </div>
  );
}