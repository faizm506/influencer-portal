import { cn } from "@/lib/utils";

export function GlassPanel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] shadow-glass backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}