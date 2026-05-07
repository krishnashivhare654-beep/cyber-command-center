"use client";
import { useEffect } from "react";
import { gsap } from "gsap"; 
import { ShieldCheck, Target, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    // Window check zaroori hai Next.js ke liye
    if (typeof window !== "undefined") {
      const tl: any = gsap.timeline();
      tl.from(".about-content", { 
        opacity: 0, 
        x: -50, 
        duration: 1, 
        stagger: 0.3,
        ease: "power2.out"
      });
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-mono font-bold text-emerald-500 mb-8 tracking-tighter">
        IDENTITY_VAULT.exe
      </h1>
      <div className="grid gap-12">
        <section className="about-content space-y-4">
          <h2 className="text-2xl flex items-center gap-2 font-bold text-white">
            <Target className="text-emerald-500" /> Professional Bio
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Main Krishna Shivare, VIT Bhopal ka B.Tech student hoon. Mera focus Cybersecurity aur Full-Stack Development par hai.
          </p>
        </section>
        {/* Baki sections... */}
      </div>
    </div>
  );
}