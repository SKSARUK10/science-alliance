import Image from "next/image";
import Link from "next/link";
import { HOW_WE_ACHIEVE } from "../../constants/howWeAchieve";

export default function HowWeAchieveSection() {
  const { heading, cards } = HOW_WE_ACHIEVE;

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        {/* ── Heading ── */}
        <h2
          style={{
            fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: "1.2",
            color: "#434343",
          }}
          className="mb-10"
        >
          {heading}
        </h2>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              {/* ── Image ── */}
              {/* ── Image ── */}
             <div className="relative w-full">
                            <Image
                              src={card.image}
                              alt={card.title}
                              width={390}
                              height={300}
                              className="w-full h-auto object-cover rounded-lg"
                            
                            />
                          
                          </div>

              {/* ── Content ── */}
              <div className="mt-4 flex flex-col flex-1 gap-2">
                <h3
                  style={{
                    fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#0d1b3e",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "#6b7280",
                  }}
                >
                  {card.body}
                </p>
                <Link
                  href={card.linkHref}
                  className="mt-auto"
                  style={{
                    fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#1C5D96",
                    textDecoration: "underline",
                  }}
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
