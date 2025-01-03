import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiCloudinary,
  SiReactquery,
  SiAppwrite,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaStripe } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Icon mapping for scalability and maintainability
const ICONS_MAP: Record<string, { Icon: React.ElementType; color: string }> = {
  React: { Icon: FaReact, color: "#61DBFB" },
  "Tailwind CSS": { Icon: RiTailwindCssFill, color: "#38BDF8" },
  Firebase: { Icon: IoLogoFirebase, color: "#FFCB2B" },
  ExpressJS: { Icon: SiExpress, color: "#FFFFFF" },
  Cloudinary: { Icon: SiCloudinary, color: "#4285F4" },
  MongoDB: { Icon: DiMongodb, color: "#4DB33D" },
  Stripe: { Icon: FaStripe, color: "#6772E5" },
  "React Query": { Icon: SiReactquery, color: "#FF4154" },
  Appwrite: { Icon: SiAppwrite, color: "#F02E65" },
};

export default function Icons({ icon }: { icon?: string }) {
  const iconData = icon ? ICONS_MAP[icon] : undefined;

  if (!iconData) return null;

  const { Icon, color } = iconData;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className="text-xl border rounded-full h-[2.8rem] w-[2.8rem] flex-shrink-0 flex items-center justify-center overflow-hidden bg-background transform hover:scale-110 transition-transform duration-300 hover:z-20 -ml-3"
            style={{ color }}
          >
            <Icon />
          </span>
        </TooltipTrigger>

        <TooltipContent>{icon}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
