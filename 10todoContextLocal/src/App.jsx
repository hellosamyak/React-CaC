import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos"); // local storage (getItem) shifted here in the state itself for improved performance

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const activeCount = todos.length - completedCount;

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo,
      ),
    );
  };

  // local storage (setItem)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen overflow-hidden bg-[#08111f] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(167,139,250,0.16),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.12),_transparent_32%)]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 lg:p-10">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="mb-2 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                    Todo Command Center
                  </p>
                  <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                    Manage your day with a calm, cinematic workspace.
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                    Capture tasks, focus on what matters, and keep momentum in a
                    clean, immersive interface.
                  </p>
                </div>

                <div className="grid min-w-[11rem] grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-slate-950/40 p-3 text-center">
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      Total
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-white">
                      {todos.length}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      Active
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-emerald-300">
                      {activeCount}
                    </p>
                  </div>
                  <div className="col-span-2 rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      Completed
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-cyan-300">
                      {completedCount}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                {/* Todo form goes here */}
                <TodoForm />
              </div>

              <div className="space-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            </section>

            <aside className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                  Workflow
                </p>
                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    Prioritize the next action, keep edits short, and mark items
                    done as soon as they leave your focus.
                  </div>
                  <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/8 p-4 text-cyan-50">
                    The app stores your list locally, so the interface stays
                    fast and your tasks remain available on refresh.
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(99,102,241,0.14),rgba(16,185,129,0.16))] p-5 text-sm text-slate-100 shadow-inner shadow-white/5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-200/70">
                  Focus mode
                </p>
                <p className="mt-2 text-base font-semibold">
                  Clean surfaces, subtle glow, no extra friction.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
