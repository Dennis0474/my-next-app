export const metadata = {
  title: 'Resume — Dennis Dev',
  description: 'Frontend Developer resume — Dennis. Skills, projects and experience.',
};

export default function Resume() {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['React.js', 'Next.js', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vite'],
    concepts: [
      'REST APIs',
      'Responsive Design',
      'Algorithms',
      'Data Structures',
      'Async JavaScript'
    ]
  };

  const projects = [
  {
title: "Movie Search App",
description: "Search for Movies using OMDB API",
tech: "React, Vite",
link: "https://github.com/Dennis0474/movie-search-app",
live: null
},
{
title: "Portfolio Website",
description: "Personal portfolio built with Next.js",
tech: "Next.js, Tailwind CSS",
link: "https://github.com/Dennis0474/my-next-app",
live: "https://my-portfolio-pi-black-49.vercel.app/"
},
{
title: "Expense Tracker",
description: "Add Income and Expense Transactions",
tech: "HTML, CSS, Vanila JavaScript(Classes, OOP, DOM Manipulation, localStorage)",
link: "https://github.com/Dennis0474/expense-tracker",
live: null
},
{
title: "Weather App",
description: "Search Weather by any location",
tech: "Vanilla JavaScript (ES6 Modules), Visual Crossing Weather API, Giphy API, HTML5, CSS3",
link: "https://github.com/Dennis0474/weather-app",
live: null
},
{
title: "GitHub Profile Finder",
description: "Search any GitHub user by username",
tech: "HTML,CSS,Vanilla JavaScript(Async/Await, Fetch API, DOM Manipulation, Error handling)",
link: "https://github.com/Dennis0474/github-profile-finder",
live: null
},
{
title: "Quiz Game",
description: "5 riddle-style trivia questions",
tech: "HTML5(semantic structure), CSS(animations, transitions, flexbox layout), Vanilla JavaScript(game logic, DOM manipulation)",
link: "https://github.com/Dennis0474/quiz-game",
live: null
},
{
title: "A TodoList App",
description: "A simple task manager that AddTasks, EditTasks, DeleteTasks, DarkMode, TaskCounter, ClearCompleted, LocalStorage Persistence",
tech: "HTML, CSS, JavaScript, LocalStorage",
link: "https://github.com/Dennis0474/to-do-list",
live: null
},
]

return (
  <div className="min-h-screen bg-gray-900 text-white p-10">
    <div className="max-w-3xl max-auto">
      <div className="mb-10 border-b border-gray-700 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">
            Dennis
          </h1>
          <h2 className="text-xl text-blue-400 mb-4">
            Frontend Developer
          </h2>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <span>Ilorin Nigeria</span>
            <a href="mailto:dennisegheosaomoyibo@gmail.com"
              className="hover:text-blue-400">
              ✉️ dennisegheosaomoyibo@gmail.com
            </a>
            <a href="https://github.com/Dennis0474"
              target="_blank"
              className="hover:text-blue-400">
              🐙 GitHub
            </a>
            <a href="https://your-vercel-url.vercel.app"
              target="_blank"
              className="hover:text-blue-400">
              🌐 Portfolio
            </a>
          </div>
      </div>

      <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate self-taught Frontend Developer with
            hands-on experience building modern web applications
            using React and Next.js. Strong foundation in
            JavaScript, algorithms, data structures and async
            programming. Currently expanding into backend
            development and databases.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Skills</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h3 className="text-white font-bold mt-2">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(skill => (
                  <span key={skill} className="bg-blue-500 mb-2 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-white font-bold mt-2">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map(skill => (
              <span key={skill} className="bg-green-600 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.concepts.map(skill => (
              <span key={skill} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mt-8">Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map(project => (
            <div key={project.title}>
                <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <p className="text-blue-400 text-sm mb-4">{project.tech}</p>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 text-sm">GitHub</a>
                  {project.live && (
                    <a href={project.live} target="_blank" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 text-sm">Live Demo</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
    
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-blue-400 mt-4">Education</h2>
      <div className="bg-gray-800 p-6  rounded-lg">
        <h3>Self-Taught Frontend Developer</h3>
        <p className="text-blue-400 mb-2">2025 - Present</p>
        <ul className="text-gray-400 list-disc list-inside">
          <li>The Odin Project curriculum</li>
          <li>JavaScript, Algorithms & Data Structures</li>
          <li>React.js and Next.js</li>
          <li>Currently learning Backend & Databases</li>
        </ul>
      </div>
    </div>

    </div>
    </div>    
)
}