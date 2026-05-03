"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeCTA() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // fake small delay for UX
    setTimeout(() => {
      router.push("/chat");
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="mt-8 bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
          Loading...
        </>
      ) : (
        "Get Started 🚀"
      )}
    </button>
  );
}