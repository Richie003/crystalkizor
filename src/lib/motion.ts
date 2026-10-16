import { createContext, useContext } from "react";

export const easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";
export const easeOutQuad = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
export const easeInQuad = "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
export const easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export const IntroReadyContext = createContext(false);

export function useIntroReady() {
  return useContext(IntroReadyContext);
}
