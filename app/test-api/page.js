export default async function TestApi() {
  const response = await fetch("http://localhost:3000/api/projects");
  const projects = await response.json();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Projects from my own API</h1>
      {projects.map(project => (
        <div key={project.id}>
          <p className="text-white font-bold">{project.title}</p>
          <p className="text-blue-400">{project.tech}</p>
        </div>
      ))}
    </div>
  )
}