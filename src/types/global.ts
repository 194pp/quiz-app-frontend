export type TQuiz = {
  id: string;
  question: string;
  answerOptions?: string[];
  isRadioOptions?: boolean;
  answerTextInputs?: number;
};

export type THighscore = {
  id: string;
  email: string;
  score: number;
};

export type TAnswerType = "radio" | "checkbox" | "text";
