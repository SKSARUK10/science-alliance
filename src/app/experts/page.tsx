"use client";

import Image from "next/image";
import { useState } from "react";
import { expertsContent } from "../../constants/experts";
import ExpertModal from "../../components/ui/ExpertModal";

type Expert = {
  id: number;
  image: string;
  name: string;
  title: string;
  bio?: string;
};

export default function OurExpertsPage() {
  const { heading, subheading, experts } = expertsContent;
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-20">
        {/* ── Page Heading ── */}
        <div className="text-center mb-14">
          <h1
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 500,
              letterSpacing: "0",
              textAlign: "center",
            }}
            className="text-heading text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-tight lg:leading-[72px]"
          >
            {heading}
          </h1>
          <p
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 400,
              letterSpacing: "0",
            }}
            className="mt-4 text-[#6b7280] max-w-lg mx-auto text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] leading-[28px] lg:leading-[35px]"
          >
            {subheading}
          </p>
        </div>

        {/* ── Experts Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="flex flex-col cursor-pointer group"
              onClick={() => setSelectedExpert(expert)}
            >
              {/* Photo with arrow button */}
              <div className="relative w-full">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={390}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                  priority={expert.id === 1}
                />
              
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: "32px",
                  letterSpacing: "0.7px",
                }}
                className="mt-4 text-heading"
              >
                {expert.name}
              </h3>

              {/* Title */}
              <p
                style={{
                  fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "21px",
                }}
                className="mt-1 text-[#6b7280]"
              >
                {expert.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <ExpertModal
        expert={selectedExpert}
        onClose={() => setSelectedExpert(null)}
      />
    </main>
  );
}
