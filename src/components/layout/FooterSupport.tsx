"use client";
import Link from "next/link";
import { HERO_CONTENT } from "../../constants/hero";
import Image from "next/image";

export default function FooterSupport() {
  return (
    <div className="relative overflow-hidden w-full h-[563px]">
      {/* Background Image */}
      <Image
        src="/footer-top.png"
        alt="Footer background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center z-10">
        <div className="max-w-3xl">
          {/* Heading → Neue Haas Grotesk 55 Roman 400 */}
          <h2
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 400, // 55 Roman
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "56px",
              letterSpacing: "0%",
            }}
            className="text-[#FDF5EC] mb-4"
          >
            Support Science that Protects and Values Every Human Life
          </h2>

          {/* Body → Neue Haas Grotesk 55 Roman 400 */}
          <p
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 400, // 55 Roman
              fontSize: "24px",
              lineHeight: "28px",
              letterSpacing: "0%",
            }}
            className="text-white/80 mb-8"
          >
            Join us in driving innovation that protects human life.
          </p>

          {/* Buttons with cross-hover */}
          <div className="flex items-center gap-2 group">
            {/* White Button → Aktiv Grotesk */}
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
                text-gray-900
                bg-white group-hover:bg-gray-100
                rounded-lg shadow-sm
                transition-colors duration-300
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
                bg-white group-hover:bg-gray-200
                transition-colors duration-300
              "
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
