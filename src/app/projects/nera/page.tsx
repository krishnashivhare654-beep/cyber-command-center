"use client";
import { useState, useEffect, useRef } from "react";
import { Cpu, ScanFace, VideoOff, Activity, ShieldCheck, Terminal, Camera } from "lucide-react";

export default function NeraProject() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [loading, setLoading] = useState(false);

  const startCamera = async () => {
    setLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 }, 
          height: { ideal: 720 },
          facingMode: "user" 
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          setHasCamera(true);
          setLoading(false);
        };
      }
    } catch (err) {
      console.error("Camera Access Failed:", err);
      setHasCamera(false);
      setLoading(false);
      alert("CAMERA_ERROR: Please ensure you are using http://localhost:3003 and camera permissions are allowed in browser settings.");
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-emerald-500 p-4 md:p-12 font-mono selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto border border-emerald-500/20 p-8 rounded-3xl bg-zinc-900/10 backdrop-blur-xl shadow-[0_0_80px_rgba(16,185,129,0.05)]">
        
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 tracking-tighter text-emerald-400">
            <Cpu className={hasCamera ? "animate-spin" : ""} /> NERA_PERCEPTION_V2.5
          </h1>
          <div className="flex gap-2 text-white">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${hasCamera ? 'bg-emerald-500 text-black shadow-[0_0_10px_#10b981]' : 'bg-red-500 text-white animate-pulse'}`}>
              {hasCamera ? "EYE_LINK_ACTIVE" : "OPTICAL_OFFLINE"}
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative aspect-video bg-black rounded-2xl border border-emerald-500/30 overflow-hidden group shadow-2xl">
            {!hasCamera ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-50 bg-black">
                <VideoOff size={64} className="opacity-10" />
                <p className="text-[10px] text-emerald-800 uppercase animate-pulse">
                  {loading ? "Initializing Sensors..." : "Optical Sensors Blocked"}
                </p>
                <button 
                  onClick={startCamera} 
                  className="flex items-center gap-2 px-6 py-2 border border-emerald-500 text-[10px] hover:bg-emerald-500 hover:text-black transition-all font-bold"
                >
                  <Camera size={14} /> MANUAL_OVERRIDE_SYNC
                </button>
              </div>
            ) : (
              <>
                <video 
                  ref={videoRef} 
                  autoPlay 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-60 grayscale sepia hue-rotate-90 contrast-150 brightness-75 scale-x-[-1]" 
                />
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border border-emerald-500/10 rounded-full animate-ping"></div>
                    <ScanFace size={80} className="text-emerald-500/40 animate-pulse" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-emerald-500/10 bg-emerald-500/5 rounded-2xl">
              <h3 className="text-[10px] uppercase text-emerald-700 font-bold mb-4 flex items-center gap-2 tracking-widest italic">
                <Activity size={14}/> Analytics_Output
              </h3>
              <div className="space-y-4 text-xs">
                <div className="flex justify-between border-b border-emerald-500/10 pb-2">
                  <span className="text-gray-500">BIOMETRIC_ID</span>
                  <span className="text-white font-bold">{hasCamera ? "KRISHNA_V" : "NULL"}</span>
                </div>
                <div className="flex justify-between border-b border-emerald-500/10 pb-2">
                  <span className="text-gray-500">SYNC_RATE</span>
                  <span className="text-white font-bold">144Hz</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-emerald-500/10 bg-emerald-500/5 rounded-2xl">
              <h3 className="text-[10px] uppercase text-emerald-700 font-bold mb-4 flex items-center gap-2 tracking-widest italic">
                <ShieldCheck size={14}/> SECURITY_PROTO
              </h3>
              <p className="text-2xl font-bold text-white tracking-tighter uppercase mb-2">Level_5_Armed</p>
              <p className="text-[10px] text-gray-600 uppercase leading-relaxed italic">
                Scanning environment for physical threats. Bio-link established with operator.
              </p>
            </div>
            
            <div onClick={() => window.location.reload()} className="p-4 bg-emerald-500 text-black rounded-lg text-center font-bold text-[10px] uppercase cursor-pointer hover:shadow-[0_0_20px_#10b981] transition-all">
              RESTART_OPTICAL_ENGINE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}