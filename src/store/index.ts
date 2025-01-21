import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slice/quiz";
import userReducer from "./slice/user";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
