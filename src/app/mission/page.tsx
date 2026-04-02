"use client";

import Image from "next/image";
import { MISSION_CONTENT } from "../../constants/mission";
import WhyWeSection from "@/src/components/sections/whyweSection";
import CollaborationSection from "@/src/components/sections/CollaborationSection";
// Make sure casing matches exactly
import WhatSaltStandsForSection from "@/src/components/sections/WhatSaltStandsForSection";
import HowWeAchieveSection from "@/src/components/sections/HowWeAchieveSection";

export default function OurMisionPage() {
  const sectionButtonImage = MISSION_CONTENT.images[1];
  return (
    <>
      {/* First Section - Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "557px" }}
      >
        {/* ── Background Image ── */}
        <Image
          src={MISSION_CONTENT.imageSrc}
          alt={MISSION_CONTENT.imageAlt}
          fill
          className="object-cover object-center"
          priority
        />

        {/* ── Dark overlay ── */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(5, 20, 50, 0.35)" }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Image above title */}
          <div className="mb-4">
            <Image
              src={sectionButtonImage.src}
              alt={sectionButtonImage.alt}
              width={204.525}
              height={39.732}
              className="mx-auto"
              style={{
                width: "204.525px",
                height: "39.732px",
                borderRadius: "1000px",
                opacity: 1,
              }}
              priority={false}
            />
          </div>
          <h1
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 500,
              fontSize: "64px",
              lineHeight: "72px",
              letterSpacing: "0%",
              textAlign: "center",
            }}
            className="text-white max-w-[780px] mb-5"
          >
            {MISSION_CONTENT.title}
          </h1>

          <p
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
            }}
            className="text-white/85 max-w-[480px] mb-8"
          >
            {MISSION_CONTENT.subheading}
          </p>

          {/* ── Buttons ── */}
        </div>
      </section>

      {/* Second Section - Mission Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Title → Neue Haas Grotesk 65 Medium */}
          <h2
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
            }}
            className="text-gray-900"
          >
            Protecting Human Life
          </h2>

          {/* Description */}
          <div className="mt-6 px-6 py-4 inline-block">
            <p
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "40px",
                letterSpacing: "0%",
                textAlign: "center",
              }}
              className="text-gray-900"
            >
              {/* Blue span → 75 Bold */}
              <span style={{ color: "#1C5D96" }}>
                The Science Alliance for Life and Technology (SALT) is a new
                collaboration of expert scientists committed to guiding science
                with strong ethical standards.
              </span>{" "}
              {/* "But..." → 55 Roman (400) */}
              <span
                style={{
                  fontWeight: 400,
                }}
              >
                We work to shape technologies that protect life and serve human
                dignity. Our goal is to ensure that progress in fields like
                genetics, stem cell research, and AI remains both effective and
                morally responsible.
              </span>
            </p>
          </div>
        </div>
      </section>
      <WhyWeSection />
      <CollaborationSection />
      <WhatSaltStandsForSection />
      <HowWeAchieveSection />
    </>
  );
}
