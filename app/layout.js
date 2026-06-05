import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <nav className="bg-blue-600 p-4 flex gap-6">
        <Link href="/" className="text-white font-bold hover:text-blue-200">Home</Link>
        <Link href="/about" className="text-white font-bold hover:text-blue-200">About</Link>
      </nav>
      {children}
    </body>
    </html>
  );
}

