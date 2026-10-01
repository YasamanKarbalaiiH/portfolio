import AdminIcon from "../img/Admin Dashboard - Google Chrome 10_1_2026 11_52_05 AM.png";
import TodoIcon from "../img/Home - File Explorer 10_1_2026 11_57_16 AM.png";
import TaskIcon from "../img/Home - File Explorer 10_1_2026 11_54_45 AM.png";
import Image from "next/image";

const projects = [
  {
    title: "Admin Dashboard",
    icon: AdminIcon,
    description:
      "A modern and responsive admin dashboard for managing customers, products, invoices and business data.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/YasamanKarbalaiiH/Admin-Dashboard2",
  },
  {
    title: "Task Management",
    icon: TaskIcon,
    description:
      "A task management dashboard with task tracking, chat, notifications, calendar and profile sections.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/YasamanKarbalaiiH/Task-Management",
  },
  {
    title: "ToDo List",
    icon: TodoIcon,
    description:
      "A responsive task management application built while practicing JavaScript and Tailwind CSS.",
    technologies: ["JavaScript", "HTML", "Tailwind CSS"],
    github:
      "https://github.com/YasamanKarbalaiiH/JS-Exercises/tree/main/ToDo_List_Complete",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="mb-12">
          <p className="mb-3 text-primary">My Projects</p>

          <h2 className="section-title">Featured Projects</h2>

          <p className="section-description">
            A selection of projects that demonstrate my frontend development
            skills and practical experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group card overflow-hidden">
              <div className="flex h-40 items-center justify-center bg-surface-light">
                <Image
                  className="object-cover"
                  src={project.icon}
                  alt="Project Photo"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>

                <p className="mt-4 text-text-secondary leading-7">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-surface-light px-3 py-1 text-sm text-text-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-semibold text-primary transition-colors hover:text-primary-light"
                >
                  View on GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
