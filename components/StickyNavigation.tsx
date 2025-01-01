"use client";

import Link from "next/link";
import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { navigation } from "@/constants";
import { motion } from "motion/react";

export default function StickyNavigation() {
  const { currentSection } = useSectionContext();

  return (
    // fixed border top-[50%] right-8 transform -translate-y-1/2 z-50 max-lg:hidden
    <section className="h-screen flex items-center justify-center sticky top-0 max-md:hidden px-5">
      <nav>
        <ul className="space-y-3">
          {navigation.map((navItem, i) => (
            <li key={navItem.name} className="flex justify-end tracking-wider">
              <Link
                href={navItem.href}
                className={`${
                  currentSection === navItem.identifier && "text-accent"
                } font-medium uppercase transition-colors duration-200 delay-75`}
              >
                {navItem.name}
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={
                    currentSection === navItem.identifier
                      ? { scaleX: 1, originX: 0 }
                      : { scaleX: 0, originX: 1 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-[0.8px] bg-accent"
                ></motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
