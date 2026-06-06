import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">Hi I'm <span className="text-blue-400">Dennis</span></h1>
      <p className="text-gray-400 text-xl mb-8">Frontend Developer</p>
      <Link href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">View My Projects</Link>
    </div>
  );
}