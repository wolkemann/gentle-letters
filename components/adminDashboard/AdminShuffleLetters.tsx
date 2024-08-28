"use client";
import { getDateAsText, isReplyTimePassed } from "@/utils/dateFormatters";
import Window from "../ui/window";
import { Tables } from "@/types/supabase";
import { useMemo } from "react";
import { Shuffle } from "lucide-react";
import { getLetterStatusForAdmin } from "@/utils/admin/getLetterStatusForAdmin";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type AdminShuffleLettersProps = {
  letters: Tables<"letters">[] | undefined | null;
};

export default function AdminShuffleLetters({
  letters,
}: AdminShuffleLettersProps) {
  const router = useRouter();
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

  const handleShuffle = async (letter: Tables<"letters">) => {
    const supabase = createClient();

    const recipientId = letter.recipientId || letter.authorId;

    const { data: recipients } = await supabase
      .from("profiles")
      .select("*")
      .not("id", "eq", letter.authorId)
      .not("id", "eq", recipientId);

    const newRecipient = recipients
      ? recipients[Math.floor(Math.random() * recipients.length)]
      : null;

    if (!newRecipient) return;

    await supabase
      .from("letters")
      .update({ recipientId: newRecipient.id })
      .eq("id", letter.id);

    router.refresh();
  };

  return (
    <Window title="Shuffle Letters" className="w-full md:w-[700px]">
      <div>
        {invalidLetters?.map((letter) => (
          <div
            key={letter.id}
            className="p-3 flex justify-between items-center text-sm bg-pink-300 rounded shadow"
          >
            <div>
              {getDateAsText(letter.created_at)}
              <span className="ml-3">
                <strong>{getLetterStatusForAdmin(letter)}</strong>
              </span>
            </div>
            <Button
              onClick={() => handleShuffle(letter)}
              size="icon"
              className="rounded-full"
            >
              <Shuffle className="w-[20px]" />
            </Button>
          </div>
        ))}
      </div>
    </Window>
  );
}
