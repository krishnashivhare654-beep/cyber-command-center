"use client";
import Link from "next/link";
import { Shield, LayoutGrid, Info, BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-emerald-500/20 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-emerald-500">
        <Link href="/" className="font-mono font-bold text-xl flex items-center gap-2">
          <Shield /> CYBER_HUB
        </Link>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-mono">
          <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1"><Info size={14}/> About</Link>
          <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1"><LayoutGrid size={14}/> Arsenal</Link>
          <Link href="/resources" className="hover:text-white transition-colors flex items-center gap-1"><BookOpen size={14}/> Intel</Link>
        </div>
      </div>
    </nav>
  );
}