import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <nav className="bg-gray-900 p-4 flex gap-6 items-center">
        <span className="text-white font-bold text-xl mr-auto">Dennis Dev</span>
        <Link href="/" className="text-white hover:text-blue-400">Home</Link>
        <Link href="/about" className="text-white hover:text-blue-400">About</Link>
        <Link href="/projects" className="text-white hover:text-blue-400">Projects</Link>
        <Link href="/contact" className="text-white hover:text-blue-400">Contact</Link>
      </nav>
      {children}
    </body>
    </html>
  );
}

