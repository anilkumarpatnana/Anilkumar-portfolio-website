import { GraduationCap, BookOpen } from "lucide-react";
import Reveal from "./Reveal";

const EDUCATION = [
  {
    degree: "B.Tech in Mechanical Engineering",
    school: "Miracle Engineering College — JNTU Kakinada",
    period: "2017 — 2021",
    score: "GPA 7.30",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (M.P.C)",
    school: "Sri Vidya Vahini Junior College, Palasa",
    period: "2015 — 2017",
    score: "75.2%",
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-3">
              05 / education
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-[#F8FAFC]">
              From mechanical to{" "}
              <span className="text-[#10B981]">cloud-native.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {EDUCATION.map((e, idx) => (
            <Reveal key={e.degree} delay={idx * 0.1}>
              <div
                data-testid={`education-${idx}`}
                className="group h-full border border-[#1E293B] bg-[#111827] rounded-md p-5 sm:p-6 card-glow transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-md border border-[#1E293B] bg-[#0d1320] flex items-center justify-center group-hover:border-[#10B981]/40 transition-colors">
                    <e.icon className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-[#F8FAFC] leading-snug">
                      {e.degree}
                    </h3>
                    <div className="text-sm text-[#94A3B8] mt-1">
                      {e.school}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] px-2 py-1 rounded border border-[#1E293B] text-[#94A3B8]">
                        {e.period}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-1 rounded border border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981]">
                        {e.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
