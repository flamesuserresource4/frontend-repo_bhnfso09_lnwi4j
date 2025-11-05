import { Rocket, Users } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-white to-teal-50/60">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-60" />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white">
            <Users className="h-6 w-6" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-teal-700">WisdomWorks</span>
        </div>
        <div className="hidden gap-6 md:flex">
          <a href="#how" className="text-sm text-slate-600 hover:text-teal-700">How it works</a>
          <a href="#explore" className="text-sm text-slate-600 hover:text-teal-700">Explore experts</a>
          <a href="#book" className="text-sm text-slate-600 hover:text-teal-700">Book</a>
          <a href="#dashboard" className="text-sm text-slate-600 hover:text-teal-700">Dashboard</a>
          <a href="#stories" className="text-sm text-slate-600 hover:text-teal-700">Stories</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-teal-600/20 bg-white px-4 py-2 text-sm font-medium text-teal-700 hover:border-teal-600/40">Sign in</button>
          <button className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800">
            <Rocket className="h-4 w-4" />
            Get Started
          </button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:gap-12 md:pb-28 md:pt-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">India’s network of retired pros</span>
          <h1 className="mt-4 font-inter text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
            Experience Meets Opportunity
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            WisdomWorks connects retired professionals in India with people and companies that value their lifetime of expertise — for mentoring, consulting, and flexible part‑time roles.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#join" className="rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-800">Join as Professional</a>
            <a href="#explore" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-teal-200 hover:text-teal-800">Find an Expert</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-600" /> Verified Profiles</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Secure Payments</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto h-72 w-full max-w-md rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 md:h-96 md:max-w-lg">
            <div className="grid h-full grid-rows-3 gap-3">
              <div className="rounded-xl bg-gradient-to-tr from-teal-600 to-teal-400 p-4 text-white">
                <p className="text-sm opacity-90">“Mentored 50+ startups in FinTech”</p>
                <p className="mt-2 text-lg font-semibold">Former Bank Executive</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400/90 p-4 text-white">
                  <p className="text-sm opacity-90">“30 yrs in manufacturing ops”</p>
                  <p className="mt-2 font-semibold">Plant Head</p>
                </div>
                <div className="rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700 p-4 text-white">
                  <p className="text-sm opacity-90">“Ex-Professor, AI/ML”</p>
                  <p className="mt-2 font-semibold">Academic Mentor</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-600">Real people. Real expertise. Join a community that values your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
