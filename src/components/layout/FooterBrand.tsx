import Image from "next/image";
import { FOOTER_DESCRIPTION } from "../../constants/footer";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/Salt Logo_Primary Logo 2.png"
          alt="SALT Science Alliance Logo"
          width={247}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-white/50 max-w-[260px]">
        {FOOTER_DESCRIPTION}
      </p>
    </div>
  );
}
