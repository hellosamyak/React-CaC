import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, isCompleted: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl"
    >
      <input
        type="text"
        placeholder="Add Todo..."
        className="min-w-0 flex-1 rounded-2xl border border-transparent bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(56,189,248,0.3)] transition hover:brightness-110 active:scale-[0.98]"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
