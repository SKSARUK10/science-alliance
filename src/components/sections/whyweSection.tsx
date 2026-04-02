import Image from "next/image";
import { MISSION_CONTENT } from "../../constants/mission";
import Link from "next/link";

export default function whyWeSection() {
  const { heading, body, buttonText, buttonHref, images } = MISSION_CONTENT;

  // Get the first image from the images array (why-we-exist.svg)
  const whyweImage = images[0];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          {/* ── Left: Content ── */}
          <div className="flex-1">
            <h2
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: "48px",
                color: "#434343",
                letterSpacing: "0%",
              }}
              className="text-[#0d1b3e]"
            >
              {heading}
            </h2>

            <p
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "28px",
              }}
              className="mt-6 text-[#0d1b3e]"
            >
              {body}
            </p>

            <div className="mt-8 flex items-center gap-1 group">
              <button
                style={{
                  fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="flex items-center justify-center bg-[#1C5D96] group-hover:bg-[#219CB5] text-white rounded-lg px-[20px] py-[16px] w-[162px] h-[52px] transition-colors duration-300"
              >
                {buttonText}
              </button>

              <Link
                href={buttonHref}
                className="flex items-center justify-center w-[46px] h-[52px] rounded-lg bg-[#219CB5] group-hover:bg-[#1C5D96] transition-colors duration-300"
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

          {/* ── Right: Image ── */}
          <div className="flex-1 w-full">
            <Image
              src={whyweImage.src}
              alt={whyweImage.alt}
              width={690}
              height={440}
              className="w-full h-auto rounded-xl object-cover"
              priority={whyweImage.priority}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
