"use client";
import { useState } from "react";
import axios from "axios";
import { Terminal, Shield, Globe, MapPin } from "lucide-react";

export default function ShadowTrace() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrace = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://ipapi.co/${ip || '8.8.8.8'}/json/`);
      setData(response.data);
    } catch (error) {
      alert("Trace Failed. Check IP format.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-emerald-500 p-8 font-mono">
      <div className="max-w-4xl mx-auto border border-emerald-500/30 p-6 bg-emerald-500/5 rounded-lg">
        <h1 className="text-2xl mb-6 flex items-center gap-2">
          <Terminal className="animate-pulse" /> SHADOW_TRACE_ACTIVE_LOG
        </h1>

        <div className="flex gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Enter Target IP..." 
            className="bg-black border border-emerald-500/50 p-3 flex-1 text-white outline-none focus:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            onChange={(e) => setIp(e.target.value)}
          />
          <button 
            onClick={handleTrace}
            className="bg-emerald-500 text-black px-6 py-3 font-bold hover:bg-emerald-400 transition-all uppercase"
          >
            {loading ? "Tracing..." : "Execute_Trace"}
          </button>
        </div>

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-4 border border-emerald-500/20 rounded bg-black">
              <p className="text-xs text-emerald-700 underline">GEOLOCATION_DATA</p>
              <p className="text-white mt-2 flex items-center gap-2"><Globe size={14}/> {data.city}, {data.country_name}</p>
              <p className="text-white flex items-center gap-2"><MapPin size={14}/> Lat: {data.latitude}, Long: {data.longitude}</p>
            </div>
            <div className="p-4 border border-emerald-500/20 rounded bg-black">
              <p className="text-xs text-emerald-700 underline">NETWORK_INTEL</p>
              <p className="text-white mt-2 italic">ASN: {data.asn}</p>
              <p className="text-white font-bold tracking-tighter">ORG: {data.org}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}