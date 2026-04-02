// components/sections/WhatSaltStandsForSection.tsx

import Image from "next/image";
import { WHAT_SALT_STANDS_FOR } from "../../constants/whatSaltStandsFor";

export default function WhatSaltStandsForSection() {
  const { heading, body, items } = WHAT_SALT_STANDS_FOR;

  return (
    <section className="relative w-full">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/height-blue.svg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* ── Center Vertical Line ── */}
      <div
        className="absolute top-0 bottom-0 hidden lg:block"
        style={{
          left: "50%",
          width: "1px",
          backgroundColor: "#D0D0D026",
        }}
      />

      {/* ── Content ── */}
      <div className="container-custom py-20">
        <div className="flex flex-col lg:flex-row lg:gap-0 gap-12">
          {/* ── Left: Sticky Heading ── */}
          <div className="lg:w-1/2 lg:sticky lg:top-24 lg:self-start lg:pr-20">
            <h2
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: "1.2",
                color: "#ffffff",
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "28px",
                color: "rgba(255,255,255,0.70)",
              }}
              className="mt-4"
            >
              {body}
            </p>
          </div>

      
          {/* ── Right: Items List ── */}
          <div className="lg:w-1/2 flex flex-col lg:-mt-20">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative"
                style={{
                  paddingTop: "40px",
                  paddingBottom: "40px",
                  paddingLeft: "72px",
                  paddingRight: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* ── Full width bottom border line ── */}
                <div
                  className="absolute bottom-0 left-0 hidden lg:block"
                  style={{
                    height: "1px",
                    backgroundColor: "#D0D0D026",
                    width: "calc(100% + ((100vw - 100%) / 2) + 24px)",
                  }}
                />

                <h3
                  style={{
                    fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "26px",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
