export async function GET() {
  const projects = [
  {
id: 1,
title: "Movie Search App"
},
{
id: 2,
title: "Portfolio Website"
},
{
id: 3,
title: "Expense Tracker"
},
{
id: 4,
title: "Weather App"
},
{
id: 5,
title: "GitHub Profile Finder"
},
{
id: 6,
title: "Quiz Game"
},
{
id: 7,
title: "A TodoList App"
}
];

return Response.json(projects);
}