"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, BarChart3, Wallet, BadgeCheck, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { StatCard } from "@/components/ui/StatCard";
import { Orbs } from "@/components/ui/Orbs";
import { AuthScoreRing } from "@/components/ui/AuthScoreRing";
import { CountUp } from "@/components/ui/CountUp";

const ease = [0.16, 1, 0.3, 1] as const;
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: i * 0.08 } }),
};

const brands = ["Nova", "Lumen", "Aether", "Kinfolk", "Orbit", "Veloce", "Mosaic", "Halo"];

export default function Landing() {
  return (
    <main className="relative overflow-hidden">
      <Orbs />

      {/* NAV */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-gradient"><Sparkles className="h-4 w-4" /></span>
          Glint
        </div>
        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#trust" className="hover:text-white">Security</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Get started</Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-2">
        <div>
          <motion.span variants={reveal} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-xl">
            <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" /> Every creator audience-audited
          </motion.span>
          <motion.h1 variants={reveal} custom={1} initial="hidden" animate="show"
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Real creators.<br /><span className="text-gradient">Real results.</span>
          </motion.h1>
          <motion.p variants={reveal} custom={2} initial="hidden" animate="show"
            className="mt-6 max-w-lg text-lg text-white/60">
            Discover verified Instagram talent, run campaigns end-to-end, and pay safely through escrow.
            No fake followers. No chasing invoices.
          </motion.p>
          <motion.div variants={reveal} custom={3} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Launch a campaign <ArrowRight className="h-4 w-4" /></Button>
            <Button size="lg" variant="glass">I'm a creator</Button>
          </motion.div>
          <motion.div variants={reveal} custom={4} initial="hidden" animate="show"
            className="mt-8 flex items-center gap-2 text-sm text-white/50">
            <Lock className="h-4 w-4" strokeWidth={1.5} /> Funds secured in escrow via Stripe &amp; Razorpay
          </motion.div>
        </div>

        {/* floating glass cards */}
        <div className="relative mx-auto h-[30rem] w-full max-w-md">
          <motion.div initial={{ opacity: 0, rotate: 6, y: 40 }} animate={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ duration: 0.9, ease }} whileHover={{ rotate: 0, scale: 1.02 }}
            className="absolute inset-x-6 top-8">
            <GlassPanel className="p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-brand-gradient p-[2px]">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-base font-display text-lg">AM</div>
                </div>
                <div className="flex-1">
                  <p className="flex items-center gap-1 font-medium">Aanya Mehta <BadgeCheck className="h-4 w-4 text-sky-400" /></p>
                  <p className="text-xs text-white/50">Lifestyle · Ahmedabad</p>
                </div>
                <AuthScoreRing score={92} />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[["Followers", 148, "K"], ["Eng. rate", 5.8, "%"], ["Match", 96, "%"]].map(([l, v, s]) => (
                  <div key={l as string} className="rounded-2xl bg-white/5 p-3">
                    <p className="font-display text-lg font-semibold">
                      <CountUp to={v as number} decimals={v === 5.8 ? 1 : 0} suffix={s as string} />
                    </p>
                    <p className="text-[11px] text-white/50">{l}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.7, ease }}
            className="absolute -right-2 bottom-24 animate-float">
            <GlassPanel className="flex items-center gap-3 px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/20"><Wallet className="h-5 w-5 text-emerald-400" strokeWidth={1.5} /></span>
              <div><p className="text-sm font-medium">Payout released</p><p className="text-xs text-emerald-400 tabular">+ ₹45,000</p></div>
            </GlassPanel>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.7, ease }}
            className="absolute -left-2 bottom-2 animate-float [animation-delay:-4s]">
            <GlassPanel className="flex items-center gap-3 px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-magenta/20"><BarChart3 className="h-5 w-5 text-brand-magenta" strokeWidth={1.5} /></span>
              <div><p className="text-sm font-medium">Engagement</p><p className="text-xs text-emerald-400 tabular">+12.4% this week</p></div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/5 py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex min-w-max animate-marquee gap-16 pr-16">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display text-xl text-white/30">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-20 md:grid-cols-4">
        <StatCard label="Verified creators" value={12480} delta="+8.2% MTD" />
        <StatCard label="Paid to creators" value={2.4} decimals={1} prefix="₹" suffix="Cr" delta="+21%" />
        <StatCard label="Avg. engagement" value={5.4} decimals={1} suffix="%" delta="+0.6 pts" />
        <StatCard label="On-time payouts" value={99.2} decimals={1} suffix="%" />
      </section>

      {/* BENTO FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 pb-24">
        <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-2xl font-display text-4xl font-semibold md:text-5xl">
          Everything to run influencer marketing, <span className="text-gradient">in one place.</span>
        </motion.h2>

        <div className="mt-12 grid auto-rows-[15rem] gap-4 md:grid-cols-6">
          {[
            { t: "Fake-follower auditor", d: "0–100 authenticity score from engagement ratios, growth anomalies and comment quality.", icon: ShieldCheck, span: "md:col-span-3 md:row-span-2", ring: true },
            { t: "AI matchmaking", d: "Match % with reasoning chips, from niche semantics and past results.", icon: Sparkles, span: "md:col-span-3" },
            { t: "Escrow payments", d: "Milestone-based, released only when you approve.", icon: Wallet, span: "md:col-span-3" },
            { t: "Live analytics & ROI", d: "Reach, clicks, saves and estimated ROI via Instagram API.", icon: BarChart3, span: "md:col-span-2" },
            { t: "Live media kits", d: "Auto-updating, one-click PDF.", icon: BadgeCheck, span: "md:col-span-2" },
            { t: "Kanban workspace", d: "Applied → Live in one board.", icon: Sparkles, span: "md:col-span-2" },
          ].map((f, i) => (
            <motion.div key={f.t} variants={reveal} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
              whileHover={{ y: -6 }} className={f.span}>
              <GlassPanel className="group relative flex h-full flex-col justify-between overflow-hidden p-6">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <f.icon className="h-6 w-6 text-brand-magenta" strokeWidth={1.5} />
                {f.ring && <div className="self-center"><AuthScoreRing score={87} size={140} /></div>}
                <div>
                  <h3 className="font-display text-xl font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-white/55">{f.d}</p>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="mx-auto max-w-5xl px-6 pb-24">
        <GlassPanel className="grid gap-8 p-10 md:grid-cols-2">
          <div>
            <ShieldCheck className="h-10 w-10 text-emerald-400" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-3xl font-semibold">Bank-grade trust, by default</h2>
            <p className="mt-2 text-white/60">Encrypted tokens, 2FA, role-based access and audited payments.</p>
          </div>
          <ul className="space-y-3 text-sm text-white/70">
            {["AES-256 encrypted Instagram tokens", "Escrow via Stripe Connect / Razorpay", "We never store card data", "Full audit logs on payments & disputes"].map((x) => (
              <li key={x} className="flex items-center gap-2"><Lock className="h-4 w-4 text-emerald-400" strokeWidth={1.5} />{x}</li>
            ))}
          </ul>
        </GlassPanel>
      </section>

      {/* CTA */}
      <section id="pricing" className="px-6 pb-28 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold md:text-6xl">
          Ready to find your <span className="text-gradient">next creator?</span>
        </h2>
        <div className="mt-8 flex justify-center gap-3">
          <Button size="lg">Get started free</Button>
          <Button size="lg" variant="glass">Book a demo</Button>
        </div>
      </section>
    </main>
  );
}