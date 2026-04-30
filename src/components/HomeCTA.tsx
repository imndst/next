"use client";

import { useRouter } from "next/navigation";

export default function HomeCTA() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/chat")}
      className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
    >
      Get Started 🚀
    </button>
  );
}