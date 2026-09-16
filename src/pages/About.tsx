import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import profilePhoto from "@/assets/zolfa-mohamed-mahmoud-profile.jpeg.asset.json";

const skillGroups = [
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Bootstrap", "SQL", "MySQL"] },
  { title: "Programming", items: ["C++", "Java", "Python", "C#"] },
  { title: "Core Concepts", items: ["Object-Oriented Programming", "Data Structures & Algorithms", "Database Management"] },
  { title: "Cybersecurity", items: ["Vulnerability Assessment", "Web Penetration Testing Fundamentals", "Network Security Fundamentals", "Linux", "Reconnaissance", "Security Testing"] },
];

const experience = [
  {
    title: "Full-Stack Web Development Training",
    organization: "National Telecommunication Institute (NTI)",
    detail: "Completed 120 hours of intensive training in HTML, CSS, JavaScript, PHP, Laravel, MySQL, and Bootstrap, including building and deploying full web applications.",
  },
  {
    title: "Vulnerability Analyst & Penetration Tester",
    organization: "DEPI · Currently enrolled",
    detail: "Developing practical knowledge in vulnerability assessment, penetration testing, network security, Linux, reconnaissance, and security testing methodologies.",
  },
  {
    title: "Entrepreneurship & Innovation Program",
    organization: "InnovEgypt · ITIDA",
    detail: "Completed 45 hours focused on entrepreneurship, innovation, business modeling, and design thinking, with a collaborative startup project.",
  },
];

const certificates = [
  "Full Stack Web Development using PHP — NTI",
  "HackerRank SQL (Advanced) Certificate",
  "InnovEgypt Certificate of Acknowledgement — ITIDA",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]">
                <figure className="opacity-0 animate-fade-in-up stagger-1">
                  <div className="overflow-hidden rounded-md border border-border bg-card">
                    <img
                      src={profilePhoto.url}
                      alt="Zolfa Mohamed Mahmoud, Full-Stack Developer"
                      className="aspect-[4/5] w-full object-cover object-center"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
                    Zolfa Mohamed Mahmoud · Assiut, Egypt
                  </figcaption>
                </figure>

                <div className="space-y-6">
                  <div className="opacity-0 animate-fade-in-up stagger-1">
                    <p className="text-lg text-foreground leading-relaxed">
                      I'm <span className="text-primary font-medium">Zolfa Mohamed Mahmoud</span>, a Full-Stack Developer and Software Engineering student based in Assiut, Egypt. I enjoy turning ideas into complete, responsive, and user-friendly web applications.
                    </p>
                  </div>

                  <div className="opacity-0 animate-fade-in-up stagger-2">
                    <p className="text-muted-foreground leading-relaxed">
                      I work with modern front-end and back-end technologies across interfaces,
                      application logic, authentication, and databases. My training has given me
                      practical experience building and deploying complete web applications.
                    </p>
                  </div>

                  <div className="opacity-0 animate-fade-in-up stagger-3">
                    <p className="text-muted-foreground leading-relaxed">
                      Cybersecurity is an additional technical strength. My growing experience in
                      vulnerability assessment and penetration testing helps me think carefully
                      about security while designing and developing web solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Experience & Training" />
              </div>

              <div className="space-y-8 opacity-0 animate-fade-in-up stagger-4">
                {experience.map((item) => (
                  <article key={item.title} className="border-l-2 border-primary/40 pl-5">
                    <h2 className="font-mono text-sm font-medium text-foreground">{item.title}</h2>
                    <p className="mt-1 font-mono text-xs text-primary">{item.organization}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Education */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Education <span className="text-muted-foreground">*/</span>
                </h2>
                <p className="text-sm font-medium text-foreground">Bachelor's Degree in Software Engineering</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Faculty of Computers and Artificial Intelligence<br />Assiut National University</p>
                <p className="mt-3 font-mono text-xs text-primary">2023 – 2027 · GPA 3.78 / 4.0 (Excellent)</p>
              </div>

              {/* Skills */}
              <div className="space-y-6 opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Skills <span className="text-muted-foreground">*/</span>
                </h2>
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-2 text-sm font-medium text-foreground">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => <TechTag key={skill}>{skill}</TechTag>)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificates */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Certificates <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-3">
                  {certificates.map((certificate) => (
                    <li key={certificate} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">→</span>{certificate}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4"><span className="text-muted-foreground">/*</span> Strengths <span className="text-muted-foreground">*/</span></h2>
                <p className="text-sm leading-relaxed text-muted-foreground">Teamwork · Time Management · Adaptability · Quick Learning · Attention to Detail · Problem Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
