import Link from "next/link";

export const metadata = {
  title: 'Projects — Dennis Dev',
  description: 'Check out my frontend development projects built with React and Next.js.',
};

const projects = [
  {
id: 1,
title: "Movie Search App",
description: "Search for Movies using OMDB API",
tech: "React, Vite",
link: "https://github.com/Dennis0474/movie-search-app"
},
{
id: 2,
title: "Portfolio Website",
description: "Personal portfolio built with Next.js",
tech: "Next.js, Tailwind CSS",
link: "https://github.com/Dennis0474/my-next-app"
},
{
id: 3,
title: "Expense Tracker",
description: "Add Income and Expense Transactions",
tech: "HTML, CSS, Vanila JavaScript(Classes, OOP, DOM Manipulation, localStorage)",
link: "https://github.com/Dennis0474/expense-tracker"
},
{
id: 4,
title: "Weather App",
description: "Search Weather by any location",
tech: "Vanilla JavaScript (ES6 Modules), Visual Crossing Weather API, Giphy API, HTML5, CSS3",
link: "https://github.com/Dennis0474/weather-app"
},
{
id: 5,
title: "GitHub Profile Finder",
description: "Search any GitHub user by username",
tech: "HTML,CSS,Vanilla JavaScript(Async/Await, Fetch API, DOM Manipulation, Error handling)",
link: "https://github.com/Dennis0474/github-profile-finder"
},
{
id: 6,
title: "Quiz Game",
description: "5 riddle-style trivia questions",
tech: "HTML5(semantic structure), CSS(animations, transitions, flexbox layout), Vanilla JavaScript(game logic, DOM manipulation)",
link: "https://github.com/Dennis0474/quiz-game"
},
{
id: 7,
title: "A TodoList App",
description: "A simple task manager that AddTasks, EditTasks, DeleteTasks, DarkMode, TaskCounter, ClearCompleted, LocalStorage Persistence",
tech: "HTML, CSS, JavaScript, LocalStorage",
link: "https://github.com/Dennis0474/to-do-list"
},
];

  export default function Projects() {
    return (
      <div className="grid grid-cols-1 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg ">
          <h2 className="text-2xl text-white font-bold mb-2">{project.title}</h2>
          <p className="text-gray-400 mb-2">{project.description}</p>
          <p className="text-blue-400 mb-4">{project.tech}</p>
          <div className="flex gap-4">
            <Link href={`/projects/${project.id}`} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
            <a href={project.link} className="bg-blue-700 px-4 py-2 rounded hover:bg-gray-600" target="_blank">GitHub</a>
          </div>
          </div>
        ))}
      </div>
    );
  }