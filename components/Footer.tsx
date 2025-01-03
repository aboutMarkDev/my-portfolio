import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    link: "",
  },
  {
    icon: <FaFacebook />,
    link: "",
  },
  {
    icon: <FaLinkedin />,
    link: "",
  },
  {
    icon: <FaInstagram />,
    link: "",
  },
  {
    icon: <FaXTwitter />,
    link: "",
  },
];

export default function Footer() {
  return (
    <footer className="px-10 py-8 flex items-center justify-between">
      <h1 className="text-muted-foreground font-medium text-lg">
        Mark Laurence Guyada
      </h1>

      <div className="flex gap-3">
        {socials.map((social, i) => (
          <Link
            href={social.link}
            key={i}
            className="text-2xl text-muted-foreground"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
