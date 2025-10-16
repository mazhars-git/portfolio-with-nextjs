import ContactPage from "./contact/page";
import BlogSection from "@/components/BlogSection/BlogSection";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/ServicesSection/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import ProjectPage from "./projects/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center">
      <Hero />
      <About />
      <Skills />
      <Services />
      <ProjectPage />
      <Testimonials />
      <CTASection />
      <BlogSection />
      <ContactPage />
    </div>
  );
}
