"use client";

import { useState } from "react";
import MobileFrame from "@/components/chat/MobileFrame";
import { generateId } from "@/lib/utils";

type Msg = {
  id: string;
  text: string;
  role: "user" | "bot";
  liked?: boolean;
};

const quickQuestions = [
  "What is Abanro?",
  "How does Instagram automation work?",
  "Pricing plans?",
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
      
      {/* HEADER */}
      <div className="p-3 border-b flex justify-between">
        <span className="font-semibold">abanro AI 💬</span>
        <span className="text-xs text-gray-400">online</span>
      </div>

      {/* QUICK QUESTIONS (GLASS UI) */}
      <div className="p-3 flex flex-wrap gap-2">
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => send(q)}
            className="backdrop-blur-md bg-white/40 border px-3 py-1 rounded-full text-xs hover:bg-white/70 transition"
          >
            {q}
          </button>
        ))}
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
                    : "bg-white border px-3 py-2 rounded-2xl"
                }
              >
                {m.text}
              </div>

              {/* ❤️ reaction */}
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
          placeholder="Ask anything..."
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