import { CheckCircle2 } from "lucide-react";

const LOGS = [
  {
    id: "log-1",
    level: "SUCCESS",
    user: "Sneha Reddy",
    role: "Senior Software Engineer",
    timestamp: "2025-10-12T09:24:11Z",
    quote:
      "Anil shipped a CI/CD pipeline that cut our deploy time by more than half. He's meticulous, communicates clearly, and treats reliability as a first-class concern.",
  },
  {
    id: "log-2",
    level: "SUCCESS",
    user: "Karthik Menon",
    role: "Tech Lead, Cloud Platform",
    timestamp: "2025-09-03T14:01:42Z",
    quote:
      "Solid grasp of Terraform and Kubernetes. He owned our EKS migration end-to-end and the rollout was uneventful — exactly what you want in infra work.",
  },
  {
    id: "log-3",
    level: "SUCCESS",
    user: "Priya Iyer",
    role: "Engineering Manager",
    timestamp: "2025-07-21T18:46:08Z",
    quote:
      "A dependable engineer who takes initiative on automation and monitoring. Our on-call load dropped noticeably after his observability overhaul.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#10B981] tracking-[0.2em] uppercase mb-3">
            03 / what_people_say
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-[#F8FAFC] max-w-3xl">
            Logs from people I've{" "}
            <span className="text-[#10B981]">shipped with.</span>
          </h2>
        </div>

        <div
          data-testid="testimonials-log"
          className="rounded-lg overflow-hidden border border-[#1E293B] bg-[#0d1320] shadow-2xl"
        >
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#111827] border-b border-[#1E293B]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>
              <span className="ml-2 font-mono text-xs text-[#94A3B8]">
                $ tail -f feedback.log
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#94A3B8] hidden sm:inline">
              3 entries
            </span>
          </div>

          <div className="divide-y divide-[#1E293B]">
            {LOGS.map((log, i) => (
              <div
                key={log.id}
                data-testid={`testimonial-${log.id}`}
                className="px-5 sm:px-7 py-7 hover:bg-[#111827]/50 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs mb-4">
                  <span className="text-[#94A3B8]">[{log.timestamp}]</span>
                  <span className="inline-flex items-center gap-1 text-[#10B981]">
                    <CheckCircle2 className="w-3 h-3" />
                    {log.level}
                  </span>
                  <span className="text-[#38BDF8]">
                    user="{log.user.toLowerCase().replace(/\s+/g, "_")}"
                  </span>
                  <span className="text-[#94A3B8]">
                    cmd=<span className="text-[#F8FAFC]">./feedback.sh</span>
                  </span>
                </div>
                <blockquote className="text-base sm:text-lg text-[#F8FAFC] leading-relaxed mb-4">
                  "{log.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center font-mono text-sm font-semibold border border-[#1E293B]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(56,189,248,0.1))",
                      color: i % 2 === 0 ? "#10B981" : "#38BDF8",
                    }}
                  >
                    {log.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm text-[#F8FAFC] font-medium">
                      {log.user}
                    </div>
                    <div className="font-mono text-xs text-[#94A3B8]">
                      {log.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="px-5 sm:px-7 py-4 font-mono text-xs text-[#94A3B8]">
              <span className="text-[#10B981]">➜</span> _<span className="cursor-blink h-[1em] align-middle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
