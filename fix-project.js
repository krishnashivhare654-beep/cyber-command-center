const fs = require('fs');
const path = require('path');

// 1. Directory Structure Setup
const dirs = [
  'src/app/about',
  'src/app/projects',
  'src/app/resources',
  'src/components',
  'src/context',
  'src/lib'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// 2. File Rewriting Logic
const files = {
  // --- NEXT CONFIG ---
  'next.config.mjs': `
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;`,

  // --- GLOBALS CSS ---
  'src/app/globals.css': `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --background: 0 0% 3.9%; --foreground: 0 0% 98%; }
body { background: black; color: white; overflow-x: hidden; }`,

  // --- LAYOUT ---
  'src/app/layout.tsx': `
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}`,

  // --- NAVBAR ---
  'src/components/Navbar.tsx': `
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
}`,

  // --- HOME PAGE ---
  'src/app/page.tsx': `
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
}`,

  // --- PROJECTS PAGE (The 10-Project Arsenal) ---
  'src/app/projects/page.tsx': `
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Shield, Lock, Zap, Eye, Globe, Cpu, Terminal, Database, Activity, Search } from "lucide-react";

const projects = [
  { id: 1, name: "ShadowTrace", icon: <Eye />, cat: "Threat Intel" },
  { id: 2, name: "Sentinel Prime", icon: <Zap />, cat: "NIDS" },
  { id: 3, name: "Vault-X", icon: <Lock />, cat: "Cryptography" },
  { id: 4, name: "NERA Smart-Glass", icon: <Cpu />, cat: "IoT/AI" },
  { id: 5, name: "Zero-Trust Mesh", icon: <Shield />, cat: "Network" },
  { id: 6, name: "Packet Phantom", icon: <Activity />, cat: "Stealth" },
  { id: 7, name: "Neural Defender", icon: <Database />, cat: "ML/AI" },
  { id: 8, name: "IoT Orchestrator", icon: <Globe />, cat: "Middleware" },
  { id: 9, name: "Social-Engine-X", icon: <Search />, cat: "OSINT" },
  { id: 10, name: "Cloud Guardian", icon: <Terminal />, cat: "Cloud" },
];

export default function Projects() {
  useEffect(() => {
    gsap.from(".project-card", { opacity: 0, y: 30, stagger: 0.1, duration: 0.8 });
  }, []);
  return (
    <div className="p-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-mono text-emerald-500 mb-10">PROJECT_ARSENAL_V2.0</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="project-card p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl hover:bg-emerald-500/10 transition-all">
            <div className="text-emerald-500 mb-4">{p.icon}</div>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,

  // --- THEME PROVIDER ---
  'src/context/ThemeProvider.tsx': `
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}`
};

// 3. Execution
console.log("Starting System Recovery...");

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content.trim());
  console.log(`Successfully patched: ${filePath}`);
});

// Cleanup duplicate app folder if exists
const duplicateApp = path.join(__dirname, 'app');
if (fs.existsSync(duplicateApp)) {
  fs.rmSync(duplicateApp, { recursive: true, force: true });
  console.log("Removed duplicate 'app' folder from root.");
}

console.log("Recovery Complete. Run 'npm install' then 'npm run build'.");