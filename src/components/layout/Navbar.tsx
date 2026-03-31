"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_LINKS, DONATE_URL } from "../../constants/navbar";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      style={{ backgroundColor: "#0A1D2D" }}
      className="w-full sticky top-0 z-50"
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-[100px]">
        {/* ── Left: Logo ── */}
        <Link href="/" className="shrink-0">
          <Image
            src="/salt-logo.png"
            alt="SALT Science Alliance Logo"
            width={130}
            height={50}
            className="object-contain w-auto h-auto"
            priority
          />
        </Link>

        {/* ── Center: Nav Links ── */}
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

        {/* ── Right: Donate Button + Arrow ── */}
        <div className="flex items-center gap-1">
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
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
        </button>
      </div>
    </header>
  );
}
