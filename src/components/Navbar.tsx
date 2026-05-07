"use client";
import Link from "next/link";
import { Shield, LayoutGrid, Info, BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-emerald-500/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono font-bold text-emerald-500 text-xl">
          <Shield className="w-6 h-6" /> CYBER_HUB
        </Link>
        <div className="flex gap-8 text-sm font-mono uppercase tracking-widest">
          <Link href="/about" className="hover:text-emerald-500 transition-colors flex items-center gap-1"><Info size={14}/> About</Link>
          <Link href="/projects" className="hover:text-emerald-500 transition-colors flex items-center gap-1"><LayoutGrid size={14}/> Arsenal</Link>
          <Link href="/resources" className="hover:text-emerald-500 transition-colors flex items-center gap-1"><BookOpen size={14}/> Intel</Link>
        </div>
      </div>
    </nav>
  );
}