"use client";

import Image from "next/image";

const DEFAULT_BIO = `Bio coming soon. This expert is a valued member of our team committed to advancing ethical research and protecting human life.`;

type Expert = {
  id: number;
  image: string;
  name: string;
  title: string;
  bio?: string;
};

type ExpertModalProps = {
  expert: Expert | null;
  onClose: () => void; // ← no bioText here
};

export default function ExpertModal({ expert, onClose }: ExpertModalProps) {
  if (!expert) return null;

  const bioText = expert.bio ?? DEFAULT_BIO; // ← handled internally

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close Button ── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="#333"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* ── Top: Image + Name + Title ── */}
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={expert.image}
            alt={expert.name}
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-cover rounded-lg shrink-0"
          />
          <div>
            <h3
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
              }}
              className="text-heading"
            >
              {expert.name}
            </h3>
            <p
              style={{
                fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
              }}
              className="text-[#6b7280] mt-1"
            >
              {expert.title}
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <hr className="border-[#e5e7eb] mb-6" />

        {/* ── Bio Text ── */}
        {bioText.split("\n\n").map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "24px",
            }}
            className="text-[#434343] mb-4"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
