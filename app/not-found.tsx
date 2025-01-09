import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found!",
};

export default function NotFound() {
  return (
    <div className="border h-screen flex flex-col items-center justify-center space-y-5 bg-[#001712] bg-grid-white/[0.1] relative">
      <div className="bg-faded" />
      <div className="text-center text-pretty space-y-5">
        <h2 className="max-md:text-7xl text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-emerald-300">
          404
        </h2>
        <h3 className="max-md:text-2xl text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-emerald-300 pb-2">
          Page not found!
        </h3>
        <p className="max-md:text-sm text-lg font-medium text-muted-foreground">
          I think you went to a non-existing page.
        </p>
      </div>
      <Button className="bg-emerald-800 text-foreground hover:bg-foreground hover:text-emerald-800 transition-colors duration-200 delay-75">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
