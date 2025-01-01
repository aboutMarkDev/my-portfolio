"use client";

import { useSectionContext } from "@/context/SectionContext";

export default function Projects() {
  const { sectionRefs } = useSectionContext();

  return (
    <div className="h-screen" id="projects" ref={sectionRefs[1]}>
      Projects
    </div>
  );
}
