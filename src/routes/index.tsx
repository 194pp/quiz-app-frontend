import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { TQuiz } from "@/types/global";
import { QuizCard } from "@/components/quiz/quiz-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQuizzes } from "@/store/slice/quiz";
import { useEffect, useState } from "react";
import { QuizProgress } from "@/components/quiz/quiz-progress";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const { data } = useQuery<TQuiz[]>({
    queryKey: ["quizzes"],
    queryFn: async () => {
      const data = await fetch(`api/quiz`).then((res) => res.json());
      return data;
    },
  });

  useEffect(() => {
    if (data && quiz.length === 0) {
      const initialState = data.map((quiz) => ({
        id: quiz.id,
      }));
      dispatch(setQuizzes(initialState));
    }
  }, [data]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap() + 1);

    emblaApi.on("select", () => {
      setCurrent(emblaApi.selectedScrollSnap() + 1);
    });
  }, [emblaApi]);

  return (
    <div className="flex flex-1 flex-col gap-2 px-4 py-2">
      {/* <pre>{JSON.stringify(quiz, null, 2)}</pre> */}
      <Carousel setApi={setEmblaApi}>
        <CarouselContent>
          {data?.map((quiz, index) => (
            <CarouselItem
              key={quiz.id}
              className="flex items-center justify-center"
            >
              <QuizCard
                {...quiz}
                index={index}
                onPrevious={() => emblaApi?.scrollPrev()}
                onNext={() => emblaApi?.scrollNext()}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <QuizProgress />
    </div>
  );
}
