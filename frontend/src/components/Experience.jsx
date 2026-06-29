import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const EXPERIENCE = [
  {
    id: "tcs-systems",
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, IN",
    period: "Mar 2022 — Present",
    current: true,
    tags: ["AWS", "OpenShift", "Grafana", "OpenSearch", "Banking Domain"],
    highlights: [
      "24/7 production support for infrastructure monitoring across Linux/Windows systems, middleware and databases",
      "Application performance monitoring on a banking-domain project using Grafana, Heal dashboards and CloudWatch",
      "Monitored pod health on Red Hat OpenShift and analysed logs via OpenSearch for RCA",
      "Reduced Mean Time to Detect (MTTD) via proactive alerting and ServiceNow incident management",
    ],
  },
  {
    id: "tcs-aws-admin",
    role: "AWS Administrator / Observability Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, IN",
    period: "Mar 2022 — Feb 2024",
    current: false,
    tags: ["EC2", "VPC", "IAM", "RDS", "Terraform", "CloudWatch"],
    highlights: [
      "Managed AWS infrastructure: EC2, S3, VPC, IAM, RDS with secure multi-AZ deployments and automated backups",
      "Designed VPC architectures with public/private subnets, NAT/Internet Gateways and Site-to-Site VPN",
      "Provisioned infrastructure as code with Terraform (modules, state files, variables)",
      "Implemented Auto Scaling Groups, ELB/ALB and KMS encryption for high availability and security",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-3">
              02 / work_experience
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-[#F8FAFC] max-w-3xl">
              Four years building reliable systems{" "}
              <span className="text-[#10B981]">in production.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#10B981]/40 via-[#1E293B] to-[#1E293B]"
          />

          <div className="space-y-12">
            {EXPERIENCE.map((job, idx) => (
              <Reveal key={job.id} delay={idx * 0.1}>
                <article
                  data-testid={`experience-${job.id}`}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#10B981] bg-[#0A0E17] shadow-[0_0_0_4px_rgba(16,185,129,0.1)]">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-[#10B981]" />
                  </div>

                  <div className="border border-[#1E293B] bg-[#111827] rounded-md p-5 sm:p-6 card-glow transition-all hover:-translate-y-1 duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#F8FAFC]">
                          {job.role}
                        </h3>
                        <div className="font-mono text-sm text-[#10B981] mt-1">
                          @ {job.company}
                        </div>
                      </div>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-1 rounded border border-[#10B981]/40 bg-[#10B981]/5 text-[#10B981]">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] pulse-dot" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]" />
                          </span>
                          current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-[#94A3B8] mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {job.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-sm text-[#94A3B8] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1E293B]">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#10B981]/20 bg-[#10B981]/5 text-[#10B981]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
