import { aboutMe } from "@/constants";
import React from "react";

export default function About() {
  return (
    <section className="px-5 py-8 space-y-8">
      <h1 className="text-4xl font-semibold tracking-tight">About me</h1>

      <div className="w-full max-w-screen-sm mx-auto space-y-5">
        {aboutMe.map((about, i) => (
          <div
            key={i}
            className="px-3 indent-2 text-pretty tracking-tight text-muted-foreground"
          >
            {about}
          </div>
        ))}
      </div>
    </section>
  );
}
