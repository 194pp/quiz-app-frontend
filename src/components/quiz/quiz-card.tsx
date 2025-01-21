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

type TQuizCardProps = TQuiz & { index: number };

export const QuizCard = ({ index, ...quiz }: TQuizCardProps) => {
  const answerType =
    quiz.isRadioOptions === undefined
      ? "text"
      : quiz.isRadioOptions
        ? "radio"
        : "checkbox";

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Question {index + 1}</CardTitle>
        <CardDescription>{quiz.question}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
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
        <Button variant="outline">Back</Button>
        <Button>Next</Button>
      </CardFooter>
    </Card>
  );
};
