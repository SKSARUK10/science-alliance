import Image from "next/image";
import { truthContent } from "@/src/constants/truth";

export default function TruthSection() {
  const { heading, body, image } = truthContent;

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="flex-1">
            {/* Heading → Neue Haas Grotesk 65 Medium */}
            <h2
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 500, // 65 Medium
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: "48px",
                letterSpacing: "0%",
              }}
              className="text-[#0d1b3e]"
            >
              {heading}
            </h2>

            {/* Body → Neue Haas Grotesk 55 Roman */}
            <p
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 400, // 55 Roman
                fontSize: "16px",
                lineHeight: "28px",
              }}
              className="mt-6 text-[#0d1b3e]"
            >
              {body}
            </p>
          </div>

          {/* ----- image */}

          <div className="flex-1 w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={690}
              height={440}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
