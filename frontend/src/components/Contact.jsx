import { Mail, Linkedin, ArrowRight, Send, Download } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "anilkumarpatnana555@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/patnana-anil-kumar-662191182";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(16,185,129,0.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-4">
              04 / get_in_touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-bold text-[#F8FAFC]">
              Let's build something
              <br />
              <span className="text-[#10B981] glow-text">great together.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              Whether you have a project, a collaboration opportunity, or simply
              want to discuss DevOps and cloud technologies, I'd love to hear from
              you.
            </p>
          </div>
        </Reveal>

        {/* Terminal-style CTA card */}
        <Reveal delay={0.15}>
        <div
          data-testid="contact-card"
          className="rounded-lg border border-[#1E293B] bg-[#0d1320] overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111827] border-b border-[#1E293B]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            </div>
            <span className="ml-2 font-mono text-xs text-[#94A3B8]">
              $ ./connect.sh
            </span>
          </div>

          <div className="p-6 sm:p-10 font-mono text-sm">
            <div className="text-[#94A3B8]">
              <span className="text-[#10B981]">➜</span> sending handshake...
            </div>
            <div className="text-[#10B981] mt-1">[OK] channel_open</div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${EMAIL}?subject=Let's%20build%20something%20great`}
                data-testid="contact-cta-email"
                className="group flex items-center justify-between gap-3 bg-[#10B981] text-[#0A0E17] font-semibold px-5 py-4 rounded-md hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
              >
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Get In Touch
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-cta-linkedin"
                className="flex items-center justify-between gap-3 bg-transparent text-[#38BDF8] border border-[#38BDF8]/60 px-5 py-4 rounded-md hover:bg-[#38BDF8]/10 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E293B] space-y-3">
              <div className="flex items-center gap-3 text-[#94A3B8]">
                <Mail className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#38BDF8]">email:</span>
                <a
                  href={`mailto:${EMAIL}`}
                  data-testid="contact-email-link"
                  className="text-[#F8FAFC] hover:text-[#10B981] transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#94A3B8]">
                <Linkedin className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#38BDF8]">linkedin:</span>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin-link"
                  className="text-[#F8FAFC] hover:text-[#10B981] transition-colors break-all"
                >
                  /in/patnana-anil-kumar
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#94A3B8]">
                <Download className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#38BDF8]">resume:</span>
                <a
                  href="https://customer-assets.emergentagent.com/job_anil-devops/artifacts/pvsjkl44_Anil_kumar_cloud_resume_MINFY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-resume-link"
                  className="text-[#F8FAFC] hover:text-[#10B981] transition-colors"
                >
                  Anil_Kumar_Patnana_Resume.pdf
                </a>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
