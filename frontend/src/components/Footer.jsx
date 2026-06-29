import { Terminal, Linkedin, Mail } from "lucide-react";

const EMAIL = "anilkumarpatnana555@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/patnana-anil-kumar-662191182";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-[#1E293B] bg-[#0A0E17] py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-sm text-[#94A3B8]">
          <Terminal className="w-4 h-4 text-[#10B981]" />
          <span>anil.patnana</span>
          <span className="text-[#1E293B]">//</span>
          <span>devops_engineer</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            data-testid="footer-email"
            className="text-[#94A3B8] hover:text-[#10B981] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin"
            className="text-[#94A3B8] hover:text-[#10B981] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <div className="font-mono text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} Anil Kumar Patnana ·{" "}
          <span className="text-[#10B981]">all_systems_operational</span>
        </div>
      </div>
    </footer>
  );
}
