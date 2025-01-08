"use client";

import { useSectionContext } from "@/context/SectionContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Icons from "./Icons";
import { projectDesc, projects } from "@/constants";
import { createRef, useEffect, useMemo, useState } from "react";
import { TypewritingEffect } from "./ui/section-title-effect";
import { motion } from "motion/react";

export default function Projects() {
  const { sectionRefs } = useSectionContext();

  // To store all description that were clamped
  const [clampedDesc, setClampedDesc] = useState<Set<string>>(new Set());

  const descRef = useMemo(
    () => projects.map(() => createRef<HTMLHeadingElement | null>()),
    [projects]
  );

  // To store the name of the project if the user clicks the see more
  const [expandedList, setExpandedList] = useState<Set<string>>(new Set());

  // Meaning remove the projectName from expandedList
  const toggleSeeLess = (projectName: string) => {
    setExpandedList((prev) => {
      const updatedList = new Set(prev);
      updatedList.delete(projectName);
      return updatedList;
    });
  };

  // To check if the text clamped or has ellipsis
  useEffect(() => {
    const clampedList = new Set<string>();

    descRef.forEach((ref) => {
      if (ref.current) {
        const isTruncated = ref.current.scrollHeight > ref.current.clientHeight;
        if (isTruncated && ref.current.id) {
          clampedList.add(ref.current.id);
        }
      }
    });

    setClampedDesc(clampedList);
  }, [descRef]);

  return (
    <section
      className="py-8 space-y-3 relative"
      id="projects"
      ref={sectionRefs[1]}
    >
      <header className="sticky-header">Recent Projects</header>

      <div className="text-center space-y-3">
        {/* <h1 className="text-4xl max-lg:hidden font-semibold">
          Recent Projects
        </h1> */}

        <TypewritingEffect
          text="Recent Projects"
          className="text-4xl font-semibold max-lg:hidden"
          duration={0.1}
        />

        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="section-desc"
        >
          {projectDesc}
        </motion.h4>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
        }}
        viewport={{ once: true }}
        className="project-container"
      >
        {projects.map((project, i) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, filter: "blur(5px)" },
                visible: { opacity: 1, filter: "blur(0px)" },
              }}
              key={i}
              className="project-card"
            >
              {/* Project Image */}
              <Link
                href={project.link}
                target="_blank"
                className="h-[12rem] overflow-hidden border-b border-[#479281]/70 relative group"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={500}
                  className="group-hover:scale-110 transition-transform duration-300"
                />

                <div className="project-name">{project.name}</div>
              </Link>

              {/* Project Title and Description */}
              <div className="flex flex-col justify-between min-h-[18rem]">
                <div className="space-y-1 flex-1 px-5 pt-2">
                  <h1 className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </h1>
                  <p
                    ref={descRef[i]}
                    id={`${i}`}
                    className={`indent-3 text-pretty text-sm font-light ${
                      expandedList.has(project.name)
                        ? "line-clamp-none"
                        : "line-clamp-5"
                    }`}
                  >
                    {project.description}
                  </p>
                  {/* See more/See Less */}
                  {clampedDesc.has(String(i)) &&
                    (expandedList.has(project.name) ? (
                      <div className="float-end">
                        <button
                          type="button"
                          onClick={() => toggleSeeLess(project.name)}
                          className="see-more_less-btn"
                        >
                          See less
                        </button>
                      </div>
                    ) : (
                      <div className="float-end">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedList((prev) =>
                              new Set(prev).add(project.name)
                            )
                          }
                          className="see-more_less-btn"
                        >
                          See more
                        </button>
                      </div>
                    ))}
                </div>

                {/* Lower Part of the Card */}
                <div className="flex items-end justify-between py-2">
                  <div className="flex-1 flex flex-row flex-wrap w-full px-5">
                    {project.techStack.map((tech, i) => (
                      <Icons icon={tech} key={i} />
                    ))}
                  </div>

                  <Button variant="link">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="after:content-['_↗'] text-emerald-300"
                    >
                      Check Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
