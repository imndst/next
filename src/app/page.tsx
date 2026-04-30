import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-5xl font-bold">
          Turn Instagram DMs into Sales 🚀
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl">
          Abanro helps you manage Instagram sales and automate conversations.
        </p>

        <HomeCTA />

      </main>

      <Footer />
    </>
  );
}