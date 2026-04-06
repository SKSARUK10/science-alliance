"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT } from "../../constants/hero";

export default function Hero() {
  return (
    <>
      {/* ── Animation keyframes injected once ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .anim-fade-up {
          opacity: 0;
          animation: fadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .anim-fade-in {
          opacity: 0;
          animation: fadeIn 1.1s ease forwards;
        }
        .delay-0  { animation-delay: 0.05s; }
        .delay-1  { animation-delay: 0.25s; }
        .delay-2  { animation-delay: 0.45s; }
        .delay-3  { animation-delay: 0.65s; }

        /* Button hover lift */
        .btn-lift {
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.2s ease;
        }
        .btn-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ height: "557px" }}
      >
        {/* ── Background Image — fades in ── */}
        <div className="anim-fade-in delay-0 absolute inset-0">
          <Image
            src={HERO_CONTENT.imageSrc}
            alt={HERO_CONTENT.imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* ── Dark overlay ── */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(5, 20, 50, 0.35)" }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Heading slides up first */}
          <h1
            className="anim-fade-up delay-1 text-white max-w-[780px] mb-5"
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 500,
              fontSize: "64px",
              lineHeight: "72px",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            {HERO_CONTENT.heading}
          </h1>

          {/* Subheading slides up second */}
          <p
            className="anim-fade-up delay-2 text-white/85 max-w-[480px] mb-8"
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            {HERO_CONTENT.subheading}
          </p>

          {/* Buttons slide up last */}
          <div className="anim-fade-up delay-3 flex items-center gap-1">
            {/* White Button */}
            <Link
              href={HERO_CONTENT.buttonHref}
              className="btn-lift flex items-center justify-center w-[162px] h-[52px] px-5 py-4 text-gray-900 bg-white rounded-lg shadow-sm hover:bg-gray-100"
              style={{
                fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              Support&nbsp;&nbsp;SALT
            </Link>

            {/* Arrow Button */}
            <Link
              href={HERO_CONTENT.buttonHref}
              className="btn-lift flex items-center justify-center w-[46px] h-[52px] rounded-lg bg-[#219CB5] hover:bg-[#1b859c]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
