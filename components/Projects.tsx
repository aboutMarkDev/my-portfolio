"use client";

import { useSectionContext } from "@/context/SectionContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Icons from "./Icons";
import { projects } from "@/constants";

export default function Projects() {
  const { sectionRefs } = useSectionContext();

  return (
    <section
      className="space-y-3 flex flex-col py-8 relative"
      id="projects"
      ref={sectionRefs[1]}
    >
      {/* <header className="md:hidden sticky top-0 px-3 py-5 backdrop-blur z-50">
        Projects
      </header> */}

      <div className="text-center space-y-2">
        <h1 className="text-4xl">Recent Projects</h1>
        <h4 className="w-full max-w-5xl mx-auto text-muted-foreground px-3 text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          labore, vero distinctio quasi reprehenderit, exercitationem pariatur
          aperiam corrupti reiciendis sunt odit. Est obcaecati aperiam eveniet
          beatae porro minus! Neque, iure.
        </h4>
      </div>

      <div className="flex-1 w-full max-w-screen-lg mx-auto flex items-center justify-center flex-wrap gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border rounded-3xl overflow-hidden h-[28rem] w-[24rem] shadow-[0_8px_16px_rgb(0_0_0/0.4)] flex flex-col"
          >
            {/* Image */}
            <Link
              href={project.link}
              target="_blank"
              className="h-[40%] overflow-hidden border-b relative group"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                className="group-hover:scale-110 transition-transform duration-300"
              />

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 bg-gradient-to-t from-[#1f1f1f] to-transparent w-full text-sm font-light p-3">
                {project.name}
              </div>
            </Link>

            {/* Lower Section of Card */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-1 flex-1 px-5 py-2">
                <h1 className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  {project.title}
                </h1>
                <h3 className="indent-3 text-pretty line-clamp-5 text-sm text-muted-foreground">
                  {project.description}
                </h3>
              </div>

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
                    className="after:content-['_↗']"
                  >
                    Check Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
