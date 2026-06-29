import {
  Cloud,
  Container,
  FileCode2,
  Activity,
  Network,
  Database,
  Terminal as TerminalIcon,
  Award,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const SKILL_GROUPS = [
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud (AWS)",
    items: [
      "EC2", "S3", "EBS", "EFS", "IAM", "VPC",
      "ELB / ALB", "CloudWatch", "SNS", "ECR", "ECS", "Route 53",
    ],
  },
  {
    id: "containers",
    icon: Container,
    title: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Red Hat OpenShift"],
  },
  {
    id: "iac",
    icon: FileCode2,
    title: "Infrastructure as Code",
    items: ["Terraform", "Modules", "State files", "Variables"],
  },
  {
    id: "observability",
    icon: Activity,
    title: "Monitoring & Observability",
    items: [
      "Grafana", "Datadog APM", "Dynatrace",
      "CloudWatch", "OpenSearch", "Heal",
      "ServiceNow", "Firebase Crashlytics",
    ],
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking",
    items: [
      "VPC design", "VPN / Site-to-Site",
      "Route tables", "Security Groups",
      "NAT / Internet Gateways", "VPC Peering",
    ],
  },
  {
    id: "core",
    icon: TerminalIcon,
    title: "OS, Scripting & Databases",
    items: ["Linux", "Shell", "RDS (MySQL/Postgres)", "EBS Snapshots", "AMIs"],
  },
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
            Four years of hands-on experience across AWS cloud services,
            networking, observability and infrastructure automation.
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
            {/* Badge */}
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

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ id, icon: Icon, title, items }) => (
            <div
              key={id}
              data-testid={`skill-group-${id}`}
              className="group border border-[#1E293B] bg-[#111827] rounded-md p-6 card-glow transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-md border border-[#1E293B] bg-[#0d1320] flex items-center justify-center group-hover:border-[#10B981]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#10B981]" />
                </div>
                <span className="font-mono text-[10px] text-[#94A3B8]">
                  {String(items.length).padStart(2, "0")} items
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-4">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-2 py-1 rounded border border-[#1E293B] bg-[#0A0E17] text-[#94A3B8] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
