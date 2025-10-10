import Hero from "@/components/HeroSection/HeroSection";
import Projects from "@/components/Projects/Projects";
import ContactPage from "./contact/page";
import BlogSection from "@/components/BlogSection/BlogSection";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <Hero />
      <Projects />
      <BlogSection />
      <ContactPage />
    </div>
  );
}
