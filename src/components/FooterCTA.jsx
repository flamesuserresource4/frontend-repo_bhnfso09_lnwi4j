export default function FooterCTA() {
  return (
    <footer className="mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="relative overflow-hidden rounded-3xl border border-teal-200 bg-gradient-to-tr from-teal-600 to-teal-500 p-8 text-white shadow-lg">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/30 blur-3xl" aria-hidden="true" />
          <h3 className="font-inter text-2xl font-bold tracking-tight md:text-3xl">Join WisdomWorks – Experience Never Retires.</h3>
          <p className="mt-2 max-w-2xl text-teal-50">
            Be part of India’s trusted network of retired professionals. Share your wisdom, stay active, and earn on your terms.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#join" className="rounded-full bg-white/95 px-5 py-3 text-sm font-semibold text-teal-800 shadow-sm hover:bg-white">Join as Professional</a>
            <a href="#explore" className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600">Find an Expert</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} WisdomWorks. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-700">Privacy</a>
            <a href="#" className="hover:text-teal-700">Terms</a>
            <a href="#" className="hover:text-teal-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
