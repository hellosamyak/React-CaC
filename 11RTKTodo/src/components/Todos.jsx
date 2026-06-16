import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditTodo = (todo) => {
    const newText = window.prompt("Edit todo", todo.text);

    if (newText === null) {
      return;
    }

    const trimmedText = newText.trim();

    if (!trimmedText) {
      return;
    }

    dispatch(updateTodo({ id: todo.id, text: trimmedText }));
  };

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white sm:text-xl">Todos</h2>
        <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          {todos.length} items
        </span>
      </div>

      <ul className="list-none space-y-3">
        {todos.map((todo) => (
          <li
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 transition hover:border-cyan-300/40 hover:bg-slate-800/70"
            key={todo.id}
          >
            <div className="truncate pr-3 text-sm font-medium text-slate-100 sm:text-base">
              {todo.text}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEditTodo(todo)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/35 bg-blue-500/20 text-blue-200 transition hover:bg-blue-500/35 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
                aria-label="Edit todo"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487a2.16 2.16 0 113.046 3.046L8.75 18.69l-4 1 1-4 11.112-11.202z"
                  />
                </svg>
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-300/35 bg-rose-500/20 text-rose-200 transition hover:bg-rose-500/35 focus:outline-none focus:ring-2 focus:ring-rose-300/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Todos;
