"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && textRef.current) {
      gsap.to(textRef.current, {
        duration: 3,
        text: "> System Boot... All 10 Modules Loaded. Welcome, Krishna Shivare.",
        ease: "none",
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <div className="bg-black border border-emerald-500/50 p-8 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <p ref={textRef} className="font-mono text-emerald-400 text-lg min-h-[1.5em]"></p>
      </div>
    </main>
  );
}