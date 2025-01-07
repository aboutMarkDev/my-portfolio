import { socials } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-3 lg:px-10 py-8 flex items-center justify-between">
      <h1 className="text-muted-foreground font-medium max-md:text-sm">
        &copy; 2024 Mark Laurence Guyada
      </h1>

      <div className="flex gap-3">
        {socials.map((social, i) => (
          <Link
            href={social.link}
            target="_blank"
            key={i}
            className="text-2xl text-muted-foreground"
          >
            {<social.icon />}
          </Link>
        ))}
      </div>
    </footer>
  );
}
