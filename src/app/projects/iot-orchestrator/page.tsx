"use client";
import { useState } from "react";
import { Globe, Power, Radio, Server } from "lucide-react";

export default function IotOrchestrator() {
  const [devices, setDevices] = useState([
    { name: "Node_Alpha", status: true },
    { name: "Node_Delta", status: false },
    { name: "Gateway_01", status: true },
  ]);

  const toggle = (index: number) => {
    const newDev = [...devices];
    newDev[index].status = !newDev[index].status;
    setDevices(newDev);
  };

  return (
    <div className="min-h-screen bg-black text-emerald-500 p-8 font-mono">
      <div className="max-w-3xl mx-auto border border-emerald-500/30 p-8 rounded-xl bg-black">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3"><Globe className="animate-pulse" /> IOT_MESH_ORCHESTRATOR</h2>
        
        <div className="space-y-4">
          {devices.map((d, i) => (
            <div key={i} className="flex items-center justify-between p-5 border border-emerald-500/20 bg-emerald-500/5 rounded-lg">
              <div className="flex items-center gap-4">
                <Radio className={d.status ? "text-emerald-400" : "text-zinc-700"} />
                <div>
                  <p className="font-bold">{d.name}</p>
                  <p className="text-[10px] text-gray-600 uppercase">UID: {Math.random().toString(16).slice(2, 10)}</p>
                </div>
              </div>
              <button 
                onClick={() => toggle(i)}
                className={`px-4 py-2 rounded text-xs font-bold transition-all ${d.status ? "bg-emerald-500 text-black" : "border border-emerald-500 text-emerald-500"}`}
              >
                {d.status ? "ONLINE" : "OFFLINE"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}