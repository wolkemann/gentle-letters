"use client";
import { getDateAsText, isReplyTimePassed } from "@/utils/dateFormatters";
import Window from "../ui/window";
import { Tables } from "@/types/supabase";
import { useMemo } from "react";
import { Mail, Shuffle } from "lucide-react";
import { SubmitButton } from "../ui/submit-button";

type AdminShuffleLettersProps = {
  letters: Tables<"letters">[] | undefined | null;
};

export default function AdminShuffleLetters({
  letters,
}: AdminShuffleLettersProps) {
  // invalid letters are letters that have no recipientId or time for reply is expired without a replyId
  const invalidLetters = useMemo(
    () =>
      letters?.filter(
        ({ replyId, created_at, recipientId }) =>
          (isReplyTimePassed(created_at) && replyId === null) ||
          recipientId === null,
      ),
    [letters],
  );

  return (
    <Window title="Shuffle Letters" className="w-full md:w-[700px]">
      <div>
        {invalidLetters?.map((letter) => (
          <div
            key={letter.id}
            className="p-3 flex justify-between items-center text-sm bg-pink-300 rounded shadow"
          >
            <div>
              {getDateAsText(letter.created_at)}{" "}
              <span className="ml-3">Letter status</span>
            </div>
            <SubmitButton size="icon" className="rounded-full">
              <Shuffle className="w-[20px]" />
            </SubmitButton>
          </div>
        ))}
      </div>
    </Window>
  );
}
