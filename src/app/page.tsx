import About from "@/components/about";
import AuthorSection from "@/components/author-section";
import Blog from "@/components/blog";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <AuthorSection />
      <Blog />
    </>
  );
}
