import { TQuiz } from "@/types/global";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckboxInputs } from "./checkbox-inputs";
import { RadioInputs } from "./radio-inputs";
import { TextInputs } from "./text-inputs";
import { useMutation } from "@tanstack/react-query";
import { QuizSubmitDialog } from "./quiz-submit-dialog";

type TQuizCardProps = TQuiz & {
  index: number;
  onPrevious: () => void;
  onNext: () => void;
};

export const QuizCard = ({
  index,
  onPrevious,
  onNext,
  ...quiz
}: TQuizCardProps) => {
  const answerType =
    quiz.isRadioOptions === undefined
      ? "text"
      : quiz.isRadioOptions
        ? "radio"
        : "checkbox";

  return (
    <Card className="flex h-[calc(100dvh-100px)] w-full flex-col lg:w-[1000px] lg:max-w-full lg:p-4">
      <CardHeader>
        <CardTitle className="opacity-50 lg:text-4xl">
          Question {index + 1}
        </CardTitle>
        <CardDescription className="font-bold lg:text-8xl">
          {quiz.question}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-center">
        <form className="lg:text-2xl">
          <RadioInputs
            quizId={quiz.id}
            answerOptions={quiz.answerOptions}
            answerType={answerType}
          />

          <CheckboxInputs
            quizId={quiz.id}
            answerOptions={quiz.answerOptions}
            answerType={answerType}
          />

          <TextInputs quizId={quiz.id} answerType={answerType} />
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size={"lg"}
          className="lg:h-16 lg:text-2xl"
          onClick={onPrevious}
        >
          Back
        </Button>

        <QuizSubmitDialog />

        <Button
          variant="outline"
          size={"lg"}
          className="lg:h-16 lg:text-2xl"
          onClick={onNext}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};
