import React from "react";
import { useSectionContext } from "@/context/SectionContext";

export default function Skills() {
  const { sectionRefs } = useSectionContext();
  return (
    <div className="h-screen" id="skills" ref={sectionRefs[2]}>
      Skills
    </div>
  );
}
