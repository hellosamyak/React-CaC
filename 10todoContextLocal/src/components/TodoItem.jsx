import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, toggleComplete, deleteTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`group flex items-center gap-3 rounded-[1.5rem] border px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition duration-300 ${
        todo.isCompleted
          ? "border-emerald-400/20 bg-emerald-400/10"
          : "border-white/10 bg-white/10 backdrop-blur-xl"
      }`}
    >
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer accent-cyan-400"
        checked={todo.isCompleted}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`min-w-0 w-full rounded-2xl border bg-transparent px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-400 ${
          isTodoEditable
            ? "border-white/15 bg-slate-950/40"
            : "border-transparent"
        } ${todo.isCompleted ? "line-through opacity-60" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/80 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/80 transition hover:border-rose-400/30 hover:bg-rose-400/10 hover:text-white"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
