import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { setRadioValue } from "@/store/slice/quiz";
import { Label } from "../ui/label";
import { TAnswerType } from "@/types/global";

export const RadioInputs = ({
  quizId,
  answerOptions,
  answerType,
}: {
  quizId: string;
  answerOptions?: string[];
  answerType?: TAnswerType;
}) => {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) =>
    state.quiz.find((quiz) => quiz.id === quizId)
  );

  if (answerType !== "radio") return null;

  return (
    <RadioGroup value={`${quiz?.radioValue ?? ""}`}>
      {answerOptions?.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <RadioGroupItem
            value={index.toString()}
            id={`radio-${index}-${quizId}`}
            onClick={() => {
              dispatch(setRadioValue({ id: quizId, value: index.toString() }));
            }}
          />
          <Label htmlFor={`radio-${index}-${quizId}`}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};
