"use client";

export default function ContactSection() {
  return (
    <section className="bg-white-50 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "82px",
            letterSpacing: "0",
            textAlign: "center",
            color: "var(--color-secondary)",
          }}
          className="mb-4"
        >
          Contact Us
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
            fontWeight: 400, // 55 Roman
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "0",
            textAlign: "center",
          }}
          className="text-gray-500 mb-10"
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum.
        </p>

        {/* Form */}
        <form className="space-y-5 text-left">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name*"
            className="
          placeholder:text-gray-400
          w-full h-[56px] px-4
         rounded-[6px]
        bg-[#FAF9F6]
        border-0 border-b-2 border-[#376BB1]
        focus:outline-none focus:bg-white
        transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email*"
            className="
    placeholder:text-gray-400
    w-full h-[56px] px-4
    rounded-[6px]
    bg-[#FAF9F6]  
     border-0 border-b-2 border-[#376BB1]
    focus:outline-none focus:bg-white
    transition
  "
          />

          {/* Services Dropdown */}
          <select
            className="
    w-full h-[56px] px-4
    rounded-[6px]
    bg-[#FAF9F6]
    border-0 border-b-2 border-[#376BB1]
    text-gray-400
    focus:outline-none focus:bg-white
  "
          >
            <option>Services?</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Consulting</option>
          </select>

          {/* Message */}
          <textarea
            placeholder="Leave a inquiry"
            rows={5}
            className="
          placeholder:text-gray-400
          w-full px-4 py-4
          rounded-[6px]
          bg-[#FAF9F6]
          border-0 border-b-2 border-[#376BB1]
          focus:outline-none focus:bg-white
          transition resize-none"
          />
          {/* Button */}
          {/* ← add group here */}
          <div className="flex items-center gap-1 group">
            {/* Main Button */}
            <button
              type="submit"
              style={{
                fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
              }}
              className="
      flex items-center justify-center
      bg-[#1C5D96] group-hover:bg-[#219CB5]
      text-white rounded-lg
      px-[20px] py-[16px]
      w-[162px] h-[52px]
      transition-colors duration-300
    "
            >
              Send Message
            </button>

            {/* Arrow Button */}
            <button
              type="button"
              className="
      flex items-center justify-center
      w-[46px] h-[52px] rounded-lg
      bg-[#219CB5] group-hover:bg-[#1C5D96]
      transition-colors duration-300
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
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
