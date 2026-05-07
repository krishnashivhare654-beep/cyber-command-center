"use client";
import React from "react";
import { Book, Code, Terminal } from "lucide-react";

export default function ResourcesPage() {
  const guides = [
    { title: "ShadowTrace Setup", desc: "How to trace remote IP geolocations.", type: "Manual" },
    { title: "AES-256 Protocol", desc: "Understanding the logic behind Vault-X.", type: "Theory" },
    { title: "NIDS Basics", desc: "Setting up Sentinel Prime for home networks.", type: "Tutorial" }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-mono font-bold text-emerald-500 mb-8">INTEL_DATABASE</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {guides.map((g, i) => (
          <div key={i} className="p-6 rounded-2xl border border-emerald-500/20 bg-black hover:border-emerald-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <Book className="text-emerald-500" />
              <span className="text-[10px] text-gray-400 uppercase border border-gray-800 px-2 py-1 rounded tracking-widest">{g.type}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">{g.title}</h3>
            <p className="text-sm text-gray-400">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}