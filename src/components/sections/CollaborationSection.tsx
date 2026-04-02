import Image from "next/image";
import { COLLABORATION_CONTENT, COLLA_CONTENT } from "../../constants/mission";

export default function CollaborationSection() {
  const { title, description, bridgeImage, fields } = COLLABORATION_CONTENT;
  const { backgroundImage } = COLLA_CONTENT;

  return (
    <div className="w-full py-10">
      <div className="container-custom">
        {/* ── Inner card: this is the blue rounded section ── */}
        <section className="relative w-full overflow-hidden rounded-2xl">
          {/* ── Background Image (bg-blue.svg) fills only this card ── */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={backgroundImage}
              alt=""
              fill
              priority
              className="object-cover object-center"
              quality={90}
            />
          </div>

          {/* ── Bottom-Left Bridge Overlay (bridge.png) ── */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute bottom-0 left-0">
              <Image
                src={bridgeImage}
                alt="Bridge connecting scientific fields"
                width={800}
                height={400}
                className="object-contain"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-col items-center px-8 py-14 md:px-16 md:py-20">
            {/* Heading */}
            <h2
              className="max-w-2xl text-center"
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                lineHeight: "1.2",
                color: "#ffffff",
              }}
            >
              {title.replace("for a New Era", "")}
              <br />
              for a New Era
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
              {description}
            </p>

            {/* ── Cards Grid ── */}
            <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {fields.map((field) => (
                <FieldCard
                  key={field.name}
                  icon={field.icon}
                  alt={field.alt}
                  label={field.name}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ── Individual Field Card ── */
function FieldCard({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) {
  return (
    <div
      className="flex items-center gap-4 rounded-xl px-5 py-5  relative overflow-hidden"
      style={{
        backgroundImage: "url('/small-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-[#219CB5]">
        <Image
          src={icon}
          alt={alt}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </div>
      {/* Label */}
      <span
        style={{
          fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
          fontWeight: 400, // 55 Roman
          fontSize: "20px",
          lineHeight: "30px",
          letterSpacing: "0",
          color: "#FDF5EC",
          verticalAlign: "middle",
        }}
      >
        {label}
      </span>
    </div>
  );
}
