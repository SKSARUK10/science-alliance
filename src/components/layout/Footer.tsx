import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterNewsletter from "./FooterNewsletter";
import FooterSupport from "./FooterSupport";
import Image from "next/image";

import { FOOTER_COPYRIGHT } from "../../constants/footer";

export default function Footer() {
  return (
    <footer className="relative text-white ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer-all.png" // Replace with your actual image path
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        <FooterSupport />
        <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-[1fr_160px_1fr] gap-19">
          <FooterBrand />
          <FooterNav />
          <FooterNewsletter />
        </div>
        {/* Bottom bar */}

        <div className="border-t border-white/10 mt-auto">
          <div className="container-custom py-4 flex items-center justify-between">
            <span className="text-xs text-white/35">{FOOTER_COPYRIGHT}</span>
            <Image
              src="/footer logo.svg"
              alt="Digital Alchemy"
              width={182} // adjust based on your design
              height={18}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
