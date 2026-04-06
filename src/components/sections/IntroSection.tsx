"use client";

import { useInView } from "../../hooks/useInView";

export default function IntroSection() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
      `}</style>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Title → Neue Haas Grotesk 65 Medium */}
          <h2
            className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-1 text-gray-900`}
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 500, // 65 Medium
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Protecting Human Life
          </h2>

          {/* Description */}
          <div
            className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-2 mt-6 px-6 py-4 inline-block`}
          >
            <p
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 700, // 75 Bold
                fontSize: "28px",
                lineHeight: "40px",
                letterSpacing: "0%",
                textAlign: "center",
              }}
              className="text-gray-900"
            >
              {/* Blue span → 75 Bold */}
              <span style={{ color: "#1C5D96" }}>
                Science offers incredible promise for improving health and the
                human condition.
              </span>{" "}
              {/* "But..." → 55 Roman (400) */}
              <span
                style={{
                  fontWeight: 400, // 55 Roman
                }}
              >
                But science falls when research and advancements rely on the
                intentional harm and destruction of living human beings.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
