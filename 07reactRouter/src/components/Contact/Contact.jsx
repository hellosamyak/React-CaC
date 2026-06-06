export default function Contact() {
  return (
    <section className="grid gap-6 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
      <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-3 text-base font-medium text-slate-300 sm:text-lg">
          Fill in the form to start a conversation
        </p>

        <div className="mt-8 space-y-4 text-slate-300">
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="mt-1 h-8 w-8 text-orange-300"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-sm font-medium leading-6">
              Acme Inc, Street, State, Postal Code
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="mt-1 h-8 w-8 text-orange-300"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-sm font-medium leading-6">+44 1234567890</div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="mt-1 h-8 w-8 text-orange-300"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="text-sm font-medium leading-6">info@acme.org</div>
          </div>
        </div>
      </div>

      <form className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 sm:p-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-400/60 focus:bg-white/10"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-400/60 focus:bg-white/10"
            />
          </div>

          <div>
            <label htmlFor="tel" className="sr-only">
              Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-400/60 focus:bg-white/10"
            />
          </div>

          <button
            type="submit"
            className="inline-flex rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:translate-y-px hover:shadow-orange-500/30"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
