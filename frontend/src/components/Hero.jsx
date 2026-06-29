import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Activity } from "lucide-react";

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

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(16,185,129,0.12), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Status pill */}
        <div className="flex items-center gap-3 mb-8 reveal-up">
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
            <span>region: ap-south-1</span>
          </div>
        </div>

        {/* Terminal window */}
        <div
          data-testid="hero-terminal"
          className="mb-10 rounded-lg overflow-hidden border border-[#1E293B] bg-[#0d1320]/90 backdrop-blur shadow-2xl reveal-up delay-100"
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
              <span className="text-[#F8FAFC]">whoami</span>
            </div>
            <div className="mt-1 text-[#F8FAFC]">
              anil_kumar_patnana — DevOps Engineer
            </div>
            <div className="mt-3 text-[#94A3B8]">
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

        {/* Main headline */}
        <h1
          data-testid="hero-headline"
          className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-bold text-[#F8FAFC] max-w-4xl reveal-up delay-200"
        >
          Building scalable cloud infrastructure with{" "}
          <span className="text-[#10B981] glow-text">DevOps excellence.</span>
        </h1>

        {/* Description */}
        <p
          data-testid="hero-description"
          className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed reveal-up delay-300"
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

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal-up delay-400">
          <a
            href="#projects"
            data-testid="hero-cta-projects"
            className="group inline-flex items-center justify-center gap-2 bg-[#10B981] text-[#0A0E17] font-semibold px-6 py-3 rounded-md hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
          >
            View My Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            data-testid="hero-cta-connect"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[#10B981] border border-[#10B981] px-6 py-3 rounded-md hover:bg-[#10B981]/10 transition-colors font-mono text-sm"
          >
            ./let-us-connect.sh
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1E293B] border border-[#1E293B] rounded-md overflow-hidden reveal-up delay-500">
          {[
            { k: "deployments", v: "200+" },
            { k: "uptime_sla", v: "99.99%" },
            { k: "pipelines", v: "50+" },
            { k: "cloud_certs", v: "AWS" },
          ].map((s) => (
            <div
              key={s.k}
              data-testid={`hero-stat-${s.k}`}
              className="bg-[#0A0E17] px-4 py-5 flex flex-col gap-1"
            >
              <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">
                {s.k}
              </span>
              <span className="font-mono text-xl sm:text-2xl text-[#10B981] font-semibold">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
