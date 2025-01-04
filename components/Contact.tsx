"use client";

import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/button";

const words = [
  {
    text: "Let's",
  },
  {
    text: "start",
  },
  {
    text: "building",
  },
  {
    text: "awesome",
  },
  {
    text: "apps!",
    className: "text-primary",
  },
];


export default function Contact() {
  const { sectionRefs } = useSectionContext();



  return (
    <section className="py-8 space-y-10" id="contact" ref={sectionRefs[3]}>
      <div className="w-full max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center">
        <h3 className="text-lg">The road to success starts here.</h3>

        <TypewriterEffectSmooth words={words} />

        <h2 className="text-muted-foreground">
          Feel free to react out to me by sending an email. And I will respond
          as soon as possible!
        </h2>
      </div>

      <Button>Send an email</Button>

      <h4 className="text-center">Thank you for visiting my page!</h4>
    </section>
  );
}
