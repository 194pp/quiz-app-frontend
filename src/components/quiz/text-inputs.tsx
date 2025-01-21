import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTextValues } from "@/store/slice/quiz";
import { Input } from "../ui/input";
import { TAnswerType } from "@/types/global";

type TTextInputProps = {
  quizId: string;
  answerType?: TAnswerType;
};

export const TextInputs = ({ quizId, answerType }: TTextInputProps) => {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) =>
    state.quiz.find((quiz) => quiz.id === quizId)
  );

  if (answerType !== "text") return null;

  return (
    <div className="">
      <Input
        id={`text-${quizId}`}
        placeholder="Answer here"
        value={quiz?.textValue}
        className="p-2 lg:px-4 lg:py-8 lg:text-2xl"
        onChange={(e) => {
          dispatch(setTextValues({ id: quizId, value: e.target.value }));
        }}
      />
    </div>
  );
};
