"use client";
import dynamic from "next/dynamic";
import NoiseGrain from "@/components/effects/NoiseGrain";

const Cursor = dynamic(() => import("@/components/motion/Cursor"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/motion/SmoothScroll"), { ssr: false });
const CommandPalette = dynamic(() => import("@/components/nav/CommandPalette"), { ssr: false });
const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoiseGrain />
      <Cursor />
      <CommandPalette />
      <ThemeToggle />
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </>
  );
}