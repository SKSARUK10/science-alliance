"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAVBAR_LINKS, DONATE_URL } from "../../constants/navbar";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        style={{ backgroundColor: "#0A1D2D" }}
        className="w-full sticky top-0 z-50"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between h-[80px] md:h-[100px]">
          {/* ── Left: Logo ── */}
          <Link href="/" className="shrink-0">
            <Image
              src="/hero-1.svg"
              alt="SALT Science Alliance Logo"
              width={130}
              height={50}
              className="object-contain w-auto h-auto"
              priority
            />
          </Link>

          {/* ── Center: Nav Links (Desktop) ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVBAR_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    text-[15px] font-medium transition-colors duration-200
                    ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Right: Donate Button (Desktop) ── */}
          <div className="hidden md:flex items-center gap-1">
            {/* Donate button */}
            <Link
              href={DONATE_URL}
              className="
              flex items-center justify-center
              w-[102px] h-[52px]
              px-[20px] py-[16px]
              text-[18px] font-semibold text-white
              rounded-l-lg
              transition-colors duration-200"
              style={{
                backgroundColor: "#1e3a6e",
                fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "28px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#162f5a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1e3a6e")
              }
            >
              Donate
            </Link>

            {/* Arrow button */}
            <Link
              href={DONATE_URL}
              className="
             flex items-center justify-center
             w-[52px] h-[52px]
             rounded-r-lg
              transition-colors duration-200"
              style={{ backgroundColor: "#00b4d8" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0096b4")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#00b4d8")
              }
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* ── Mobile: Hamburger ── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-white block transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white block transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white block transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Side Drawer Menu ── */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Drawer (from right side) */}
          <div
            className="fixed top-0 right-0 h-screen w-full max-w-sm bg-[#00b4d8] md:hidden z-50 flex flex-col overflow-hidden"
            style={{ animation: "slideInRight 300ms ease-out" }}
          >
            {/* Menu Header with Logo and Close Button */}
            <div className="bg-[#0A1D2D] px-4 py-4 flex items-center justify-between border-b border-white/20">
              <Link
                href="/"
                className="shrink-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/hero-1.svg"
                  alt="SALT Science Alliance Logo"
                  width={100}
                  height={40}
                  className="object-contain w-auto h-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-0">
                {NAVBAR_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`
                        px-6 py-4 text-[18px] font-semibold border-b border-white/20
                        transition-colors duration-200
                        ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "text-white hover:bg-white/10"
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Donate Button Section (Sticky at bottom) */}
            <div className="bg-[#0A1D2D] px-4 py-6 flex items-center gap-1 border-t border-white/20">
              {/* Donate button */}
              <Link
                href={DONATE_URL}
                className="flex-1 flex items-center justify-center px-5 h-[52px] text-[16px] font-semibold text-white rounded-l-lg transition-colors duration-200"
                style={{
                  backgroundColor: "#1e3a6e",
                  fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
                  fontWeight: 600,
                  lineHeight: "28px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#162f5a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1e3a6e")
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>

              {/* Arrow button */}
              <Link
                href={DONATE_URL}
                className="flex items-center justify-center w-[52px] h-[52px] rounded-r-lg transition-colors duration-200"
                style={{ backgroundColor: "#00b4d8" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0096b4")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00b4d8")
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <style>{`
              @keyframes slideInRight {
                from {
                  transform: translateX(100%);
                }
                to {
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>
        </>
      )}
    </>
  );
}
