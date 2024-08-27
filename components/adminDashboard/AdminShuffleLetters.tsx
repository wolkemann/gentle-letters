"use client";
import { isReplyTimePassed } from "@/utils/dateFormatters";
import Window from "../ui/window";
import { Tables } from "@/types/supabase";
import { useMemo } from "react";

type AdminShuffleLettersProps = {
  letters: Tables<"letters">[] | undefined | null;
};

export default function AdminShuffleLetters({
  letters,
}: AdminShuffleLettersProps) {
  const expiredLetters = useMemo(
    () => letters?.filter((letter) => isReplyTimePassed(letter.created_at)),
    [letters],
  );

  console.log(expiredLetters);

  return (
    <Window title="Shuffle Letters" className="w-full md:w-[700px]"></Window>
  );
}
