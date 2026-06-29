import { Terminal, Linkedin, Mail, Github, ArrowUp } from "lucide-react";

const EMAIL = "anilkumarpatnana555@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/patnana-anil-kumar-662191182";
const GITHUB = "https://github.com/";

const SOCIALS = [
  { href: `mailto:${EMAIL}`, icon: Mail, label: "Email", testid: "footer-email" },
  { href: LINKEDIN, icon: Linkedin, label: "LinkedIn", testid: "footer-linkedin", external: true },
  { href: GITHUB, icon: Github, label: "GitHub", testid: "footer-github", external: true },
];

const QUICK_LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-[#1E293B] bg-[#0A0E17] pt-14 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-mono text-sm text-[#F8FAFC] mb-3">
              <Terminal className="w-4 h-4 text-[#10B981]" />
              <span className="font-semibold">anil.patnana</span>
              <span className="text-[#94A3B8]">~$</span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xs">
              DevOps Engineer building reliable cloud infrastructure with AWS,
              Kubernetes, Terraform and observability tooling.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ href, icon: Icon, label, testid, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  data-testid={testid}
                  aria-label={label}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-[#1E293B] text-[#94A3B8] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-4">
              // navigation
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label}`}
                    className="font-mono text-sm text-[#94A3B8] hover:text-[#10B981] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact mini */}
          <div>
            <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-4">
              // get in touch
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="block font-mono text-sm text-[#F8FAFC] hover:text-[#10B981] transition-colors break-all"
            >
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-mono text-xs text-[#94A3B8] hover:text-[#10B981] transition-colors break-all"
            >
              linkedin.com/in/patnana-anil-kumar
            </a>
            <a
              href="#top"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-[#94A3B8] hover:text-[#10B981] transition-colors"
            >
              <ArrowUp className="w-3 h-3" />
              back to top
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Anil Kumar Patnana ·{" "}
            <span className="text-[#10B981]">all_systems_operational</span>
          </div>
          <div className="font-mono text-[10px] text-[#94A3B8]">
            built with React · Tailwind · framer-motion
          </div>
        </div>
      </div>
    </footer>
  );
}
