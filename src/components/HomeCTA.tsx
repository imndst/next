"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeCTA() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      router.push("/chat");
    }, 500);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
      >
        Get Started 🚀
      </button>

      {loading && (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center text-xl font-bold">
          Opening Chat 🚀
        </div>
      )}
    </>
  );
}