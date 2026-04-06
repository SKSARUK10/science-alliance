"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT } from "../../constants/hero";
import { useInView } from "../../hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      {/* ── Animation keyframes injected once ── */}
      <style>{`
        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(32px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(33, 156, 181, 0.2), 0 0 1px rgba(33, 156, 181, 0.4);
          }
          50% {
            box-shadow: 0 8px 25px rgba(33, 156, 181, 0.4), 0 0 1px rgba(33, 156, 181, 0.6);
          }
        }
        
        .anim-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .anim-fade-in {
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
        }
        
        .anim-slide-left {
          opacity: 0;
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .anim-slide-right {
          opacity: 0;
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .delay-0  { animation-delay: 0.1s; }
        .delay-1  { animation-delay: 0.3s; }
        .delay-2  { animation-delay: 0.5s; }
        .delay-3  { animation-delay: 0.7s; }

        /* Enhanced Button hover lift with glow */
        .btn-lift {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
        }
        
        .btn-lift:active {
          transform: translateY(-2px);
        }
        
        /* Secondary button (arrow) glow effect */
        .btn-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .btn-glow:hover {
          animation: none;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ height: "557px" }}
      >
        {/* ── Background Image — fades in ── */}
        <div
          className={`${isInView ? "anim-fade-in" : "opacity-0"} delay-0 absolute inset-0`}
        >
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
            className={`${isInView ? "anim-slide-left" : "opacity-0"} delay-1 text-white max-w-[780px] mb-5`}
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
            className={`${isInView ? "anim-slide-right" : "opacity-0"} delay-2 text-white/85 max-w-[480px] mb-8`}
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
          <div
            className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-3 flex items-center gap-1`}
          >
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
              className="btn-lift btn-glow flex items-center justify-center w-[46px] h-[52px] rounded-lg bg-[#219CB5] hover:bg-[#1b859c]"
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
    </div>
  );
}
