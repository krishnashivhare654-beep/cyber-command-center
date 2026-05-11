"use client";
import { useState } from "react";
import { Search, UserCircle, CheckCircle2, XCircle } from "lucide-react";

export default function SocialEngineX() {
  const [username, setUsername] = useState("");
  const platforms = ["GitHub", "Instagram", "Twitter", "Reddit"];

  return (
    <div className="min-h-screen bg-black text-emerald-500 p-8 font-mono">
      <div className="max-w-2xl mx-auto border border-emerald-500/30 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><UserCircle /> SOCIAL_ENGINE_X</h2>
        <div className="flex gap-2 mb-8">
          <input 
            className="flex-1 bg-zinc-900 border border-emerald-500/30 p-3 text-white outline-none"
            placeholder="Enter Username to scan..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="bg-emerald-500 text-black px-6 font-bold hover:bg-emerald-400">SCAN</button>
        </div>
        
        <div className="space-y-4">
          {platforms.map(p => (
            <div key={p} className="flex justify-between items-center p-4 border border-emerald-500/10 bg-zinc-900/50">
              <span>{p}</span>
              {username ? (
                <a href={`https://${p.toLowerCase()}.com/${username}`} target="_blank" className="text-[10px] text-blue-400 underline">VERIFY_LINK</a>
              ) : (
                <span className="text-gray-700 text-xs italic">WAITING_FOR_INPUT</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}