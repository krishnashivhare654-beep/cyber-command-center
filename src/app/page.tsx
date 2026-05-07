"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function Home() {
  const textRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(TextPlugin);
      gsap.to(textRef.current, {
        duration: 3,
        text: "> System Boot... All 10 Modules Loaded. Welcome, Krishna Shivare.",
        ease: "none",
      });
    }
  }, []);
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="bg-black border border-emerald-500/50 p-8 rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <p ref={textRef} className="font-mono text-emerald-400 text-lg"></p>
      </div>
    </div>
  );
}