import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { skillDesc, skills, technologies } from "@/constants";

export default function Skills() {
  const { sectionRefs } = useSectionContext();
  return (
    <section
      className="space-y-8 py-8 relative"
      id="skills"
      ref={sectionRefs[2]}
    >
      <header className="sticky-header">Skills</header>

      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold max-lg:hidden">Skills</h1>
        <p className="section-desc">{skillDesc}</p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center w-full max-w-4xl mx-auto">
        {technologies.map((tech, i) => (
          <div key={i} className="technologies-card">
            {tech}
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-3">
        {skills.map((item, i) => (
          <div key={i} className="skill-card">
            <h3 className="skill-card-title">{item.title}</h3>
            <div className="skill-card-quote">{item.quote}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
