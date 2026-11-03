"use client";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { GlassPanel } from "./GlassPanel";
import { CountUp } from "./CountUp";

export function StatCard({
  label, value, decimals = 0, prefix, suffix, delta,
}: { label: string; value: number; decimals?: number; prefix?: string; suffix?: string; delta?: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <GlassPanel className="p-5">
        <p className="text-sm text-white/50">{label}</p>
        <p className="mt-2 font-display text-3xl font-semibold">
          <CountUp to={value} decimals={decimals} prefix={prefix} suffix={suffix} />
        </p>
        {delta && (
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={1.5} /> {delta}
          </p>
        )}
      </GlassPanel>
    </motion.div>
  );
}