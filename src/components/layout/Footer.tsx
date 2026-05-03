export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t bg-white dark:bg-[#0B0F19] text-center text-sm text-gray-500 py-3 z-50">

      <div className="flex  md:flex-row items-center justify-center gap-2">

        <span>
          © {new Date().getFullYear()} ALI IMNDOUST
        </span>

        <span className="hidden md:inline">•</span>

        <span>
          Frontend Engineer (React • Next.js • TypeScript)
        </span>

        <span className="hidden md:inline">•</span>

        <a
          href="mailto:imndst@gmail.com"
          className="text-orange-500 hover:underline"
        >
          Contact
        </a>

      </div>

    </footer>
  );
}