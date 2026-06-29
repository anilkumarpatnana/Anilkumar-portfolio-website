import { Code, Cloud, GitBranch, Cpu } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  { icon: Cloud, label: "Cloud Native", desc: "AWS-first infra design" },
  { icon: GitBranch, label: "CI/CD", desc: "Reliable delivery pipelines" },
  { icon: Cpu, label: "IaC", desc: "Terraform & CloudFormation" },
  { icon: Code, label: "Automation", desc: "Shell, Python, Ansible" },
];

const LINES = [
  { code: 'name: "Anil Kumar Patnana",', color: "text-[#F8FAFC]" },
  { code: 'role: "DevOps Engineer",', color: "text-[#F8FAFC]" },
  { code: 'focus: [', color: "text-[#94A3B8]" },
  { code: '  "ci_cd_pipelines",', color: "text-[#10B981]", indent: true },
  { code: '  "infrastructure_as_code",', color: "text-[#10B981]", indent: true },
  { code: '  "container_orchestration",', color: "text-[#10B981]", indent: true },
  { code: '  "cloud_security"', color: "text-[#10B981]", indent: true },
  { code: '],', color: "text-[#94A3B8]" },
  { code: 'mindset: "automate, secure, scale",', color: "text-[#38BDF8]" },
  { code: 'status: "always_learning"', color: "text-[#38BDF8]" },
];

export default function About() {
  const [pose, setPose] = useState("front");
  const portraitSrc =
    pose === "front" ? "/assets/anil_front.png" : "/assets/anil_side.png";
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <Reveal>
          <div className="mb-16">
            <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-3">
              01 / about_me
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-[#F8FAFC] max-w-3xl">
              DevOps Engineer engineering reliability,
              <br />
              <span className="text-[#10B981]">one pipeline at a time.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Portrait + Code editor stack */}
          <Reveal delay={0.1}>
          <div className="space-y-6">
            {/* Portrait */}
            <div
              data-testid="about-portrait"
              className="relative rounded-lg overflow-hidden border border-[#1E293B] bg-[#0d1320] group"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111827] border-b border-[#1E293B]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
                <span className="ml-2 font-mono text-xs text-[#94A3B8]">
                  ~/profile.jpg
                </span>
                <div className="ml-auto flex items-center gap-1 font-mono text-[10px]">
                  <button
                    type="button"
                    data-testid="pose-toggle-front"
                    onClick={() => setPose("front")}
                    className={`px-2 py-1 rounded transition-colors ${
                      pose === "front"
                        ? "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/40"
                        : "text-[#94A3B8] border border-[#1E293B] hover:text-[#F8FAFC]"
                    }`}
                  >
                    --front
                  </button>
                  <button
                    type="button"
                    data-testid="pose-toggle-side"
                    onClick={() => setPose("side")}
                    className={`px-2 py-1 rounded transition-colors ${
                      pose === "side"
                        ? "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/40"
                        : "text-[#94A3B8] border border-[#1E293B] hover:text-[#F8FAFC]"
                    }`}
                  >
                    --side
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={portraitSrc}
                  alt="Anil Kumar Patnana"
                  loading="lazy"
                  key={pose}
                  className="w-full h-auto object-cover aspect-square transition-all duration-500 group-hover:scale-[1.02]"
                />
                {/* Subtle dark/green tint overlay */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(16,185,129,0.08), transparent 50%, rgba(10,14,23,0.25))",
                  }}
                />
                {/* Corner accents */}
                <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[#10B981]" />
                <span className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-[#10B981]" />
                <span className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-[#10B981]" />
                <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[#10B981]" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/60 to-transparent">
                  <div className="font-mono text-xs text-[#10B981] mb-0.5">
                    ./identify --user
                  </div>
                  <div className="font-mono text-sm text-[#F8FAFC]">
                    Anil Kumar Patnana
                    <span className="text-[#94A3B8]">
                      {" "}// DevOps Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* YAML code card */}
            <div
              data-testid="about-code-card"
              className="rounded-lg overflow-hidden border border-[#1E293B] bg-[#0d1320] shadow-2xl"
            >
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#111827] border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-[#94A3B8]">
                    about.yaml
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#94A3B8]">YAML</span>
              </div>
              <div className="px-2 sm:px-4 py-4 font-mono text-sm overflow-x-auto">
                {LINES.map((line, i) => (
                  <div key={i} className="flex gap-4 hover:bg-[#111827]/50 px-2 py-0.5 rounded">
                    <span className="text-[#1E293B] select-none w-6 text-right shrink-0">
                      {i + 1}
                    </span>
                    <span className={line.color}>
                      {line.indent ? <span className="text-[#1E293B]">··</span> : null}
                      {line.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          {/* Narrative */}
          <Reveal delay={0.2}>
          <div>
            <p
              data-testid="about-narrative"
              className="text-base sm:text-lg text-[#94A3B8] leading-relaxed"
            >
              Hello! I'm <span className="text-[#F8FAFC] font-semibold">Anil Kumar Patnana</span>,
              a DevOps Engineer with hands-on experience in cloud infrastructure,
              automation, and application deployment. I enjoy building efficient
              CI/CD pipelines, managing containerized applications, and implementing
              Infrastructure as Code to simplify deployments.
            </p>
            <p className="mt-5 text-base text-[#94A3B8] leading-relaxed">
              Alongside DevOps work, I've spent time as an{" "}
              <span className="text-[#F8FAFC]">Observability Engineer</span> on
              a <span className="text-[#10B981]">banking domain</span> project —
              owning application performance monitoring, infra dashboards and
              proactive alerting to keep critical services reliable.
            </p>
            <p className="mt-5 text-base text-[#94A3B8] leading-relaxed">
              I'm continuously learning new technologies and committed to delivering
              <span className="text-[#10B981]"> secure</span>,
              <span className="text-[#10B981]"> scalable</span>, and
              <span className="text-[#10B981]"> high-performance</span> solutions
              that help teams release software faster and more reliably.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }, idx) => (
                <Reveal key={label} delay={0.3 + idx * 0.08}>
                <div
                  data-testid={`about-highlight-${label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  className="group border border-[#1E293B] rounded-md p-4 bg-[#111827]/50 hover:bg-[#111827] transition-all card-glow hover:-translate-y-1 duration-300 h-full"
                >
                  <Icon className="w-5 h-5 text-[#10B981] mb-3" />
                  <div className="font-mono text-sm text-[#F8FAFC] font-semibold">
                    {label}
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-1">{desc}</div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
