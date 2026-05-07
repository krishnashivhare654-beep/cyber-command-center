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
}