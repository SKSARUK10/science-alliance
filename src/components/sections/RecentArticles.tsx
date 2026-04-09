"use client";

import Image from "next/image";
import { useInView } from "../../hooks/useInView";
import { RECENT_ARTICLES } from "@/src/constants/RecentArtciles";

export default function RecentArticles() {
  const { heading, cards } = RECENT_ARTICLES;
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      <style>{`
        @keyframes fadeUp { 
          from { opacity: 0; transform: translateY(32px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }

        .anim-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .anim-slide-up {
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .delay-0 { animation-delay: 0.1s; }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.5s; }
        .delay-3 { animation-delay: 0.7s; }
      `}</style>

      <section className="bg-white pb-16">
        <div className="container-custom">
          {/* Heading */}
          <div
            className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-0 mb-7 flex items-center justify-between`}
          >
            {/* Left: Heading */}
            <h2
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: "40px",
                color: "#434343",
              }}
            >
              {heading}
            </h2>

            {/* Right: Read More */}
            <a
              href="/articles" // 👉 change to your actual page
              style={{
                fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "28px",
                textDecoration: "underline",
              }}
              className="text-[#00000] hover:opacity-80 transition"
            >
              Read More
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
            {cards.map((card, index) => {
              const delayClass = `delay-${Math.min(index + 1, 3)}`;

              return (
                <div
                  key={card.id}
                  className={`${isInView ? "anim-slide-up" : "opacity-0"} ${delayClass} flex flex-col`}
                >
                  {/* Image */}
                  <div className="relative w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={284}
                      height={193}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-4 flex flex-col gap-2">
                    <h3
                      style={{
                        fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "32px",
                        color: "#000000",
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
                        color: "#313030",
                      }}
                    >
                      {card.body}
                    </p>
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
