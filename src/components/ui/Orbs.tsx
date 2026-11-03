export function Orbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-violet/30 blur-[120px] animate-float will-change-transform" />
      <div className="absolute right-[-8rem] top-32 h-[32rem] w-[32rem] rounded-full bg-brand-magenta/25 blur-[120px] animate-float [animation-delay:-3s] will-change-transform" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-amber/15 blur-[120px] animate-float [animation-delay:-6s] will-change-transform" />
    </div>
  );
}