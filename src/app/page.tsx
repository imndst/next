import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">

        {/* NAME / TITLE (FROM RESUME) */}
        <h1 className="text-5xl font-bold">
          ALI IMNDOUST
        </h1>

        <h2 className="text-xl mt-3 text-gray-600">
          Frontend Engineer (React • Next.js • TypeScript)
        </h2>

        {/* SUMMARY FROM RESUME */}
        <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed">
          Senior Frontend Engineer (Fullstack) with 10+ years of experience building scalable,
          high-performance web applications using React, Next.js (App Router), and TypeScript.
        </p>

        {/* CTA CONNECTED TO YOU */}
        <div className="mt-8">
          <HomeCTA />
        </div>

        {/* QUICK CONTACT BUTTONS */}
        <div className="mt-6 flex gap-3 flex-wrap justify-center">

          <a
            href="mailto:imndst@gmail.com"
            className="px-5 py-2 rounded-full bg-black text-white text-sm"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/imndst/"
            target="_blank"
            className="px-5 py-2 rounded-full border text-sm"
          >
            LinkedIn
          </a>

          <a
            href="https://imndst.github.io/ali-imandoust-portfolio/"
            target="_blank"
            className="px-5 py-2 rounded-full border text-sm"
          >
           More 
          </a>

        </div>

      </main>

      <Footer />
    </>
  );
}