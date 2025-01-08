"use client";

import Link from "next/link";
import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { navigation } from "@/constants";
import { motion } from "motion/react";

export default function StickyNavigation() {
  const { currentSection } = useSectionContext();

  return (
    <section className="h-screen flex items-center justify-center sticky top-0 max-lg:hidden px-5 bg-[#001712]">
      <nav>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-3"
        >
          {navigation.map((navItem) => (
            <li key={navItem.name} className="flex justify-end">
              <Link
                href={navItem.href}
                className={`${
                  currentSection === navItem.identifier && "text-emerald-400"
                } font-semibold uppercase transition-colors duration-200 delay-75 hover:text-emerald-400`}
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
                  className="h-[2px] rounded-full bg-emerald-400"
                ></motion.div>
              </Link>
            </li>
          ))}
        </motion.ul>
      </nav>
    </section>
  );
}
