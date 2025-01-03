import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const skills = [
  {
    title: "Frontend",
    quote:
      "I have experience building websites using HTML, CSS, and JavaScript. I have also worked with modern frameworks like React and NextJs.",
  },
  {
    title: "Backend",
    quote:
      "I have experience building backend services using NodeJs and Express. I have also worked with databases like MongoDB and PostgreSQL.",
  },
  {
    title: "APIs",
    quote: "I have experience building RESTful APIs using NodeJs and Express.",
  },
  {
    title: "Authentication and Authorization",
    quote:
      "I have experience implementing authentication and authorization using JWT and OAuth.",
  },
  {
    title: "Object-Oriented Programming",
    quote:
      "I have experience building applications using object-oriented programming principles.",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "PHP",
  "ReactJs",
  "NextJs",
  "ExpressJs",
  "NodeJs",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Appwrite",
];

export default function Skills() {
  const { sectionRefs } = useSectionContext();
  return (
    <section
      className="space-y-5 py-8 px-5 overflow-hidden"
      id="skills"
      ref={sectionRefs[2]}
    >
      <div className="text-center space-y-2">
        <h1 className="text-4xl">Skills</h1>
        <p className="max-w-5xl mx-auto text-muted-foreground px-3 text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          perferendis architecto et tempore hic laboriosam, quae nesciunt eius
          possimus magni ipsum explicabo unde dicta officiis eum ducimus eos quo
          nisi.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center w-full max-w-4xl mx-auto">
        {technologies.map((tech, i) => (
          <div
            key={i}
            className="border rounded-xl px-5 py-3 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          >
            {tech}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skills} direction="right" />
      </div>

      {/* <div className="flex gap-5 items-start">
        <div className="px-3 py-5 w-full h-full max-w-3xl flex flex-wrap gap-3 justify-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="h-[16rem] w-[16rem] border rounded-xl px-5 py-3 space-y-2"
            >
              <h1 className="font-medium">{skill.title}</h1>
              <p className="text-muted-foreground font-light text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-wrap gap-3">
          {technologies.map((tech, i) => (
            <div key={i} className="border rounded-xl px-5 py-3">
              {tech}
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
