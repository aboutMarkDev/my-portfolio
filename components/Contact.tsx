"use client";

import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import { contactDesc } from "@/constants";
import { motion } from "motion/react";

export default function Contact() {
  const { sectionRefs } = useSectionContext();

  const contactHeading = [
    {
      text: "Let's",
    },
    {
      text: "build",
    },
    {
      text: "something",
    },
    {
      text: "great",
      className: "text-emerald-400",
    },
    {
      text: "together!",
      className: "text-emerald-400",
    },
  ];

  return (
    <section
      className="py-8 space-y-8 relative min-h-[36rem] flex items-center justify-center bg-dot-white/[0.2] overflow-hidden"
      id="contact"
      ref={sectionRefs[3]}
    >
      {/* Radial gradient faded look */}
      <div className="bg-faded" />

      <div className="w-full max-w-screen-xl mx-auto px-5 py-3 z-20 flex flex-col items-center justify-center overflow-x-hidden">
        <TypewriterEffectSmooth words={contactHeading} />

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-5"
        >
          <h2 className="w-full max-w-xl text-center text-pretty text-xs md:text-sm lg:text-lg font-light">
            {contactDesc}
          </h2>

          <Link href="mailto:markguyadaez@gmail.com">
            <Button className="rounded-lg bg-[#00674f] hover:bg-foreground hover:text-[#00674f] text-foreground duration-200 delay-75">
              Send an email <Send />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
