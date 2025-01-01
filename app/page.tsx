"use client";

import { useEffect, useRef, useState } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StickyNavigation from "@/components/StickyNavigation";
import SectionProvider from "@/context/SectionContext";
import Header from "@/components/Header";

export default function Home() {
  return (
    <SectionProvider>
      <main className="flex">
        {/* <Header /> */}
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
