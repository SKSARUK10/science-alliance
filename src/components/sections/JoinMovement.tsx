"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "../../hooks/useInView";

export default function JoinMovement() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const { ref, isInView } = useInView();

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  };

  return (
    <section ref={ref} className="join-movement-section">
      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .anim-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        .btn-lift {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .btn-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.2);
        }
      `}</style>

      {/* Background */}
      <Image
        src="/join-movement-bg.svg"
        alt="join-bg"
        fill
        priority
        className="join-movement-bg"
      />

      <div className="container-custom join-movement-inner">
        {/* Heading */}
        <h2 className=" join-movement-heading">
          Join the Movement for
          <br />
          Ethical Science
        </h2>

        {/* Subtext */}
        <p
          className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-2 join-movement-subtext`}
        >
          Sign up for our newsletter to get updates on ethical
          <br />
          science, new research, and upcoming events.
        </p>

        {/* Form */}
        <div
          className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-3 join-movement-form`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Email"
            className="join-movement-input"
            disabled={status === "loading" || status === "success"}
          />

          <button
            onClick={handleSubscribe}
            disabled={status === "loading" || status === "success"}
            className="join-movement-btn btn-lift"
          >
            {status === "loading"
              ? "..."
              : status === "success"
                ? "Subscribed!"
                : "Subscribe"}
          </button>
        </div>

        {status === "error" && (
          <p className="join-movement-error">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .join-movement-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0;
          margin-bottom: 70px;
          text-align: center;
        }

        .join-movement-bg {
          object-fit: cover;
          object-position: center top;
          pointer-events: none;
        }

        .join-movement-inner {
          position: relative;
          z-index: 1;
        }

        .join-movement-heading {
          font-family: "Neue Haas Grotesk", Arial, sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 4vw, 46px);
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .join-movement-subtext {
          font-family: "Neue Haas Grotesk", Arial, sans-serif;
          font-weight: 400;
        line-spacing: 16px;
          font-size: 24px;
          line-height: 28px;
          color: #fdf5ec;
          margin: 0 auto 40px;
          max-width: 640.22px;
        }

        .join-movement-form {
          display: flex;
          align-items: center;
          width: 593.16px;
          height: 56px;
          width: 593.16px;
          margin: 0 auto;
          background: #fff;
          border-radius: 8px;
          padding: 6px 0px 6px 20px;
          gap: 8px;
        }

        @media (max-width: 560px) {
          .join-movement-form {
            flex-direction: column;
            padding: 12px;
          }
        }

        .join-movement-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          background: transparent;
        }

        .join-movement-btn {
          font-family: "Neue Haas Grotesk Display Pro", Arial, sans-serif;
          font-weight: 450;
          font-style: normal;
          background-color: #219cb5;
          color: #fff;
          border: 1px solid #6095dc;
          border-radius: 8px;
          width: 114.21px;
          height: 56px;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 0.05em; /* 5% */
          cursor: pointer;
        }

        .join-movement-error {
          color: #fca5a5;
          margin-top: 12px;
        }
      `}</style>
    </section>
  );
}
