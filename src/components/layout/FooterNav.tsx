import Link from "next/link";
import { FOOTER_NAV_LINKS } from "../../constants/footer";

export default function FooterNav() {
  return (
    <nav className="flex flex-col">
      <span className="text-sm font-semibold text-white mb-4">Company</span>
      {FOOTER_NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm text-white/55 hover:text-white py-1.5 transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
