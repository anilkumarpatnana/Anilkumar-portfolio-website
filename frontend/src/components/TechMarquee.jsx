const STACK = [
  "AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible",
  "Linux", "Git", "GitHub Actions", "Prometheus", "Grafana", "Nginx",
  "Bash", "Python", "Helm", "ArgoCD", "CloudFormation", "EKS",
];

export default function TechMarquee() {
  const doubled = [...STACK, ...STACK];
  return (
    <section
      data-testid="tech-marquee"
      className="border-y border-[#1E293B] bg-[#0d1320]/40 py-6 overflow-hidden"
    >
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0E17] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0E17] to-transparent pointer-events-none" />
        <div className="marquee-track flex gap-10 whitespace-nowrap">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 font-mono text-sm text-[#94A3B8]"
            >
              <span className="text-[#10B981]">$</span>
              <span>{tech}</span>
              <span className="text-[#1E293B]">//</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
