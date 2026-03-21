import { useEffect } from "react";
import { useLocation } from "wouter";

// Wouter doesn't auto-scroll to top on route change by default
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
}
