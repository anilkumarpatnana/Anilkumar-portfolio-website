import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    id: "ci-cd-pipeline",
    title: "End-to-End CI/CD Pipeline",
    description:
      "Built a fully automated Jenkins pipeline for a multi-service Node.js app with automated tests, SonarQube quality gates, Docker image builds, and zero-downtime deployments to AWS EKS.",
    tags: ["Jenkins", "Docker", "EKS", "SonarQube", "Trivy"],
    accent: "#10B981",
    span: "lg:col-span-2",
    metric: "↓ 65% deploy time",
  },
  {
    id: "aws-iac",
    title: "AWS Infrastructure as Code",
    description:
      "Modular Terraform stack provisioning VPC, EKS, RDS, ALB, IAM and observability in three environments with remote state in S3 and DynamoDB locking.",
    tags: ["Terraform", "AWS", "VPC", "EKS", "RDS"],
    accent: "#38BDF8",
    span: "",
    metric: "3 envs",
  },
  {
    id: "k8s-microservices",
    title: "Kubernetes Microservices Platform",
    description:
      "Containerised and orchestrated 6 microservices on EKS with Helm charts, horizontal pod autoscaling, ingress with TLS via cert-manager, and rolling deployments.",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Nginx", "Cert-Manager"],
    accent: "#10B981",
    span: "",
    metric: "99.99% uptime",
  },
  {
    id: "monitoring-stack",
    title: "Observability & Monitoring Stack",
    description:
      "Deployed Prometheus + Grafana + Loki on Kubernetes with alerting via Alertmanager to Slack. Custom dashboards for SLO tracking and golden signals.",
    tags: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
    accent: "#38BDF8",
    span: "lg:col-span-2",
    metric: "12 dashboards",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-3">
                02 / featured_projects
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-[#F8FAFC]">
                Engineering reliable systems,
                <br />
                <span className="text-[#10B981]">one pipeline at a time.</span>
              </h2>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
              Real-world DevOps work demonstrating practical experience with cloud
              platforms, automation tools, containerisation, and deployment
              pipelines.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 0.08}>
            <article
              data-testid={`project-card-${p.id}`}
              className={`group relative border border-[#1E293B] bg-[#111827] rounded-md p-6 sm:p-7 card-glow transition-all duration-300 hover:-translate-y-1 h-full ${p.span}`}
            >
              {/* Index + metric row */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#94A3B8]">
                  proj_{String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-mono text-xs px-2 py-1 rounded border"
                  style={{
                    color: p.accent,
                    borderColor: `${p.accent}33`,
                    backgroundColor: `${p.accent}0d`,
                  }}
                >
                  {p.metric}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#F8FAFC] mb-3 group-hover:text-[#10B981] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wide px-2 py-1 rounded border border-[#10B981]/20 bg-[#10B981]/5 text-[#10B981]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#1E293B]">
                <button
                  data-testid={`project-link-${p.id}`}
                  className="font-mono text-xs text-[#94A3B8] hover:text-[#10B981] flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  case_study
                </button>
                <button
                  data-testid={`project-repo-${p.id}`}
                  className="font-mono text-xs text-[#94A3B8] hover:text-[#10B981] flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  source
                </button>
                <ArrowUpRight className="w-4 h-4 ml-auto text-[#94A3B8] group-hover:text-[#10B981] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
