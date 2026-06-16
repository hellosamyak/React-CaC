// step 1
import { createSlice, nanoid } from "@reduxjs/toolkit";

// step 2
const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

// step 3
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
  },
});

// step 4
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// finally
export default todoSlice.reducer;
