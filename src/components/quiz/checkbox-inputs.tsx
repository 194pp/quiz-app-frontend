import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCheckboxValues } from "@/store/slice/quiz";
import { TAnswerType } from "@/types/global";

export const CheckboxInputs = ({
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

  if (answerType !== "checkbox") return null;

  return (
    <div>
      {answerOptions?.map((option, index) => (
        <div key={index} className="flex items-center gap-4 p-2">
          <Checkbox
            id={`checkbox-${index}-${quizId}`}
            value={index}
            checked={quiz?.checkboxValues?.includes(index)}
            className="data-[state=checked]:bg-sky-500"
            onCheckedChange={(checked) => {
              dispatch(
                setCheckboxValues({
                  id: quizId,
                  value: index,
                })
              );
            }}
          />
          <Label
            htmlFor={`checkbox-${index}-${quizId}`}
            className="cursor-pointer lg:text-2xl"
          >
            {option}
          </Label>
        </div>
      ))}
    </div>
  );
};
