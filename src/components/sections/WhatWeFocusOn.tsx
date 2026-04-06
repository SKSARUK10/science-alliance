"use client";

import { useState } from "react";
import { focusItems } from "../../constants/Whatwefocuson";
import Image from "next/image";

export default function WhatWeFocusOn() {
  const [openId, setOpenId] = useState<string>("stem-cells");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="bg-[#1C5D96] section-padding">
      <div className="container-custom flex flex-col items-center">
        {/* Title */}
        <h2
          className="text-white mb-10 text-center"
          style={{
            fontFamily: "Neue Haas Grotesk, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "48px",
            lineHeight: "52px",
            letterSpacing: "0",
          }}
        >
          What We Focus On
        </h2>

        {/* Accordion list */}
        <div className="w-full max-w-[996px] flex flex-col gap-5">
          {focusItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  borderRadius: "8px",
                  border: isOpen ? "2px solid #215AA8" : "2px solid #1C5D96",
                }}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-5 py-[17px] text-left transition-colors duration-200 gap-2"
                  style={{
                    minHeight: "64px",
                    backgroundColor: isOpen ? "#ffffff" : "#13385E",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    className={[
                      "heading-accordion-item",
                      isOpen ? "text-[#1C5D96]" : "text-white",
                    ].join(" ")}
                  >
                    {item.title}
                  </span>

                  <span
                    className="w-[20px] h-[20px] shrink-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Image
                      src={isOpen ? "/minus.png" : "/plus.png"}
                      alt={isOpen ? "Collapse" : "Expand"}
                      width={20}
                      height={20}
                    />
                  </span>
                </button>

                {/* Panel — no background, sits on section's #1C5D96 blue */}
                <div
                  aria-hidden={!isOpen}
                  className={[
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[400px] px-5 pt-5 pb-4" : "max-h-0",
                  ].join(" ")}
                >
                  <p className="accordion-item-content">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
