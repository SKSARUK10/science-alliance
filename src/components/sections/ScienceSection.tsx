"use client";

import Image from "next/image";
import { scienceContent } from "../../constants/science";
import Link from "next/link";
import { useInView } from "../../hooks/useInView";

export default function ScienceSection() {
  const { heading, body, button, image } = scienceContent;
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        .anim-fade-up { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .anim-slide-left { opacity: 0; animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .anim-slide-right { opacity: 0; animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.5s; }
        .btn-lift { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .btn-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2); }
      `}</style>
      <section className=" bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            {/* ── Left: Content ── */}
            <div className="flex-1">
              {/* Heading → Neue Haas Grotesk 65 Medium */}
              <h2
                className={`${isInView ? "anim-slide-left" : "opacity-0"} delay-1 text-[#0d1b3e]`}
                style={{
                  fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: "48px",
                  color: "#434343",
                  letterSpacing: "0%",
                }}
              >
                {heading}
              </h2>

              {/* Body → Neue Haas Grotesk 55 Roman */}
              <p
                className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-2 mt-6 text-[#0d1b3e]`}
                style={{
                  fontFamily: "'Neue Haas Grotesk', Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                }}
              >
                {body}
              </p>

              {/* Button → Aktiv Grotesk */}
              <div
                className={`${isInView ? "anim-fade-up" : "opacity-0"} delay-3 mt-8 flex items-center gap-1 group`}
              >
                <button
                  style={{
                    fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                  className="
      flex items-center justify-center
      bg-[#1C5D96] group-hover:bg-[#219CB5]
      text-white
      rounded-lg
      px-[20px] py-[16px]
      w-[162px] h-[52px]
      transition-colors duration-300
      btn-lift
    "
                >
                  {button.label}
                </button>

                <Link
                  href={button.href}
                  className="
        flex items-center justify-center
        w-[46px] h-[52px]
        rounded-lg
        bg-[#219CB5] group-hover:bg-[#1C5D96]
        transition-colors duration-300
        btn-lift
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
                </Link>
              </div>
            </div>

            {/* ── Right: Image ── */}
            <div
              className={`${isInView ? "anim-slide-right" : "opacity-0"} delay-1 flex-1 w-full`}
            >
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
    </div>
  );
}
//                 fontSize: "16px",
//                 lineHeight: "28px",
//               }}
//               className="mt-6 text-[#0d1b3e]"
//             >
//               {body}
//             </p>

//             <div className="mt-8 flex items-center gap-3">
//               <button
//                 style={{
//                   fontFamily: "'Aktiv Grotesk', Arial, sans-serif",
//                   fontWeight: 600,
//                   fontSize: "14px",
//                 }}
//                 className="bg-[#1C5D96] text-white px-6 py-3 rounded-md hover:bg-[#0d1b3e] transition-colors duration-200"
//               >
//                 {button.label}
//               </button>
//               <button className="bg-[#1C5D96] text-white w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#0d1b3e] transition-colors duration-200">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path
//                     d="M3 8H13M13 8L8 3M13 8L8 13"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* ── Right: Image ── */}
//           <div className="w-full md:w-1/2">
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={690}
//               height={440}
//               className="w-full h-auto rounded-xl object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
