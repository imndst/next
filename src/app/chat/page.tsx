"use client";

import { useState, useRef } from "react";
import MobileFrame from "@/components/chat/MobileFrame";
import { generateId } from "@/lib/utils";
import { downloadFullResumePDF } from "@/lib/pdf";
import { downloadCoverLetterPDF } from "@/lib/pdf";  

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

// 📄 Cover Letter Download


export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const send = async (text: string) => {
    const msg = text || input;
    if (!msg) return;

    setActiveQuestion(msg);

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

    // 🔽 auto scroll
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
            className={`
              px-3 py-1 rounded-full text-xs transition
              border backdrop-blur-md
              ${
                activeQuestion === q
                  ? "bg-black text-white border-black"
                  : "bg-white/40 hover:bg-white/70"
              }
            `}
          >
            {q}
          </button>
        ))}

        {/* 📄 CV */}
        <button
          onClick={downloadFullResumePDF}
          className="px-3 py-1 rounded-full bg-green-700 text-white text-xs"
        >
          Download CV
        </button>

        {/* 💌 Cover Letter */}
        <button
          onClick={downloadCoverLetterPDF}
          className="px-3 py-1 rounded-full bg-green-600 text-white text-xs"
        >
          Cover Letter
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

        {/* 🔽 scroll anchor */}
        <div ref={bottomRef} />

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