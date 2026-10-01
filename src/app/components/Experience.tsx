const experiences = [
  {
    role: "Front-End Developer Intern",
    company: "Danesh Negar Houshmand",
    location: "Rafsanjan, Iran",
    period: "1405",
    description:
      "Worked in the Front-End team and gained practical experience in developing and improving web applications.",
    responsibilities: [
      "Developing responsive user interfaces",
      "Working with React and Next.js",
      "Connecting frontend applications to APIs",
      "Fixing UI bugs and improving existing components",
      "Redesigning and improving user interfaces",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="mb-12">
          <p className="mb-3 text-primary">Experience</p>

          <h2 className="section-title">My professional experience</h2>

          <p className="section-description">
            My practical experience and professional development journey.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={experience.company} className="card p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-lg text-primary">
                    {experience.company}
                  </p>
                </div>

                <div className="text-text-secondary">
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-text-secondary leading-8">
                {experience.description}
              </p>

              <ul className="mt-6 space-y-3">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-text-secondary"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
