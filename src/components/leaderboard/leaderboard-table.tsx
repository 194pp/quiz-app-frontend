import { THighscore } from "@/types/global";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

type TLeaderboardTableProps = {
  highscores: THighscore[];
};

export const LeaderboardTable = ({ highscores }: TLeaderboardTableProps) => {
  const assignColor = (score: number) => {
    if (score < 5) return "bg-red-500";
    if (score < 7) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {highscores.map((highscore) => (
          <TableRow key={highscore.id}>
            <TableCell>{highscore.email}</TableCell>
            <TableCell className="text-right">
              <Badge variant="outline" className={assignColor(highscore.score)}>
                {highscore.score}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Average score</TableCell>
          <TableCell className="text-right">
            <Badge
              variant="outline"
              className={`text-lg ${assignColor(
                highscores.reduce(
                  (acc, highscore) => acc + highscore.score,
                  0
                ) / highscores.length
              )}`}
            >
              {Math.round(
                highscores.reduce(
                  (acc, highscore) => acc + highscore.score,
                  0
                ) / highscores.length
              )}
            </Badge>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
