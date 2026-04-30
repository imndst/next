import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-[#0B0F19] dark:text-white">
        {children}
      </body>
    </html>
  );
}