import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "testimonials", href: "#testimonials" },
  { label: "contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0A0E17]/80 border-b border-[#1E293B]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#top"
            data-testid="nav-logo"
            className="flex items-center gap-2 font-mono text-sm text-[#F8FAFC] hover:text-[#10B981] transition-colors"
          >
            <Terminal className="w-4 h-4 text-[#10B981]" />
            <span className="font-semibold">anil.patnana</span>
            <span className="text-[#94A3B8]">~$</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`nav-link-${link.label}`}
                className="group px-4 py-2 font-mono text-sm text-[#94A3B8] hover:text-[#10B981] transition-colors"
              >
                <span className="text-[#10B981]/60 mr-1">0{idx + 1}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="nav-cta-connect"
              className="ml-4 font-mono text-xs px-4 py-2 border border-[#10B981] text-[#10B981] rounded-md hover:bg-[#10B981]/10 transition-colors"
            >
              ./connect.sh
            </a>
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden text-[#F8FAFC] p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div data-testid="mobile-menu" className="md:hidden pb-4 flex flex-col gap-2 border-t border-[#1E293B] pt-3">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                data-testid={`mobile-nav-link-${link.label}`}
                className="font-mono text-sm text-[#94A3B8] hover:text-[#10B981] px-2 py-2"
              >
                <span className="text-[#10B981]/60 mr-1">0{idx + 1}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-nav-cta"
              className="mt-2 font-mono text-xs px-4 py-2 border border-[#10B981] text-[#10B981] rounded-md text-center"
            >
              ./connect.sh
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
