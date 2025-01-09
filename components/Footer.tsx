import { socials } from "@/constants";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-3 lg:px-10 py-8 flex max-sm:flex-col max-sm:justify-center items-center justify-between"
    >
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
    </motion.footer>
  );
}
