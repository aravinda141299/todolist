import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoslice";
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = configureStore({
  reducer: todosReducer
  });
export const composeEnhancers = composeWithDevTools({
    });
 


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;