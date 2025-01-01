import React from "react";
import { useSectionContext } from "@/context/SectionContext";

export default function Contact() {
  const { sectionRefs } = useSectionContext();
  return (
    <div className="h-screen" id="contact" ref={sectionRefs[3]}>
      Contact
    </div>
  );
}
