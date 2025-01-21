import { useAppSelector } from "@/store/hooks";
import { CustomProgress } from "../custom/custom-progress";
import { useMemo } from "react";

export const QuizProgress = () => {
  const quiz = useAppSelector((state) => state.quiz);

  const memoizedProgressCount = useMemo(() => {
    return quiz.filter(({ checkboxValues, radioValue, textValue }) => {
      return !!checkboxValues?.length || !!radioValue || !!textValue;
    }).length;
  }, [quiz]);

  const value = (memoizedProgressCount * 100) / quiz.length;

  if (quiz.length === 0) return null;

  return (
    <div>
      <CustomProgress indicatorColor="bg-sky-500" value={value || -1} />
    </div>
  );
};
