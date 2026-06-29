import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Activity, Download } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const PHRASES = [
  "Building Scalable Cloud Infrastructure",
  "Automating CI/CD Pipelines",
  "Orchestrating Containers at Scale",
  "Engineering DevOps Excellence",
];

function useTypewriter(phrases, typeSpeed = 70, holdMs = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((index + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? typeSpeed / 2 : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typeSpeed, holdMs]);

  return text;
}

const RESUME_URL =
  "https://customer-assets.emergentagent.com/job_anil-devops/artifacts/pvsjkl44_Anil_kumar_cloud_resume_MINFY.pdf";

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Aurora glow blobs */}
      <div
        className="absolute aurora pointer-events-none"
        style={{
          top: "10%",
          left: "20%",
          width: "40rem",
          height: "40rem",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.15), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute aurora pointer-events-none"
        style={{
          top: "30%",
          right: "10%",
          width: "30rem",
          height: "30rem",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.10), transparent 60%)",
          filter: "blur(40px)",
          animationDelay: "-9s",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Status pill */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E293B] bg-[#111827]/60 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] pulse-dot" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span data-testid="hero-status" className="font-mono text-xs text-[#94A3B8]">
                status: <span className="text-[#10B981]">available_for_work</span>
              </span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-[#94A3B8]">
              <MapPin className="w-3 h-3" />
              <span>region: ap-south-1 · Hyderabad</span>
            </div>
          </div>
        </Reveal>

        {/* Hello intro */}
        <Reveal delay={0.05}>
          <div className="font-mono text-sm text-[#10B981] mb-3">
            <span className="text-[#94A3B8]">{"// "}</span>hello_world();{" "}
            <span className="text-[#94A3B8]">my name is</span>
          </div>
        </Reveal>

        {/* MASSIVE NAME */}
        <Reveal delay={0.1} y={40} duration={0.9}>
          <h1
            data-testid="hero-name"
            className="font-bold tracking-tighter leading-[0.85] mb-6"
          >
            <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#F8FAFC]">
              ANIL KUMAR
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl name-shimmer">
              PATNANA.
            </span>
          </h1>
        </Reveal>

        {/* Role line */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-3 mb-10 font-mono text-sm sm:text-base">
            <span className="px-3 py-1 rounded border border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981]">
              DevOps Engineer
            </span>
            <span className="text-[#1E293B]">·</span>
            <span className="px-3 py-1 rounded border border-[#38BDF8]/30 bg-[#38BDF8]/5 text-[#38BDF8]">
              AWS Cloud Engineer
            </span>
            <span className="text-[#1E293B]">·</span>
            <span className="px-3 py-1 rounded border border-[#1E293B] bg-[#111827] text-[#94A3B8]">
              Observability Engineer
            </span>
          </div>
        </Reveal>

        {/* Terminal window */}
        <Reveal delay={0.3}>
          <div
            data-testid="hero-terminal"
            className="mb-10 rounded-lg overflow-hidden border border-[#1E293B] bg-[#0d1320]/90 backdrop-blur shadow-2xl"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111827] border-b border-[#1E293B]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
              </div>
              <span className="ml-2 font-mono text-xs text-[#94A3B8]">
                ~/anil-patnana — zsh — 80×24
              </span>
              <span className="ml-auto font-mono text-[10px] text-[#94A3B8] flex items-center gap-1">
                <Activity className="w-3 h-3 text-[#10B981]" /> uptime: 99.99%
              </span>
            </div>
            <div className="px-5 py-6 font-mono text-sm sm:text-base">
              <div className="text-[#94A3B8]">
                <span className="text-[#10B981]">➜</span>{" "}
                <span className="text-[#38BDF8]">~/portfolio</span>{" "}
                <span className="text-[#F8FAFC]">cat mission.txt</span>
              </div>
              <div className="mt-1 text-[#F8FAFC] min-h-[1.5em]">
                <span data-testid="hero-typed">{typed}</span>
                <span className="cursor-blink h-[1em] align-middle" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.4}>
          <p
            data-testid="hero-description"
            className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed"
          >
            I'm a DevOps Engineer passionate about automating software delivery,
            optimizing cloud infrastructure, and building reliable CI/CD pipelines
            using{" "}
            <span className="text-[#F8FAFC] font-mono text-sm">AWS</span>,{" "}
            <span className="text-[#F8FAFC] font-mono text-sm">Docker</span>,{" "}
            <span className="text-[#F8FAFC] font-mono text-sm">Kubernetes</span>,{" "}
            <span className="text-[#F8FAFC] font-mono text-sm">Jenkins</span>,{" "}
            <span className="text-[#F8FAFC] font-mono text-sm">Terraform</span>{" "}
            and <span className="text-[#F8FAFC] font-mono text-sm">Linux</span>.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="#projects"
              data-testid="hero-cta-projects"
              className="group inline-flex items-center justify-center gap-2 bg-[#10B981] text-[#0A0E17] font-semibold px-6 py-3 rounded-md hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-resume"
              className="group inline-flex items-center justify-center gap-2 bg-transparent text-[#F8FAFC] border border-[#1E293B] hover:border-[#10B981] hover:text-[#10B981] px-6 py-3 rounded-md transition-colors font-mono text-sm"
            >
              <Download className="w-4 h-4" />
              download_resume.pdf
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-connect"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#10B981] border border-[#10B981] px-6 py-3 rounded-md hover:bg-[#10B981]/10 transition-colors font-mono text-sm"
            >
              ./let-us-connect.sh
            </a>
          </div>
        </Reveal>

        {/* Quick stats with count-up */}
        <Reveal delay={0.6}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1E293B] border border-[#1E293B] rounded-md overflow-hidden">
            <Stat testid="hero-stat-experience" label="years_experience">
              <CountUp end={4} suffix="+" />
            </Stat>
            <Stat testid="hero-stat-uptime" label="uptime_sla">
              <CountUp end={99.99} decimals={2} suffix="%" />
            </Stat>
            <Stat testid="hero-stat-incidents" label="incidents_resolved">
              <CountUp end={500} suffix="+" duration={2000} />
            </Stat>
            <Stat testid="hero-stat-certs" label="aws_certified">
              <span>AWS</span>
            </Stat>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ children, label, testid }) {
  return (
    <div
      data-testid={testid}
      className="bg-[#0A0E17] px-4 py-5 flex flex-col gap-1 hover:bg-[#111827] transition-colors"
    >
      <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">
        {label}
      </span>
      <span className="font-mono text-xl sm:text-2xl text-[#10B981] font-semibold">
        {children}
      </span>
    </div>
  );
}
