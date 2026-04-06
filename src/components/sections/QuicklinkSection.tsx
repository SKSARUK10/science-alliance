"use client";

import Image from "next/image";
import Link from "next/link";
import { QUICK_LINK } from "../../constants/Quicklink";
import { useInView } from "../../hooks/useInView";

export default function QuicklinkSection() {
  const { heading, cards } = QUICK_LINK;
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .anim-fade-up { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .anim-slide-up { opacity: 0; animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .delay-0 { animation-delay: 0.1s; }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.5s; }
        .delay-3 { animation-delay: 0.7s; }
      `}</style>
      <section className="bg-white py-16">
        <div className="container-custom">
          {/* ── Heading ── */}
          <h2
            className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-0 mb-10`}
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "1.2",
              color: "#434343",
            }}
          >
            {heading}
          </h2>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {cards.map((card, index) => {
              const delayClass = `delay-${Math.min(index + 1, 3)}`;
              return (
                <div
                  key={card.id}
                  className={`${isInView ? "anim-slide-up" : "opacity-0"} ${delayClass} flex flex-col`}
                >
                  {/* ── Image ── */}
                  {/* ── Image ── */}
                  <div className="relative w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={384}
                      height={275}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>

                  {/* ── Content ── */}
                  <div className="mt-4 flex flex-col flex-1 gap-2">
                    <h3
                      style={{
                        fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "28px",
                        color: "#0d1b3e",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "24px",
                        color: "#6b7280",
                      }}
                    >
                      {card.body}
                    </p>
                    <Link
                      href={card.linkHref}
                      className="mt-auto"
                      style={{
                        fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#1C5D96",
                        textDecoration: "underline",
                      }}
                    >
                      {card.linkText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
