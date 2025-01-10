import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { skillDesc, skills, technologies } from "@/constants";
import { TypewritingEffect } from "./ui/section-title-effect";
import { motion } from "motion/react";

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
        {/* <h1 className="text-4xl font-semibold max-lg:hidden">Skills</h1> */}
        <TypewritingEffect
          text="Skills"
          className="text-4xl text-semibold max-lg:hidden"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="section-desc"
        >
          {skillDesc}
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 justify-center w-full max-w-4xl mx-auto px-3"
      >
        {technologies.map((tech, i) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            key={i}
            className="technologies-card"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.5 } },
        }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-3 px-3"
      >
        {skills.map((item, i) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            key={i}
            className="skill-card"
          >
            <h3 className="skill-card-title">{item.title}</h3>
            <div className="skill-card-quote">{item.quote}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
