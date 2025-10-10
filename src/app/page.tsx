import Hero from "@/components/HeroSection/HeroSection";
import Projects from "@/components/Projects/Projects";
import ContactPage from "./contact/page";
import BlogSection from "@/components/BlogSection/BlogSection";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/ServicesSection/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <CTASection />
      <BlogSection />
      <ContactPage />
    </div>
  );
}
