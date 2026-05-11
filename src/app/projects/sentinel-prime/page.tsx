"use client";
import { useState, useEffect } from "react";
import { Activity, ShieldAlert, Wifi } from "lucide-react";

export default function SentinelPrime() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const protocols = ["TCP", "UDP", "HTTP", "HTTPS", "FTP"];
      const ips = ["192.168.1.1", "10.0.0.15", "172.16.0.5", "8.8.8.8"];
      const newLog = `[${new Date().toLocaleTimeString()}] ${protocols[Math.floor(Math.random() * protocols.length)]} Packet Scanned from ${ips[Math.floor(Math.random() * ips.length)]} - SAFE`;
      setLogs(prev => [newLog, ...prev].slice(0, 10));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-emerald-500 p-8 font-mono">
      <div className="max-w-4xl mx-auto border border-emerald-500/30 p-6 rounded bg-emerald-500/5">
        <h1 className="text-2xl mb-6 flex items-center gap-2"><Activity className="animate-pulse" /> SENTNEL_PRIME_LIVE_MONITOR</h1>
        <div className="bg-black border border-emerald-900 p-4 h-80 overflow-y-auto space-y-2 text-xs">
          {logs.map((log, i) => (
            <p key={i} className={i === 0 ? "text-emerald-400" : "text-emerald-800"}>{">"} {log}</p>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="p-4 border border-emerald-500/20 text-center">
            <p className="text-[10px] text-gray-500 uppercase">Threat Level</p>
            <p className="text-xl font-bold">LOW</p>
          </div>
          <div className="p-4 border border-emerald-500/20 text-center text-red-500">
            <p className="text-[10px] text-gray-500 uppercase">Intrusions</p>
            <p className="text-xl font-bold">0</p>
          </div>
          <div className="p-4 border border-emerald-500/20 text-center">
            <p className="text-[10px] text-gray-500 uppercase">System Status</p>
            <p className="text-xl font-bold">ARMED</p>
          </div>
        </div>
      </div>
    </div>
  );
}