"use client";

import { about, briefIntroduction } from "@/constants";
import { useSectionContext } from "@/context/SectionContext";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";

export default function Hero() {
  const { sectionRefs } = useSectionContext();

  const words = [
    "Software Engineer",
    "Full Stack Web Developer",
    "Tech Analyst",
  ];

  return (
    <section
      className="h-screen flex items-center max-md:flex-col max-md:justify-center relative"
      id="hero"
      ref={sectionRefs[0]}
    >
      <div className="text-center sticky top-0 md:hidden border w-full shadow-md backdrop-blur py-3">
        Hero Section
      </div>

      <div className="w-full max-w-screen-lg px-10 py-5 space-y-5 overflow-hidden">
        <div className="font-domine text-primary tracking-wide space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold after:content-[',']">
            Mark Laurence Guyada
          </h1>
          {/* <h3 className="text-lg md:text-3xl font-medium">Software Engineer</h3> */}
          <FlipWords
            words={words}
            className="text-lg md:text-3xl font-medium text-primary"
          />
        </div>
        <p className="text-sm md:text-lg text-secondary tracking-tight text-pretty">
          {briefIntroduction}
        </p>
        <Button
          size="lg"
          className="rounded-lg font-medium text-md hover:bg-secondary transition-colors duration-200"
        >
          Let's build something
        </Button>
      </div>

      {/* <div className="w-full max-w-3xl px-10 py-5 overflow-hidden space-y-3">
        {about.map((item, i) => (
          <div
            key={i}
            className="font-light text-sm md:text-lg indent-3 text-primary"
          >
            {item}
          </div>
        ))}
      </div> */}
    </section>
  );
}
