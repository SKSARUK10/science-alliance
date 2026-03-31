"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT } from "../../constants/hero";
//import hero from "../../../public/hero-bg.png"
export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "557px" }}
    >
      {/* ── Background Image ── */}
      <Image
        src={HERO_CONTENT.imageSrc}
        alt={HERO_CONTENT.imageAlt}
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
        <h1
          style={{
            fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
            fontWeight: 500, // 65 Medium
            fontSize: "64px",
            lineHeight: "72px",
            letterSpacing: "0%",
            textAlign: "center",
          }}
          className="text-white max-w-[780px] mb-5"
        >
          {HERO_CONTENT.heading}
        </h1>

        <p
          style={{
            fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
            fontWeight: 400, // 55 Roman
            fontSize: "18px",
            lineHeight: "28px",
          }}
          className="text-white/85 max-w-[480px] mb-8"
        >
          {HERO_CONTENT.subheading}
        </p>

        {/* ── Buttons ── */}
        <div className="flex items-center gap-1">
          {/* White Button */}
          <Link
            href={HERO_CONTENT.buttonHref}
            style={{
              fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "28px",
            }}
            className="
    flex items-center justify-center
    w-[162px] h-[52px]
    px-5 py-4
    text-gray-900 bg-white
    rounded-lg shadow-sm
    hover:bg-gray-100 transition
  "
          >
            Support&nbsp;&nbsp;SALT
          </Link>

          {/* Arrow Button */}
          <Link
            href={HERO_CONTENT.buttonHref}
            className="
      flex items-center justify-center
      w-[46px] h-[52px]
      rounded-lg
      bg-[#219CB5]
      hover:bg-[#1b859c]
      transition
    "
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
  );
}
