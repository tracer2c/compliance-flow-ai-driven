import { useLayoutEffect, useRef, DependencyList } from "react";
import { gsap } from "gsap";

/**
 * Lightweight GSAP wrapper that scopes animations to a ref and
 * cleans them up automatically on unmount.
 */
export function useGSAP(
  callback: (ctx: gsap.Context) => void,
  deps: DependencyList = []
) {
  const scope = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context((self) => {
      callback(self);
    }, scope.current);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
