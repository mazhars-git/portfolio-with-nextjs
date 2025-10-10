import Hero from "@/components/HeroSection/HeroSection";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen pb-20">
      <Hero />
      <Projects />
    </div>
  );
}
