export const tokens = {
  colors: {
    base: "#0B0B12",
    surface: "#13131C",
    violet: "#833AB4",
    magenta: "#E1306C",
    amber: "#FCAF45",
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
  },
  radius: { card: "1.5rem", panel: "2rem", pill: "9999px" },
  motion: {
    fast: 0.18,
    base: 0.3,
    slow: 0.6,
    easeOutExpo: [0.16, 1, 0.3, 1] as const,
    spring: { type: "spring", stiffness: 260, damping: 24 } as const,
  },
  gradient: "linear-gradient(135deg,#833AB4 0%,#E1306C 55%,#FCAF45 100%)",
} as const;