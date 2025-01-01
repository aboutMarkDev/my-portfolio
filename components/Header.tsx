"use client";

import { navigation } from "@/constants";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { useSectionContext } from "@/context/SectionContext";

export default function Header() {
  const { currentSection } = useSectionContext();
  return (
    <header className="md:hidden sticky top-0 px-8 py-5 min-h-[7vh] z-50 backdrop-blur-md flex items-center justify-between">
      <Link href="/">Logo</Link>

      <nav className="max-sm:hidden">
        <ul className="flex space-x-3">
          {navigation.map((navItem) => (
            <li key={navItem.name} className="text-sm ">
              <Link href={navItem.href}>
                {navItem.name}{" "}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={
                    currentSection === navItem.identifier
                      ? { scaleX: 1 }
                      : { scaleX: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-[0.7px] bg-foreground"
                ></motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
