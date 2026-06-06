export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
    <h1 className="text-4xl font-bold text-blue-400 mb-6">About Me</h1>
    <p className="text-gray-300 text-lg mb-4">Hi! I'm Dennis, a passionate Frontend Developer based in Nigeria.</p>
    <p className="text-gray-300 text-lg mb-4">I build beautiful and functional web applications using modern technologies like React and Next.js.</p>
    <h2 className="text-2xl font-bold text-blue-400 mb-4 mt-8">Skills</h2>
    <div className="flex gap-4 flex-wrap">
      {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Git'].map(skill => (
        <span key={skill} className="bg-blue-500 px-4 py-2 rounded-full text-white">{skill}</span>
      ))}
    </div>
    </div>
  );
}