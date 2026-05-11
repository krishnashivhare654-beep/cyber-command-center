"use client";

import React, { useEffect } from "react";
// Import ko simple rakha hai taaki module resolution error na aaye
import { gsap } from "gsap";
import { ShieldCheck, Target, Award, Terminal } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    // Ye check zaroori hai kyunki GSAP ko 'window' chahiye hota hai
    if (typeof window !== "undefined") {
      // TypeScript error se bachne ke liye 'any' ka use
      const tl: any = gsap.timeline();
      
      tl.from(".about-header", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out"
      })
      .from(".about-content", { 
        opacity: 0, 
        x: -50, 
        duration: 0.8, 
        stagger: 0.3,
        ease: "power2.out"
      }, "-=0.5");
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto bg-black text-white selection:bg-emerald-500/30">
      {/* Header Section */}
      <header className="about-header mb-12">
        <h1 className="text-4xl md:text-6xl font-mono font-bold text-emerald-500 tracking-tighter flex items-center gap-4">
          <Terminal className="w-8 h-8 md:w-12 md:h-12" />
          IDENTITY_VAULT.exe
        </h1>
        <div className="h-1 w-20 bg-emerald-500 mt-2"></div>
      </header>

      <div className="grid gap-12">
        {/* Bio Section */}
        <section className="about-content space-y-4">
          <h2 className="text-2xl flex items-center gap-2 font-bold border-l-4 border-emerald-500 pl-4">
            <Target className="text-emerald-500" /> Professional Bio
          </h2>
          <p className="text-gray-400 leading-relaxed font-mono text-sm md:text-base">
            Main **Krishna Shivhare**, VIT Bhopal ka B.Tech student hoon. Mera core focus Cybersecurity, 
            Threat Intelligence aur Full-Stack Development par hai. Maine "ShadowTrace" aur "Sentinel Prime" 
            jaise projects build kiye hain taaki digital environment ko secure banaya ja sake.
          </p>
        </section>

        {/* Stats/Cards Section */}
        <section className="about-content grid md:grid-cols-2 gap-6 pb-20">
          <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl hover:border-emerald-500/50 transition-all duration-300">
            <h3 className="flex items-center gap-2 font-bold mb-3 text-emerald-400">
              <ShieldCheck className="w-5 h-5" /> Ethics & Values
            </h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">
              "I value loyalty and care for everyone. My mission is to use technology 
              to protect and serve the community."
            </p>
          </div>

          <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl hover:border-emerald-500/50 transition-all duration-300">
            <h3 className="flex items-center gap-2 font-bold mb-3 text-emerald-400">
              <Award className="w-5 h-5" /> Current Focus
            </h3>
            <ul className="text-sm text-gray-500 space-y-1 font-mono">
              <li>{">"} Malware Analysis</li>
              <li>{">"} Next.js 15 Frameworks</li>
              <li>{">"} IoT Orchestration</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}