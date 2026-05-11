"use client";
import Link from "next/link";
import { Eye, Lock, Zap, Cpu, Globe, Shield } from "lucide-react";

const cards = [
  { name: "ShadowTrace", cat: "Threat Intel", icon: <Eye />, path: "/projects/shadowtrace" },
  { name: "Sentinel Prime", cat: "NIDS", icon: <Zap />, path: "/projects/sentinel-prime" },
  { name: "Vault-X", cat: "Cryptography", icon: <Lock />, path: "/projects/vault-x" },
  { name: "NERA", cat: "AI HUD", icon: <Cpu />, path: "/projects/nera" },
  { name: "IoT Orchestrator", cat: "Middleware", icon: <Globe />, path: "/projects/iot-orchestrator" },
  { name: "Zero Trust", cat: "Networking", icon: <Shield />, path: "/projects/zero-trust" },
];

export default function Arsenal() {
  return (
    <div className="min-h-screen pt-28 px-10 pb-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-mono text-emerald-500 mb-12 tracking-[0.3em] uppercase">{">"} Project_Arsenal_v2.0</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <Link href={c.path} key={i}>
            <div className="p-10 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all rounded-3xl group cursor-pointer">
              <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform">{c.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{c.name}</h3>
              <p className="text-emerald-800 text-[10px] font-mono uppercase tracking-widest">{c.cat} // ACTIVE</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}