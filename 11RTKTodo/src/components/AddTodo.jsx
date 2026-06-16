import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mb-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-inner shadow-slate-900/50 sm:flex-row sm:items-center"
    >
      <input
        type="text"
        className="h-12 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 text-base text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 px-6 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
