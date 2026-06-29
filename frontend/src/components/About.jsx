import { Code, Cloud, GitBranch, Cpu } from "lucide-react";

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
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Code editor card */}
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

          {/* Narrative */}
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
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  data-testid={`about-highlight-${label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  className="group border border-[#1E293B] rounded-md p-4 bg-[#111827]/50 hover:bg-[#111827] transition-colors card-glow"
                >
                  <Icon className="w-5 h-5 text-[#10B981] mb-3" />
                  <div className="font-mono text-sm text-[#F8FAFC] font-semibold">
                    {label}
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
