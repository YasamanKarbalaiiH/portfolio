const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "REST API"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="mb-12">
          <p className="mb-3 text-primary">My Skills</p>

          <h2 className="section-title">Technologies I work with</h2>

          <p className="section-description">
            Technologies and tools I have learned and used while building
            practical projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-6">
              <h3 className="mb-5 text-xl font-semibold text-text-primary">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-primary/30 bg-surface-light px-3 py-2 text-sm text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
