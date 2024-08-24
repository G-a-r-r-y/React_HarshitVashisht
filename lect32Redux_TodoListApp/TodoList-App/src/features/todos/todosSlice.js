import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "123d", title: "Play FootBall", completed: true },
  { id: "1xag", title: "Play Games", completed: false },
  { id: "23fh", title: "Learn Music", completed: false },
  { id: "155a", title: "Play Golf", completed: true },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   state.push(action.payload);
    // },

    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            completed: false,
          },
        };
      },
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleted: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
