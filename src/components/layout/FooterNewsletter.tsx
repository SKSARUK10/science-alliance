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
    w-full bg-white/10 border border-white/15 rounded-md
    px-4 py-3 text-sm text-white placeholder:text-white/40
    outline-none focus:border-white/40 transition-colors duration-200
  `;

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-heading text-[22px] font-semibold text-white leading-snug">
        Stay Informed on the Fight for Ethical Science
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
        <input
          type="text"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Organization"
          value={form.organization}
          onChange={(e) => setForm({ ...form, organization: e.target.value })}
          className={inputClass}
        />
        <div className="flex gap-2.5">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputClass} flex-1`}
          />
          <button
            type="submit"
            className="bg-[#3a6bc4] hover:bg-[#2d57a8] text-white text-sm font-medium px-5 py-3 rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
