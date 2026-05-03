import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-gray-50">

        {/* 👤 NAME */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          ALI IMANDOUST
        </h1>

        {/* 💼 TITLE */}
        <h2 className="text-lg md:text-xl mt-4 text-gray-600">
          Frontend Engineer · React · Next.js · TypeScript
        </h2>

        {/* ✨ BADGE */}
        <div className="mt-4 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
          ● Open to Work
        </div>

        {/* 🧠 SUMMARY */}
        <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed text-sm md:text-base">
          Senior Frontend Engineer with 10+ years of experience building scalable,
          high-performance web applications. Focused on performance, architecture,
          and creating clean, maintainable systems.
        </p>

        {/* 🚀 CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">

          <HomeCTA />

          {/* 👇 GUIDE TEXT */}
          <p className="text-xs text-gray-400">
            💬 Click "Get Started" to explore my AI-powered resume
          </p>

        </div>

        {/* 🔗 CONTACT */}
        <div className="mt-8 flex gap-3 flex-wrap justify-center">

          <a
            href="mailto:imndst@gmail.com"
            className="px-5 py-2 rounded-full bg-black text-white text-sm hover:opacity-90"
          >
            Contact
          </a>

          <a
            href="https://www.linkedin.com/in/imndst/"
            target="_blank"
            className="px-5 py-2 rounded-full border text-sm hover:bg-gray-100"
          >
            LinkedIn
          </a>

        </div>

      </main>

      <Footer />
    </>
  );
}