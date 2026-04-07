"use client";

import { useState } from "react";
import { NewsletterForm } from "../../types/footer";

export default function FooterNewsletter() {
  const [form, setForm] = useState<NewsletterForm>({
    fullName: "",
    organization: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", form);
  };

  const inputClass = `
    w-full border border-[#769DBE] rounded-[8px]
    px-4 outline-none focus:border-white/40 transition-colors duration-200
  `;

  const inputStyle = {
    height: "56px",
    backgroundColor: "#769DBE",
    color: "#ffffff",
  };

  return (
    <div className="footer-newsletter flex flex-col gap-5">
      <h3 className="heading-h3 text-white">
        Stay Informed on the Fight for Ethical Science
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
        <input
          type="text"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className={inputClass}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Organization"
          value={form.organization}
          onChange={(e) => setForm({ ...form, organization: e.target.value })}
          className={inputClass}
          style={inputStyle}
        />
        <div className="flex gap-2.5">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputClass} flex-1`}
            style={inputStyle}
          />
          <button
            type="submit"
            className="bg-[#3a6bc4] hover:bg-[#6095DC] text-white text-sm font-medium px-5 rounded-[8px] transition-colors duration-200 whitespace-nowrap"
            style={{ height: "56px" }}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
