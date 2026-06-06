import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="px-4 py-4 lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-11 w-auto rounded-full ring-1 ring-white/10"
              alt="Logo"
            />
            <span className="hidden text-sm font-semibold tracking-[0.24em] text-slate-200 sm:inline">
              ROUTER LAB
            </span>
          </Link>
          <div className="flex items-center gap-3 lg:order-2">
            <Link
              to="#"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400/60"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:translate-y-[-1px] hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-300/60"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 text-sm font-medium backdrop-blur lg:mt-0 lg:flex-row lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 transition duration-200 ${isActive ? "bg-white/10 text-white shadow-sm shadow-orange-500/10" : "text-slate-300 hover:bg-white/5 hover:text-white"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 transition duration-200 ${isActive ? "bg-white/10 text-white shadow-sm shadow-orange-500/10" : "text-slate-300 hover:bg-white/5 hover:text-white"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 transition duration-200 ${isActive ? "bg-white/10 text-white shadow-sm shadow-orange-500/10" : "text-slate-300 hover:bg-white/5 hover:text-white"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 transition duration-200 ${isActive ? "bg-white/10 text-white shadow-sm shadow-orange-500/10" : "text-slate-300 hover:bg-white/5 hover:text-white"}`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
