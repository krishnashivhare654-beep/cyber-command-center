"use client";
import { useState } from "react";
import { Shield, Key, Lock, Unlock } from "lucide-react";

export default function ZeroTrust() {
  const [access, setAccess] = useState<null | boolean>(null);

  return (
    <div className="min-h-screen bg-black text-emerald-500 p-8 font-mono flex items-center justify-center">
      <div className="w-full max-w-md border border-emerald-500/30 p-10 bg-zinc-900/40 rounded-3xl text-center">
        <Shield size={60} className="mx-auto mb-6 text-emerald-500" />
        <h2 className="text-xl font-bold mb-4 tracking-widest underline">ZERO_TRUST_GATEWAY</h2>
        <p className="text-xs text-gray-500 mb-8 uppercase italic">"Never Trust, Always Verify"</p>

        {access === null ? (
          <button 
            onClick={() => setAccess(Math.random() > 0.3)}
            className="w-full py-4 border border-emerald-500 hover:bg-emerald-500 hover:text-black transition-all font-bold uppercase"
          >
            Request Access
          </button>
        ) : (
          <div className={`p-6 border ${access ? 'border-emerald-500 bg-emerald-500/10' : 'border-red-500 bg-red-500/10'} rounded`}>
            {access ? <Unlock className="mx-auto mb-2" /> : <Lock className="mx-auto mb-2 text-red-500" />}
            <p className={access ? "text-emerald-400" : "text-red-500"}>
              {access ? "ACCESS_GRANTED: SESSION_START" : "ACCESS_DENIED: UNAUTHORIZED"}
            </p>
            <button onClick={() => setAccess(null)} className="mt-4 text-[10px] underline uppercase">Reset</button>
          </div>
        )}
      </div>
    </div>
  );
}