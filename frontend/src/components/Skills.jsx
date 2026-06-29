import { Award, ShieldCheck, ExternalLink, Activity } from "lucide-react";
import Reveal from "./Reveal";

const ICON_BASE = "https://cdn.simpleicons.org";
const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const CORE_STACK = [
  {
    id: "aws",
    name: "AWS",
    tag: "cloud_platform",
    desc: "EC2, S3, VPC, IAM, RDS, ELB, CloudWatch, Route 53, ECR, ECS.",
    src: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  {
    id: "linux",
    name: "Linux",
    tag: "operating_system",
    desc: "Daily driver for production servers, scripting and troubleshooting.",
    src: `${ICON_BASE}/linux/FCC624`,
  },
  {
    id: "docker",
    name: "Docker",
    tag: "containerization",
    desc: "Building, shipping and running containerized application workloads.",
    src: `${ICON_BASE}/docker/2496ED`,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    tag: "orchestration",
    desc: "Cluster ops on EKS and Red Hat OpenShift — deployments, pod health.",
    src: `${ICON_BASE}/kubernetes/326CE5`,
  },
  {
    id: "terraform",
    name: "Terraform",
    tag: "iac",
    desc: "Provisioning EC2, VPC, S3 with modules, state files and variables.",
    src: `${ICON_BASE}/terraform/7B42BC`,
  },
  {
    id: "jenkins",
    name: "Jenkins",
    tag: "ci_cd",
    desc: "Automated build, test and deploy pipelines for reliable delivery.",
    src: `${ICON_BASE}/jenkins/D24939`,
  },
];

const MONITORING_TOOLS = [
  { name: "Grafana", src: `${ICON_BASE}/grafana/F46800` },
  { name: "Dynatrace", src: `${ICON_BASE}/dynatrace/1496FF` },
  {
    name: "CloudWatch",
    src: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  { name: "OpenSearch", src: `${ICON_BASE}/opensearch/005EB8` },
  { name: "Heal", src: null, fallback: "HE", color: "10B981" },
  { name: "Firebase", src: `${ICON_BASE}/firebase/DD2C00` },
];

const RESUME_URL =
  "https://customer-assets.emergentagent.com/job_anil-devops/artifacts/pvsjkl44_Anil_kumar_cloud_resume_MINFY.pdf";

function LogoTile({ src, fallback, color, name, size = 48 }) {
  if (!src) {
    return (
      <div
        className="flex items-center justify-center font-mono font-bold text-lg"
        style={{ width: size, height: size, color: `#${color || "10B981"}` }}
      >
        {fallback || name.slice(0, 2).toUpperCase()}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="object-contain"
    />
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-3">
                03 / skills_and_certifications
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-[#F8FAFC] max-w-3xl">
                The toolchain I work with{" "}
                <span className="text-[#10B981]">every day.</span>
              </h2>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
              Four years of hands-on experience across AWS, containerisation,
              infrastructure automation and observability.
            </p>
          </div>
        </Reveal>

        {/* Featured certification */}
        <Reveal delay={0.1}>
          <div
            data-testid="certification-aws-ccp"
            className="mb-12 relative overflow-hidden border border-[#10B981]/40 rounded-lg bg-[#111827] card-glow"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 40% 80% at 100% 50%, rgba(16,185,129,0.12), transparent 60%)",
              }}
            />
            <div className="relative grid sm:grid-cols-[auto_1fr_auto] items-center gap-6 p-6 sm:p-8">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#10B981] bg-[#10B981]/10 shadow-[0_0_30px_rgba(16,185,129,0.3)] float-y">
                <Award className="w-9 h-9 text-[#10B981]" />
              </div>

              <div>
                <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-1.5 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> certified
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F8FAFC]">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-sm text-[#94A3B8] mt-1.5">
                  Foundational AWS certification covering cloud concepts,
                  security, architecture, pricing and support.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] tracking-wide px-2 py-1 rounded border border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981]">
                    Amazon Web Services
                  </span>
                  <span className="font-mono text-[10px] tracking-wide px-2 py-1 rounded border border-[#38BDF8]/30 bg-[#38BDF8]/5 text-[#38BDF8]">
                    CLF-C02
                  </span>
                </div>
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="skills-resume-link"
                className="hidden sm:inline-flex items-center gap-2 font-mono text-xs px-4 py-2.5 border border-[#10B981] text-[#10B981] rounded-md hover:bg-[#10B981]/10 transition-colors whitespace-nowrap"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                view_resume.pdf
              </a>
            </div>
          </div>
        </Reveal>

        {/* Core stack grid - logo tiles */}
        <div className="mb-12">
          <Reveal delay={0.05}>
            <div className="font-mono text-xs text-[#94A3B8] tracking-[0.2em] uppercase mb-5">
              // core_stack
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_STACK.map((s, idx) => (
              <Reveal key={s.id} delay={0.05 * idx}>
                <div
                  data-testid={`skill-${s.id}`}
                  className="group relative border border-[#1E293B] bg-[#111827] rounded-md p-6 card-glow transition-all overflow-hidden h-full"
                >
                  {/* Faint logo watermark */}
                  <div
                    className="absolute -right-6 -bottom-6 opacity-[0.06] pointer-events-none transition-opacity group-hover:opacity-[0.12]"
                    aria-hidden="true"
                  >
                    <LogoTile src={s.src} name={s.name} size={140} />
                  </div>

                  <div className="relative flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-md border border-[#1E293B] bg-[#0d1320] flex items-center justify-center group-hover:border-[#10B981]/40 group-hover:scale-110 transition-all duration-300">
                      <LogoTile src={s.src} name={s.name} size={32} />
                    </div>
                    <span className="font-mono text-[10px] text-[#94A3B8] px-2 py-1 rounded border border-[#1E293B]">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="relative text-lg font-semibold text-[#F8FAFC] mb-2">
                    {s.name}
                  </h3>
                  <p className="relative text-sm text-[#94A3B8] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Monitoring & observability */}
        <Reveal delay={0.1}>
          <div
            data-testid="skill-monitoring"
            className="border border-[#1E293B] bg-[#111827] rounded-md p-6 sm:p-8 card-glow"
          >
            <div className="flex items-start gap-5 mb-6 flex-col sm:flex-row sm:items-center">
              <div className="w-11 h-11 rounded-md border border-[#1E293B] bg-[#0d1320] flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#10B981]" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs text-[#94A3B8] tracking-[0.2em] uppercase mb-1">
                  // monitoring_and_observability
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">
                  Application performance monitoring & infra observability
                </h3>
              </div>
              <span className="font-mono text-[10px] text-[#10B981] px-2 py-1 rounded border border-[#10B981]/30 bg-[#10B981]/5">
                {String(MONITORING_TOOLS.length).padStart(2, "0")} tools
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {MONITORING_TOOLS.map((t) => (
                <div
                  key={t.name}
                  data-testid={`monitoring-tool-${t.name.toLowerCase()}`}
                  className="group flex flex-col items-center justify-center gap-3 py-5 px-3 rounded-md border border-[#1E293B] bg-[#0A0E17] hover:border-[#10B981]/40 hover:bg-[#111827] transition-all"
                >
                  <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <LogoTile src={t.src} fallback={t.fallback} color={t.color} name={t.name} size={32} />
                  </div>
                  <span className="font-mono text-xs text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors text-center">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
