"use client";

import { useState } from "react";
import MobileFrame from "@/components/chat/MobileFrame";
import { generateId } from "@/lib/utils";
import { downloadFullResumePDF } from "@/lib/pdf"; 

type Msg = {
  id: string;
  text: string;
  role: "user" | "bot";
  liked?: boolean;
};

const quickQuestions = [
  "Introduce yourself",
  "What are your skills?",
  "Show your experience",
  "Show your projects",
  "How can I contact you?"
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");

  const send = async (text: string) => {
    const msg = text || input;
    if (!msg) return;

    const userMsg: Msg = {
      id: generateId(),
      text: msg,
      role: "user",
    };

    setMessages((p) => [...p, userMsg]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: msg }),
    });

    const data = await res.json();

    const botMsg: Msg = {
      id: generateId(),
      text: data.reply,
      role: "bot",
    };

    setMessages((p) => [...p, botMsg]);
  };

  const toggleLike = (id: string) => {
    setMessages((p) =>
      p.map((m) =>
        m.id === id ? { ...m, liked: !m.liked } : m
      )
    );
  };

  return (
    <MobileFrame>

      {/* HEADER (RESUME STYLE) */}
      <div className="p-3 border-b flex justify-between items-center">
        <div>
          <span className="font-semibold">ALI IMNDOUST</span>
          <p className="text-xs text-gray-500">
            Frontend Engineer • Resume AI Assistant
          </p>
        </div>

        <span className="text-xs text-green-500">● available</span>
      </div>

      {/* ACTION BAR */}
      <div className="p-3 flex gap-2 flex-wrap">

        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => send(q)}
            className="backdrop-blur-md bg-white/40 border px-3 py-1 rounded-full text-xs hover:bg-white/70 transition"
          >
            {q}
          </button>
        ))}

        {/* 📄 DOWNLOAD CV BUTTON */}
        <button
          onClick={downloadFullResumePDF}
          className="px-3 py-1 rounded-full bg-black text-white text-xs"
        >
          Download CV PDF
        </button>

      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">

        {messages.map((m) => (
          <div
            key={m.id}
            className={m.role === "user" ? "text-right" : "text-left"}
          >
            <div className="relative inline-block">

              <div
                className={
                  m.role === "user"
                    ? "bg-blue-500 text-white px-3 py-2 rounded-2xl"
                    : "bg-white border px-3 py-2 rounded-2xl whitespace-pre-line"
                }
              >
                {m.text}
              </div>

              {m.role === "bot" && (
                <button
                  onClick={() => toggleLike(m.id)}
                  className="text-xs mt-1 block"
                >
                  {m.liked ? "❤️ liked" : "🤍 like"}
                </button>
              )}

            </div>
          </div>
        ))}

      </div>

      {/* INPUT */}
      <div className="p-3 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 text-sm"
          placeholder="Ask about Ali..."
        />

        <button
          onClick={() => send("")}
          className="bg-black text-white px-4 rounded-full"
        >
          Send
        </button>
      </div>

    </MobileFrame>
  );
}