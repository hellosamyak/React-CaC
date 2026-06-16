import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1f2937,#0b1120_55%)] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_30px_100px_-30px_rgba(56,189,248,0.45)] backdrop-blur-xl sm:p-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Redux Toolkit
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Modern Todo Workspace
          </h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Plan tasks, edit quickly, and keep your day in flow.
          </p>
        </header>

        <AddTodo />
        <Todos />
      </section>
    </main>
  );
}

export default App;
