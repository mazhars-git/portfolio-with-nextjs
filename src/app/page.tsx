import Hero from "@/components/HeroSection/HeroSection";
import Projects from "@/components/Projects/Projects";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <Hero />
      <Projects />
      <ContactPage />
    </div>
  );
}
