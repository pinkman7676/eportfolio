const projects = [
  {
    year: "2026",
    title: "Personal E-Portfolio",
    category: "Portfolio Website",
    description:
      "A minimal responsive e-portfolio with biography, education, resume, projects, skills, achievements, and contact sections.",
    role:
      "Designed and developed the full portfolio structure, layout, and responsive interface.",
    process:
      "Planned the required sections, organized the information flow, built the HTML/CSS layout, and tested the page on desktop and mobile.",
    tools: ["HTML", "CSS", "JavaScript"],
    visuals: ["Homepage layout", "Responsive navigation", "Project list"],
    link: "#",
  },
  {
    year: "2025",
    title: "Project A Title",
    category: "Academic Project",
    description:
      "Add your Project A description here. Mention the problem, your role, the tools you used, and the final outcome.",
    role:
      "Add your specific role and responsibilities in this project, especially the parts you personally completed.",
    process:
      "Show your thought process here: first idea, draft/sketch, design choice, prototype, testing, and final result.",
    tools: ["Research", "Presentation"],
    visuals: ["Sketch or draft", "Prototype image", "Final output"],
    link: "#",
  },
  {
    year: "2025",
    title: "Project B Title",
    category: "Previous Project",
    description:
      "Add your Project B details here. This can be a class assignment, website, design work, report, or group project.",
    role:
      "Write what you contributed, how you solved problems, and what responsibilities you handled.",
    process:
      "Add project stages such as research, planning, design, implementation, feedback, and improvement.",
    tools: ["Planning", "Documentation"],
    visuals: ["Photos", "Charts", "Screenshots"],
    link: "#",
  },
];

const projectList = document.querySelector("#project-list");

function createProject(project) {
  const article = document.createElement("article");
  article.className = "project";

  const projectYear = document.createElement("span");
  projectYear.className = "project-year";
  projectYear.textContent = project.year;

  const body = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tools = document.createElement("ul");
  tools.className = "project-meta";

  [project.category, ...project.tools].filter(Boolean).forEach((tool) => {
    const item = document.createElement("li");
    item.textContent = tool;
    tools.append(item);
  });

  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View project";
  link.setAttribute("aria-label", `Open ${project.title} project`);

  const role = document.createElement("p");
  role.className = "project-detail";
  role.innerHTML = `<strong>Role:</strong> ${project.role}`;

  const process = document.createElement("p");
  process.className = "project-detail";
  process.innerHTML = `<strong>Process:</strong> ${project.process}`;

  const visuals = document.createElement("ul");
  visuals.className = "visual-list";
  project.visuals.forEach((visual) => {
    const item = document.createElement("li");
    item.textContent = visual;
    visuals.append(item);
  });

  body.append(title, description, role, process, tools, visuals, link);
  article.append(projectYear, body);

  return article;
}

if (projectList) {
  if (projects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "project-empty";
    empty.textContent = "Projects will be added soon.";
    projectList.append(empty);
  } else {
    projects.forEach((project) => projectList.append(createProject(project)));
  }
}

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
