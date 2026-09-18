import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const terminalLines = [
  {
    command: "analyze",
    output: "think. solve.",
  },
  {
    command: "secure",
    output: "protect. verify. ✓",
  },
  {
    command: "build",
    output: "clean & simple.",
  },
  {
    command: "test",
    output: "check. improve. ✓",
  },
  {
    command: "ready",
    output: "let's build.",
  },
];

export default function Home() {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const currentLine = terminalLines[lineIndex];

    if (!showOutput) {
      if (text.length < currentLine.command.length) {
        const timeout = setTimeout(() => {
          setText(currentLine.command.slice(0, text.length + 1));
        }, 90);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setShowOutput(true);
      }, 500);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (lineIndex < terminalLines.length - 1) {
        setLineIndex((prev) => prev + 1);
        setText("");
        setShowOutput(false);
      } else {
        setLineIndex(0);
        setText("");
        setShowOutput(false);
      }
    }, 1800);

    return () => clearTimeout(timeout);
  }, [text, lineIndex, showOutput]);

  const currentLine = terminalLines[lineIndex];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Side - Introduction */}
            <div className="max-w-3xl opacity-0 animate-fade-in-up">
              <CodeLabel className="mb-6">
                Full-Stack Developer · Assiut, Egypt
              </CodeLabel>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hi, I'm Zolfa Mohamed Mahmoud.
                <br />

                <span className="text-muted-foreground">
                  Full-Stack Developer with a Security Mindset
                </span>

                <TypingCursor />
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
                I build responsive, dynamic, and user-friendly web applications
                with modern front-end and back-end technologies. My growing
                Cybersecurity background helps me approach every web solution
                with security in mind.
              </p>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <Button
                  asChild
                  size="lg"
                  className="font-mono transition-transform hover:scale-105"
                >
                  <Link to="/experience">
                    View Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Animated Terminal */}
            <div className="w-full max-w-md opacity-0 animate-fade-in-up stagger-2">
              <div className="rounded-xl border border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden shadow-lg">

                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" />

                  <span className="ml-3 font-mono text-xs text-muted-foreground">
                    ~/zolfa/portfolio
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm leading-8 min-h-[360px]">

                  {/* Previous Lines */}
                  {terminalLines
                    .slice(0, lineIndex)
                    .map((line, index) => (
                      <div key={index} className="mb-2">
                        <div>
                          <span className="text-primary">$</span>{" "}
                          <span className="text-foreground">
                            {line.command}
                          </span>
                        </div>

                        <div className="text-muted-foreground pl-4">
                          &gt; {line.output}
                        </div>
                      </div>
                    ))}

                  {/* Current Line */}
                  <div>
                    <span className="text-primary">$</span>{" "}
                    <span className="text-foreground">
                      {text}
                    </span>

                    <span className="ml-1 text-primary animate-pulse">
                      █
                    </span>
                  </div>

                  {/* Current Output */}
                  {showOutput && (
                    <div className="text-muted-foreground pl-4">
                      &gt; {currentLine.output}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          {/* Services */}
          <section className="py-20">
            <div className="container">

              {/* Section Header */}
              <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
                <CodeDivider label="Services" />

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Services I can provide for modern, responsive, and security-minded
                  web applications.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid gap-6 md:grid-cols-2">

                {/* Full-Stack Development */}
                <div className="group p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 opacity-0 animate-fade-in-up stagger-1">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-2xl text-primary">
                      {"</>"}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      01
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    Front-End Development
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Designing and building responsive, interactive user interfaces using modern front-end technologies and component-based development..
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      HTML
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      CSS
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      JavaScript
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      PHP
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      Laravel
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      React
                    </span>

                  </div>
                </div>

                {/* Web Application Development */}
                <div className="group p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 opacity-0 animate-fade-in-up stagger-2">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-2xl text-primary">
                      {"{ }"}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      02
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    Backend & API Development
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Building server-side applications, backend logic, REST APIs, authentication, and database integrations for reliable web applications.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      PHP
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                     Python
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      Laravel
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      Flask
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      MySQL
                    </span>
                  </div>
                </div>
                {/* Database & Backend */}
                <div className="group p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 opacity-0 animate-fade-in-up stagger-4">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-2xl text-primary">
                      {"[ ]"}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      03
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    Database & Backend Solutions
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Designing structured databases, managing relationships between data, writing SQL queries, and integrating databases with web applications.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      MySQL
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      SQL
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      Database Design
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      CRUD
                    </span>
                  </div>
                </div>

                {/* Web Security */}
                <div className="group p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 opacity-0 animate-fade-in-up stagger-3">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-2xl text-primary">
                      {"<*>"}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      04
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    Web Security Assessment
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Assessing web applications for common security weaknesses and
                    identifying potential vulnerabilities with practical recommendations.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      Web Security
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      OWASP
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      Reconnaissance
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      Security Testing
                    </span>
                  </div>
                </div>

                

              </div>
            </div>
          </section>
          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link to="/experience" className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline">
              <span className="text-primary mr-2">
                {"//"}
              </span>

              View all projects

              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
}