"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StickyNavigation from "@/components/StickyNavigation";
import SectionProvider from "@/context/SectionContext";

export default function Home() {
  return (
    <SectionProvider>
      <main className="flex">
        {/* These two divs are for fade effect while scrolling */}
        {/* <div className="py-10 fixed top-0 w-full z-50 bg-gradient-to-b from-background to-transparent"></div>
        <div className="py-10 fixed bottom-0 w-full z-50 bg-gradient-to-t from-background to-transparent"></div> */}
        <div className="flex-1">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>

        <StickyNavigation />
      </main>
    </SectionProvider>
  );
}
