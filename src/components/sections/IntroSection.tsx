export default function IntroSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Title → Neue Haas Grotesk 65 Medium */}
        <h2
          style={{
            fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
            fontWeight: 500, // 65 Medium
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: "40px",
            letterSpacing: "0%",
            textAlign: "center",
          }}
          className="text-gray-900"
        >
          Protecting Human Life
        </h2>

        {/* Description */}
        <div className="mt-6 px-6 py-4 inline-block">
          <p
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 700, // 75 Bold
              fontSize: "28px",
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
            }}
            className="text-gray-900"
          >
            {/* Blue span → 75 Bold */}
            <span style={{ color: "#1C5D96" }}>
              Science offers incredible promise for improving health and the
              human condition.
            </span>{" "}
            {/* "But..." → 55 Roman (400) */}
            <span
              style={{
                fontWeight: 400, // 55 Roman
              }}
            >
              But science falls when research and advancements rely on the
              intentional harm and destruction of living human beings.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
