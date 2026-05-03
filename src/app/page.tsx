import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/HomeCTA";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* 🚨 BANNER */}
        <div className="flex justify-center px-4 pt-6">
          <Link
            href="/lamps"
            className="w-full max-w-4xl"
          >
            <div className="flex items-center justify-between px-4 py-2 rounded-full border bg-white shadow-sm hover:shadow-md transition">
              
              <span className="text-[10px] bg-black text-white px-2 py-[2px] rounded-full">
                SYSTEM
              </span>

              <p className="text-sm text-gray-700 truncate px-3">
                Built a deterministic UI engine using lamp-based state simulation
              </p>

              <span className="text-xs text-gray-500 whitespace-nowrap">
                Open System →
              </span>

            </div>
          </Link>
        </div>

        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            ALI IMANDOUST
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Frontend Engineer · System Designer · React · Next.js
          </p>

          <div className="mt-4 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            ● Open to Work
          </div>

          <p className="mt-6 max-w-2xl text-sm md:text-base text-gray-500 leading-relaxed">
            I design computational frontend systems where UI state is generated from
            deterministic logic instead of traditional backend-driven architecture.
          </p>

          <div className="mt-10">
            <HomeCTA />
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Explore system architecture ↓
          </p>

        </section>

        {/* SYSTEM PHILOSOPHY */}
        <section className="max-w-5xl mx-auto px-6 py-20">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              System Design Philosophy
            </h2>

            <p className="text-sm text-gray-500 mt-3">
              UI is not rendered — it is computed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold">⚙️ Stateless Architecture</h3>
              <p className="text-xs text-gray-500 mt-2">
                Everything derived from pure computation.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold">🔐 Deterministic Security</h3>
              <p className="text-xs text-gray-500 mt-2">
                Same input → same system state.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold">💡 State Simulation</h3>
              <p className="text-xs text-gray-500 mt-2">
                UI behaves like a computed engine.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold">🚀 No Backend Dependency</h3>
              <p className="text-xs text-gray-500 mt-2">
                Fully scalable frontend-driven system.
              </p>
            </div>

          </div>

        </section>

        {/* PROJECTS */}
        <section className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-center text-3xl font-bold mb-10">
            Interactive Systems
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 border rounded-2xl hover:shadow-sm transition">
              <h3 className="font-semibold">Lamp Engine</h3>
              <p className="text-xs text-gray-500 mt-2">
                Cryptographic state simulation system.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-sm transition">
              <h3 className="font-semibold">AI Resume OS</h3>
              <p className="text-xs text-gray-500 mt-2">
                Conversational portfolio system.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-sm transition">
              <h3 className="font-semibold">Cover Generator</h3>
              <p className="text-xs text-gray-500 mt-2">
                Dynamic document generation engine.
              </p>
            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section className="text-center py-20">

          <div className="flex gap-3 justify-center">
            <a
              href="mailto:imndst@gmail.com"
              className="px-5 py-2 rounded-full bg-black text-white text-sm"
            >
              Contact
            </a>

            <a
              href="https://www.linkedin.com/in/imndst/"
              target="_blank"
              className="px-5 py-2 rounded-full border text-sm"
            >
              LinkedIn
            </a>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}