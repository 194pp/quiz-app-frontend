import { BACKEND_URL } from "@/constants/backend";
import { useAppSelector } from "@/store/hooks";
import { useMutation } from "@tanstack/react-query";

export const usePostResults = () => {
  const quiz = useAppSelector((state) => state.quiz);
  const user = useAppSelector((state) => state.user);
  const requestBody = {
    email: user.email,
    answers: quiz.map((quiz) => ({
      id: quiz.id,
      selectableAnswers: quiz.radioValue
        ? [quiz.radioValue]
        : quiz.checkboxValues?.length
          ? [...quiz.checkboxValues].sort((a, b) => a - b)
          : undefined,
      textAnswer: quiz.textValue?.toLowerCase(),
    })),
  };

  return useMutation({
    mutationFn: () => {
      return fetch(`${BACKEND_URL}/api/quiz`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
};
