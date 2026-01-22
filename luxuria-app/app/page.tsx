"use client";

import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Work from "./components/work/work";

export default function Home() {
  return (
    <>
      <ScrollProgress className="fixed top-0 left-0 z-100 h-1" />
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Work />
      <Footer />
    </>
  );
}
