import {
  Cloud,
  Container,
  FileCode2,
  Activity,
  GitBranch,
  Terminal as TerminalIcon,
  Award,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const CORE_STACK = [
  {
    id: "aws",
    icon: Cloud,
    name: "AWS",
    tag: "cloud_platform",
    desc: "EC2, S3, VPC, IAM, RDS, ELB, CloudWatch, Route 53, ECR, ECS.",
  },
  {
    id: "linux",
    icon: TerminalIcon,
    name: "Linux",
    tag: "operating_system",
    desc: "Daily driver for production servers, scripting and troubleshooting.",
  },
  {
    id: "docker",
    icon: Container,
    name: "Docker",
    tag: "containerization",
    desc: "Building, shipping and running containerized application workloads.",
  },
  {
    id: "kubernetes",
    icon: Container,
    name: "Kubernetes",
    tag: "orchestration",
    desc: "Cluster ops on EKS and Red Hat OpenShift — deployments, pod health.",
  },
  {
    id: "terraform",
    icon: FileCode2,
    name: "Terraform",
    tag: "iac",
    desc: "Provisioning EC2, VPC, S3 with modules, state files and variables.",
  },
  {
    id: "jenkins",
    icon: GitBranch,
    name: "Jenkins",
    tag: "ci_cd",
    desc: "Automated build, test and deploy pipelines for reliable delivery.",
  },
];

const MONITORING_TOOLS = [
  "Grafana",
  "Datadog APM",
  "Dynatrace",
  "CloudWatch",
  "OpenSearch",
  "Heal",
  "ServiceNow",
  "Firebase Crashlytics",
];

const RESUME_URL =
  "https://customer-assets.emergentagent.com/job_anil-devops/artifacts/pvsjkl44_Anil_kumar_cloud_resume_MINFY.pdf";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Featured certification */}
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
            <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#10B981] bg-[#10B981]/10 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
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

        {/* Core stack grid */}
        <div className="mb-12">
          <div className="font-mono text-xs text-[#94A3B8] tracking-[0.2em] uppercase mb-5">
            // core_stack
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_STACK.map(({ id, icon: Icon, name, tag, desc }) => (
              <div
                key={id}
                data-testid={`skill-${id}`}
                className="group border border-[#1E293B] bg-[#111827] rounded-md p-6 card-glow transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-md border border-[#1E293B] bg-[#0d1320] flex items-center justify-center group-hover:border-[#10B981]/40 transition-colors">
                    <Icon className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#94A3B8] px-2 py-1 rounded border border-[#1E293B]">
                    {tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                  {name}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring & observability */}
        <div
          data-testid="skill-monitoring"
          className="border border-[#1E293B] bg-[#111827] rounded-md p-6 sm:p-8 card-glow"
        >
          <div className="flex items-start gap-5 mb-5 flex-col sm:flex-row sm:items-center">
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
          <div className="flex flex-wrap gap-2">
            {MONITORING_TOOLS.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded border border-[#1E293B] bg-[#0A0E17] text-[#94A3B8] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
