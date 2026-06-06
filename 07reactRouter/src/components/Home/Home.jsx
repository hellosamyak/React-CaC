import { Link } from "react-router";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.12),_transparent_28%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              React Router Demo
            </div>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                A polished landing space for your routed app.
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Clean motion, balanced spacing, and a warm accent system make
                the navigation feel intentional while keeping the existing app
                logic untouched.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:translate-y-[-1px] hover:shadow-orange-500/30"
                to="/about"
              >
                Explore about
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                to="/contact"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-3 shadow-xl shadow-black/20">
              <img
                className="h-72 w-full rounded-[1.5rem] object-cover"
                src="https://images.pexels.com/photos/15228018/pexels-photo-15228018.jpeg"
                alt="hero preview"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-medium text-slate-400">Flow</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  Smooth
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-medium text-slate-400">Accent</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  Warm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-xl shadow-black/20">
          <img
            className="h-full min-h-72 w-full rounded-[1.5rem] object-cover"
            src="https://images.pexels.com/photos/19820500/pexels-photo-19820500.jpeg"
            alt="secondary preview"
          />
        </div>
        <div className="flex items-center rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 shadow-xl shadow-black/20">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Styled router shell
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Elegant, readable, and route-friendly.
            </h2>
            <p className="max-w-prose text-slate-300">
              Each page shares the same backdrop, spacing rhythm, and accent
              treatment so the app feels like one product instead of separate
              examples.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
