import ContactPage from "./contact/page";
import BlogSection from "@/components/BlogSection/BlogSection";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/ServicesSection/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import ProjectPage from "./projects/page";
import Hero from "./hero/page";
import About from "./about/page";

export default function Home() {
  return (
    <div className="container font-sans mx-auto items-center justify-items-center min-h-screen">
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
