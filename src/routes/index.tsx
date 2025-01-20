import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { TQuiz } from "@/types/query";
import { QuizCard } from "@/components/quiz/quiz-card";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { data } = useQuery<TQuiz[]>({
    queryKey: ["quizzes"],
    queryFn: () =>
      fetch("https://localhost:7268/api/quiz").then((res) => res.json()),
  });

  return (
    <div className="p-2">
      <h3 className="">Welcome Home!</h3>
      {data?.map((quiz) => <QuizCard quiz={quiz} />)}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
