import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/zolfamohamed", icon: Github, label: "GitHub", handle: "@zolfamohamed" },
  { href: "https://www.linkedin.com/in/zolfa-mohamed-mahmoud/", icon: Linkedin, label: "LinkedIn", handle: "/in/zolfa-mohamed-mahmoud" },
  { href: "mailto:zolfafarghaly@gmail.com", icon: Mail, label: "Email", handle: "zolfafarghaly@gmail.com" },
];

export default function Contact() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              I'm open to Full-Stack Developer opportunities, internships,
              freelance projects, and junior developer roles.
            </p>
          </div>

          <div className="max-w-3xl">
            <CodeDivider label="Connect" />
              
              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.handle}
                      </p>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">/*</span> Availability <span className="text-primary">*/</span>
                </p>
                <p className="text-sm text-foreground">
                  Based in Assiut, Egypt. Available for opportunities, internships,
                  freelance work, and junior developer positions.
                </p>
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
