import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { Button } from "@/components/ui/button";
import { THighscore } from "@/types/global";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/leaderboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery<THighscore[]>({
    queryKey: ["quizzes"],
    queryFn: async () => {
      const data = await fetch(`api/highscore`).then((res) => res.json());
      return data;
    },
  });

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex flex-1 flex-col gap-2 px-4 py-2 lg:w-[1000px]">
        <LeaderboardTable highscores={data || []} />
      </div>
    </div>
  );
}
