import Link from "next/link";

import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={cn("text-3xl font-semibold", className)}
    >{`</ Somto >`}</Link>
  );
};
