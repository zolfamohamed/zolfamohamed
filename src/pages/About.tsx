import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import profilePhoto from "@/assets/zolfa-mohamed-mahmoud-profile.jpeg";

const skillGroups = [
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "PHP","Python", "Laravel","Flask","React", "Bootstrap", "SQL", "MySQL"] },
  { title: "Programming", items: ["C++", "C#", "Java", "Python","PHP"] },
  { title: "Core Concepts", items: ["Object-Oriented Programming", "Data Structures & Algorithms", "Database Management"] },
  { title: "Cybersecurity", items: ["Vulnerability Assessment", "Web Penetration Testing Fundamentals", "Network Security Fundamentals", "Linux", "Reconnaissance", "Security Testing"] },
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
                  <div className="relative mx-auto w-full max-w-[260px]">

                    {/* Decorative animated frame */}
                    <div className="absolute -inset-3 rounded-xl border border-primary/20">
                      <span className="absolute -top-px left-8 h-[2px] w-12 bg-primary animate-pulse" />
                      <span className="absolute -bottom-px right-8 h-[2px] w-12 bg-primary animate-pulse" />
                    </div>

                    {/* Image */}
                    <div className="relative rounded-lg border border-border bg-card p-2">
                      <div className="overflow-hidden rounded-md">
                        <img
                          src={profilePhoto}
                          alt="Zolfa Mohamed Mahmoud, Full-Stack Developer"
                          className="aspect-[4/5] w-full object-cover object-center"
                        />
                      </div>
                    </div>

                  </div>

                  <figcaption className="mt-10 text-center font-mono text-xs text-muted-foreground">
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
