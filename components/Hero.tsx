"use client";

import { aboutMe, bio, role } from "@/constants";
import { useSectionContext } from "@/context/SectionContext";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Hero() {
  const { sectionRefs } = useSectionContext();

  return (
    <section
      className="min-h-screen flex max-lg:flex-col max-lg:items-center justify-between bg-[#001712] bg-grid-white/[0.1] relative"
      id="hero"
      ref={sectionRefs[0]}
    >
      {/* Radial gradient faded look */}
      <div className="bg-faded" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hero-intro-container"
      >
        <div className="overflow-hidden space-y-2">
          <h1 className="dev-name">Mark Laurence Guyada</h1>
          <FlipWords
            words={role}
            className="text-foreground text-xl lg:text-4xl font-bold -ml-2"
          />
        </div>

        <h3 className="bio">{bio}</h3>

        <Button className="rounded-lg bg-[#00674f] hover:bg-foreground hover:text-[#00674f] text-foreground duration-200 delay-75">
          View my Resume
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="about-container"
      >
        <header className="sticky-header">About Me</header>
        {aboutMe.map((about, i) => (
          <div key={i} className="px-5 indent-2 max-lg:text-sm text-pretty">
            {about}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
