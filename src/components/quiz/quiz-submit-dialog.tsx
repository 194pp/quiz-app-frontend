import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useMemo, useState } from "react";
import { isEmailValid } from "@/functions/regex-fns";
import { setEmail } from "@/store/slice/user";
import { toast } from "sonner";
import { usePostResults } from "@/hooks/use-post-results";
import { DialogClose } from "@radix-ui/react-dialog";
import { useNavigate } from "@tanstack/react-router";

export const QuizSubmitDialog = () => {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);
  const user = useAppSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isSuccess } = usePostResults();
  const navigate = useNavigate();

  const memoizedProgressCount = useMemo(() => {
    return quiz.filter(({ checkboxValues, radioValue, textValue }) => {
      return !!checkboxValues?.length || !!radioValue || !!textValue;
    }).length;
  }, [quiz]);

  const isDisabled = memoizedProgressCount !== quiz.length;

  const handleSubmit = () => {
    if (!isEmailValid(user.email)) {
      toast("Email is not valid", {
        description: `Please enter a valid email`,
        className: "bg-red-500 border-red-800 text-white",
      });
      return;
    }
    mutate();
  };

  useEffect(() => {
    if (isSuccess) {
      toast("Results submitted successfully", {
        description: "Thank you for your participation",
        className: "bg-green-500 border-green-800 text-white",
      });
      setIsOpen(false);
      navigate({
        to: "/leaderboard",
      });
    }
  }, [isSuccess]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={"lg"}
          disabled={isDisabled}
          onClick={() => setIsOpen(true)}
          className="bg-sky-500 lg:h-16 lg:text-2xl"
        >
          Submit
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-black sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogDescription>
            Please enter your email to submit your answers
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Your email
            </Label>
            <Input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => {
                dispatch(setEmail(e.target.value));
              }}
              placeholder="Enter here"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline" className="bg-red-500">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit}>
            Submit your answers
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
