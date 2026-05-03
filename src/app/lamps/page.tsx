"use client";

import { useState } from "react";

const samples = [
  "00000000",
  "12345678",
  "87654321",
  "24682468",
  "13579135",
  "48271635",
  "91827364",
  "10293847",
];

export default function LampsPage() {
  const [code, setCode] = useState("12341234");
  const [masterKey, setMasterKey] = useState("lamp-system-v1");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const run = async (c?: string) => {
    const finalCode = c || code;

    setLoading(true);
    setResult(null);

    const res = await fetch("/api/lamps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: finalCode,
        masterKey,
      }),
    });

    const data = await res.json();

    setResult({ ...data, code: finalCode });
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-white to-gray-50">

      {/* HEADER */}
      <div className="text-center max-w-xl">

        <h1 className="text-3xl md:text-4xl font-bold">
          🔐 Smart Lamp Security System
        </h1>

        <p className="text-sm text-gray-500 mt-3">
          Cryptographic simulation of authentication, hashing & access control
        </p>

      </div>

      {/* SYSTEM STATUS BADGES */}
      <div className="mt-6 flex gap-2 flex-wrap justify-center">

        <div className={`px-3 py-1 rounded-full text-xs border ${
          result?.valid ? "bg-green-100 text-green-700 border-green-300" : "bg-gray-100"
        }`}>
          ● VALID MODE
        </div>

        <div className={`px-3 py-1 rounded-full text-xs border ${
          result && !result.valid ? "bg-red-100 text-red-700 border-red-300" : "bg-gray-100"
        }`}>
          ● SECURE MODE
        </div>

        <div className="px-3 py-1 rounded-full text-xs border bg-blue-50 text-blue-600">
          ● DEMO SYSTEM
        </div>

      </div>

      {/* INFO PANEL */}
      <div className="mt-6 bg-white border rounded-2xl p-5 max-w-md text-xs text-gray-600 shadow-sm">

        <p className="font-semibold mb-2">System Flow</p>

        <p>1. User enters 8-digit code</p>
        <p>2. Code + master key combined</p>
        <p>3. SHA256 checksum generated</p>
        <p>4. Hash controls lamp states</p>
        <p>5. Invalid inputs lock system</p>

        <p className="mt-3 text-gray-400">
          Simulates real-world authentication architecture
        </p>

      </div>

      {/* INPUT PANEL */}
      <div className="mt-6 w-full max-w-md space-y-3">

        <input
          value={masterKey}
          onChange={(e) => setMasterKey(e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-center text-sm"
          placeholder="Master Key"
        />

        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-center tracking-widest font-mono"
          placeholder="8-digit code"
        />

        <button
          onClick={() => run()}
          className="w-full bg-black text-white py-2 rounded-xl hover:opacity-90 transition"
        >
          Run System
        </button>

      </div>

      {/* SAMPLES */}
      <div className="mt-5 flex gap-2 flex-wrap justify-center">

        {samples.map((s, i) => (
          <button
            key={i}
            onClick={() => run(s)}
            className="text-xs border px-3 py-1 rounded-full bg-white hover:bg-gray-100 transition"
          >
            {s}
          </button>
        ))}

      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-xs text-gray-400 mt-4 animate-pulse">
          Processing secure validation...
        </p>
      )}

      {/* RESULT PANEL */}
      {result && (
        <div className="mt-10 w-full max-w-md bg-white border rounded-2xl p-5 shadow-sm">

          {/* STATUS */}
          <div className="text-center font-semibold">
            {result.valid ? (
              <span className="text-green-600">🟢 SYSTEM UNLOCKED</span>
            ) : (
              <span className="text-red-500">🔴 SYSTEM LOCKED</span>
            )}
          </div>

          {/* CODE */}
          <p className="text-xs text-gray-400 mt-4">INPUT CODE</p>
          <p className="font-mono text-sm text-center">{result.code}</p>

          {/* HASH */}
          <p className="text-xs text-gray-400 mt-4">CHECKSUM</p>
          <p className="font-mono text-xs break-all bg-gray-50 border p-2 rounded mt-1">
            {result.hash}
          </p>

          {/* LAMPS */}
          <div className="flex gap-3 mt-6 justify-center">

            <div className="w-10 h-10 rounded-full transition-all"
              style={{ background: result.lamps.lamp1 ? "#ef4444" : "#e5e7eb" }} />

            <div className="w-10 h-10 rounded-full transition-all"
              style={{ background: result.lamps.lamp2 ? "#22c55e" : "#e5e7eb" }} />

            <div className="w-10 h-10 rounded-full transition-all"
              style={{ background: result.lamps.lamp3 ? "#f59e0b" : "#e5e7eb" }} />

            <div className="w-10 h-10 rounded-full border transition-all"
              style={{ background: result.lamps.lamp4 ? "#ffffff" : "#e5e7eb" }} />

          </div>

          {/* EXPLANATION */}
          <div className="mt-5 text-xs text-gray-600 bg-gray-50 border rounded-xl p-3">

            <p className="font-semibold mb-1">Result Analysis</p>

            {result.valid ? (
              <p>
                ✔ Authentication successful  
                ✔ Master key verified  
                ✔ Lamps mapped from hash output  
              </p>
            ) : (
              <p>
                ❌ Authentication failed  
                ❌ Invalid key or checksum mismatch  
                ❌ System locked for security reasons  
              </p>
            )}

          </div>

        </div>
      )}

    </main>
  );
}