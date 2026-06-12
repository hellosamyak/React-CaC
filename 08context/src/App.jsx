import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContext.jsx";

function App() {
  return (
    <UserContextProvider>
      <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center justify-center">
          <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Context demo
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Sign in and share user state across components.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                This example uses React context to move the authenticated user
                from the login form into the profile panel.
              </p>
            </section>
            <div className="grid gap-6">
              <Login />
              <Profile />
            </div>
          </div>
        </div>
      </main>
    </UserContextProvider>
  );
}

export default App;
