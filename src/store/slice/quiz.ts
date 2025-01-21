import { TQuiz } from "@/types/global";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TQuizSlice = {
  id: string;
  radioValue?: string;
  checkboxValues?: number[];
  textValue?: string;
}[];

const initialState: TQuizSlice = [];

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizzes: (state, action: PayloadAction<TQuizSlice>) => {
      return action.payload;
    },
    setRadioValue: (
      state,
      action: PayloadAction<{
        id: string;
        value: TQuizSlice[number]["radioValue"];
      }>
    ) => {
      const { id, value } = action.payload;
      const quiz = state.find((quiz) => quiz.id === id);
      if (quiz) {
        quiz.radioValue = value;
      }
    },
    setCheckboxValues: (
      state,
      action: PayloadAction<{
        id: string;
        value: number;
      }>
    ) => {
      const { id, value } = action.payload;
      const quiz = state.find((quiz) => quiz.id === id);
      console.log("test");
      if (!quiz) return state;
      if (!quiz?.checkboxValues) {
        quiz.checkboxValues = [value];
      }

      if (quiz?.checkboxValues?.includes(value)) {
        quiz.checkboxValues = quiz.checkboxValues.filter((v) => v !== value);
      } else {
        quiz.checkboxValues?.push(value);
      }
      // return state;
    },
    setTextValues: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      const { id, value } = action.payload;
      const quiz = state.find((quiz) => quiz.id === id);
      if (quiz) {
        quiz.textValue = value;
      }
    },
  },
});

export const { setQuizzes, setRadioValue, setCheckboxValues, setTextValues } =
  quizSlice.actions;
export default quizSlice.reducer;
