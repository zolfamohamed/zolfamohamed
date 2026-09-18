import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const experience = [
  {
    title: "Vulnerability Analyst & Penetration Tester",
    organization: "DEPI · July 2026 – Present",
    detail:
      "Developing practical knowledge in vulnerability assessment, penetration testing, network security, Linux, reconnaissance, and security testing methodologies.",
  },
  {
    title: "Full-Stack Web Development Training",
    organization: "National Telecommunication Institute (NTI) · 2025",
    detail:
      "Completed 120 hours of intensive training in HTML, CSS, JavaScript, PHP, Laravel, MySQL, and Bootstrap, including building and deploying full web applications.",
  },
  {
    title: "Entrepreneurship & Innovation Program",
    organization: "InnovEgypt · ITIDA · 2025",
    detail:
      "Completed 45 hours focused on entrepreneurship, innovation, business modeling, and design thinking, with a collaborative startup project.",
  },
];

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">

          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              My experience and training in Full-Stack Web Development and
              Cybersecurity.
            </p>
          </div>

          {/* Experience */}
          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Experience & Training" />
          </div>

          <div className="space-y-8 max-w-3xl mb-16">
            {experience.map((item) => (
              <article
                key={item.title}
                className="border-l-2 border-primary/40 pl-5"
              >
                <h2 className="font-mono text-sm font-medium text-foreground">
                  {item.title}
                </h2>

                <p className="mt-1 font-mono text-xs text-primary">
                  {item.organization}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          {/* Projects */}
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Projects" />
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(
                  index + 3,
                  4
                )}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}