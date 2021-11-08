import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../Models/Todo";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Todo[];

const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>): void {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.slice(index, 1);
    },
    },
});

export const { addTodo, removeTodo, } = todoslice.actions;
export default todoslice.reducer;