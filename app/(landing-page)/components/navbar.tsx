import Link from "next/link";

import { Logo } from "@/components/logo";
import { navLinks } from "./nav-links";

export const Navbar = () => {
  return (
    <nav className="flex justify-between gap-10 items-center text-sm sticky top-0 w-full p-4">
      <Logo className="text-lg" />
      <ul className="flex gap-3 items-center">
        {navLinks.map(({ href, label }) => (
          <Link href={href} key={href}>
            <li>{label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
