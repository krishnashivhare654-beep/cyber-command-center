import "./globals.css";
import Link from "next/link";
import { Shield, Info, LayoutGrid, Database } from "lucide-react";

export const metadata = {
  title: "CYBER_HUB | Krishna Shivhare",
  description: "Cybersecurity Intelligence Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="cyber-grid">
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-emerald-500/10 px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-emerald-500 font-bold tracking-tighter hover:scale-105 transition-transform uppercase">
            <Shield size={20} />
            <span>CYBER_HUB</span>
          </Link>
          
          <div className="flex gap-8 text-[10px] font-mono tracking-widest">
            <Link href="/about" className="flex items-center gap-1 text-gray-400 hover:text-emerald-400 transition-colors uppercase font-bold">
              <Info size={14} /> ABOUT
            </Link>
            <Link href="/projects" className="flex items-center gap-1 text-gray-400 hover:text-emerald-400 transition-colors uppercase font-bold">
              <LayoutGrid size={14} /> ARSENAL
            </Link>
            <Link href="/resources" className="flex items-center gap-1 text-gray-400 hover:text-emerald-400 transition-colors uppercase font-bold">
              <Database size={14} /> INTEL
            </Link>
          </div>
        </nav>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}