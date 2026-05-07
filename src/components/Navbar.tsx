"use client";
import Link from "next/link";
import { Shield, LayoutGrid, Info, BookOpen, Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-emerald-500/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 font-mono font-bold text-emerald-400 text-xl group">
          <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="tracking-tighter uppercase">Cyber_Hub</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 md:gap-10 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
          <Link href="/about" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
            <Info size={14} /> About
          </Link>
          <Link href="/projects" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
            <LayoutGrid size={14} /> Arsenal
          </Link>
          <Link href="/resources" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
            <BookOpen size={14} /> Intel
          </Link>
        </div>

        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-500/70 uppercase">System_Online</span>
        </div>
      </div>
    </nav>
  );
}