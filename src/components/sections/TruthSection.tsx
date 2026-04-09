"use client";

import Image from "next/image";
import { truthContent } from "@/src/constants/truth";
import { useInView } from "@/src/hooks/useInView";

export default function TruthSection() {
  const { heading, body, image } = truthContent;
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        .anim-fade-up { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .anim-slide-left { opacity: 0; animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .anim-slide-right { opacity: 0; animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
      `}</style>
      <section className="pb-14 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="flex-1">
              {/* Heading → Neue Haas Grotesk 65 Medium */}
              <h2
                className={`${isInView ? "anim-slide-left" : "opacity-0"} delay-1 text-[#0d1b3e]`}
                style={{
                  fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                  fontWeight: 500, // 65 Medium
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: "48px",
                  color: "#434343",
                  letterSpacing: "0%",
                }}
              >
                {heading}
              </h2>

              {/* Body → Neue Haas Grotesk 55 Roman */}
              <p
                className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-2 mt-6 text-[#0d1b3e]`}
                style={{
                  fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                  fontWeight: 400, // 55 Roman
                  fontSize: "16px",
                  lineHeight: "28px",
                }}
              >
                {body}
              </p>
            </div>

            {/* ----- image */}

            <div
              className={`${isInView ? "anim-slide-right" : "opacity-0"} delay-1 flex-1 w-full`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={690}
                height={440}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
