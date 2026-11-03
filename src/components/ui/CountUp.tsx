"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function CountUp({
  to, decimals = 0, prefix = "", suffix = "", duration = 1.6,
}: { to: number; decimals?: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const fmt = (v: number) =>
      prefix + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    if (reduce) { el.textContent = fmt(to); return; }
    const c = animate(0, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => (el.textContent = fmt(v)) });
    return () => c.stop();
  }, [inView, to, decimals, prefix, suffix, duration, reduce]);

  return <span ref={ref} className="tabular">{prefix}0{suffix}</span>;
}