import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen w-full flex flex-col items-start justify-start">
      <section className="relative">
        <Navbar />
        <Hero />
      </section>
    </AuroraBackground>
  );
}
