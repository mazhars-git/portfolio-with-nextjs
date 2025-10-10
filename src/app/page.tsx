import Hero from "@/components/HeroSection/HeroSection";
import Projects from "@/components/Projects/Projects";
import ContactPage from "./contact/page";
import BlogSection from "@/components/BlogSection/BlogSection";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <Hero />
      <About />
      <Projects />
      <BlogSection />
      <ContactPage />
    </div>
  );
}
