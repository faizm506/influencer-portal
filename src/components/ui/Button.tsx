"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 active:scale-[0.97] disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-gradient bg-[length:200%_auto] text-white shadow-glow hover:shadow-[0_0_56px_-6px_rgba(225,48,108,0.75)] hover:bg-right",
        glass: "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10",
        ghost: "text-white/70 hover:text-white hover:bg-white/5",
      },
      size: { sm: "h-9 px-4 text-sm", md: "h-11 px-6 text-sm", lg: "h-14 px-8 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export function Button({ className, variant, size, children, ...props }: Props) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props}>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}