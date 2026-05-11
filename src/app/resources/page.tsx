"use client";
import React, { useState } from "react";
import { Terminal, HardDrive, Cpu, Lock, Activity, ShieldCheck } from "lucide-react";

const intelData = [
  { 
    id: "01", title: "ShadowTrace_Protocol", tag: "OSINT", icon: <Cpu size={20} />,
    content: "ShadowTrace intercepts IPv4 headers and resolves geolocation payloads using distributed databases. It identifies ISP backends and coordinate mapping.",
    specs: "METHOD: GET // DATA: JSON // LATENCY: 0.12ms"
  },
  { 
    id: "02", title: "Vault-X_Encryption", tag: "CRYPTO", icon: <Lock size={20} />,
    content: "Implements AES-256-CBC architecture. Data is padded into 32-byte blocks with unique IV strings for military-grade protection.",
    specs: "ALGO: AES_256 // HASH: SHA_256 // STATUS: SECURE"
  },
  { 
    id: "03", title: "Sentinel_Monitor", tag: "NIDS", icon: <Activity size={20} />,
    content: "Real-time Network Intrusion Detection. Analyzes TCP/UDP packet bursts for signature-based attack patterns and anomalous behavior.",
    specs: "TYPE: PACKET_SNIFFER // PORT: 80/443 // STATUS: ARMED"
  }
];

export default function IntelPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-black pt-28 px-6 md:px-10 font-mono text-emerald-500">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-emerald-500/20 pb-4"><HardDrive /> DIRECTORY</h2>
          {intelData.map((item, i) => (
            <button key={i} onClick={() => setActive(i)} 
              className={`w-full text-left p-6 border rounded-xl transition-all ${active === i ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_15px_#10b98122]' : 'border-emerald-500/10 text-emerald-900 hover:border-emerald-500/40 hover:text-emerald-500'}`}>
              <span className="text-[9px] block opacity-50 uppercase tracking-widest mb-1">ENTRY_{item.id}</span>
              <div className="flex items-center gap-3 font-bold">{item.icon} {item.title}</div>
            </button>
          ))}
        </div>
        <div className="lg:col-span-2 p-12 border border-emerald-500/30 bg-emerald-500/5 rounded-[2.5rem] relative min-h-[500px] flex flex-col">
          <div className="absolute top-6 right-8 text-[10px] opacity-20 tracking-widest uppercase">SECURE_INTEL_STREAM</div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">{intelData[active].title}</h3>
          <p className="text-gray-400 leading-relaxed text-base flex-grow font-sans italic">{intelData[active].content}</p>
          <div className="mt-12 p-6 bg-black border-l-4 border-emerald-500 text-[11px] space-y-2">
            <p className="text-emerald-300 font-bold uppercase tracking-widest">TECHNICAL_REPORT:</p>
            <p className="text-emerald-800">{">"} {intelData[active].specs}</p>
            <p className="text-emerald-800">{">"} INTEGRITY: PASSED_BY_KRISHNA</p>
          </div>
        </div>
      </div>
    </div>
  );
}