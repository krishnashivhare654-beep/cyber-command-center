"use client";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { Lock, Unlock, ShieldAlert } from "lucide-react";

export default function VaultX() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const key = "KRISHNA_CYBER_KEY";

  const encrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    setResult(encrypted);
  };

  const decrypt = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(text, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setResult(decrypted || "Invalid Hash!");
    } catch {
      setResult("Decryption Error!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-emerald-500 p-8 font-mono">
      <div className="max-w-2xl mx-auto border border-emerald-500/30 p-8 rounded-2xl bg-zinc-900/50">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><ShieldAlert /> VAULT_X_ENCRYPTION</h2>
        
        <textarea 
          className="w-full bg-black border border-emerald-500/30 p-4 text-emerald-400 mb-6 h-32 outline-none"
          placeholder="Enter text to encrypt or hash to decrypt..."
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex gap-4 mb-8">
          <button onClick={encrypt} className="flex-1 bg-emerald-600 text-black py-3 rounded font-bold flex items-center justify-center gap-2 hover:bg-emerald-500 uppercase"><Lock size={18}/> Encrypt</button>
          <button onClick={decrypt} className="flex-1 border border-emerald-600 py-3 rounded font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-black transition-all uppercase"><Unlock size={18}/> Decrypt</button>
        </div>

        {result && (
          <div className="p-4 bg-emerald-500/10 border border-dashed border-emerald-500/50 break-all">
            <p className="text-xs text-gray-500 mb-1 font-bold tracking-widest">OUTPUT_STREAM:</p>
            <p className="text-white text-sm">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}