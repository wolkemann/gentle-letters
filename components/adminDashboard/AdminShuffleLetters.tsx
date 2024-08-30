"use client";
import {
  DateFormats,
  getDateAsText,
  isReplyTimePassed,
} from "@/utils/dateFormatters";
import Window from "../ui/window";
import { Tables } from "@/types/supabase";
import { useMemo, useState } from "react";
import { Shuffle } from "lucide-react";
import { getLetterStatusForAdmin } from "@/utils/admin/getLetterStatusForAdmin";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { getRandomUserId } from "@/utils/getRandomUserId";
import dayjs from "dayjs";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";

type AdminShuffleLettersProps = {
  letters: Tables<"letters">[] | undefined | null;
};

export default function AdminShuffleLetters({
  letters,
}: AdminShuffleLettersProps) {
  const [isWindowDisabled, setIsWindowDisabled] = useState<boolean>(false);
  const router = useRouter();
  // invalid letters are letters that have no recipientId or time for reply is expired without a replyId
  const invalidLetters = useMemo(
    () =>
      letters?.filter(
        ({ replyId, created_at, recipientId }) =>
          (isReplyTimePassed(created_at) && replyId === null) ||
          recipientId === "",
      ),
    [letters],
  );

  const handleShuffle = async (letter: Tables<"letters">) => {
    const supabase = createClient();
    const recipientId = letter.recipientId || letter.authorId;

    setIsWindowDisabled(true);
    const { data: recipients } = await supabase
      .from("profiles")
      .select("*")
      .not("id", "eq", letter.authorId)
      .not("id", "eq", recipientId);

    const newRecipient = getRandomUserId(recipients);

    if (!newRecipient) {
      toast.error("No new recipient is available for this letter", {
        duration: 2000,
      });
      setIsWindowDisabled(false);
      return;
    }

    await supabase
      .from("letters")
      .update({
        recipientId: newRecipient.id,
        was_read: false,
        created_at: getDateAsText(dayjs(), DateFormats.TIMESTAMP),
      })
      .eq("id", letter.id);

    toast.success("Shuffle successful!", {
      duration: 2000,
      onAutoClose: () => setIsWindowDisabled(false),
    });

    router.refresh();
  };

  return (
    <Window title="Shuffle Letters">
      <div className="relative">
        {isWindowDisabled && (
          <div className="absolute w-full h-full bg-pink-300 opacity-35 cursor-progress" />
        )}
        {invalidLetters?.map((letter) => (
          <div
            key={letter.id}
            className="p-3 flex justify-between items-center text-xs md:text-sm bg-pink-300 rounded shadow"
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
              className="rounded-full w-7 h-7 md:w-10 md:h-10"
            >
              <Shuffle className="w-3 md:w-5" />
            </Button>
          </div>
        ))}
      </div>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "text-sm flex items-center gap-3 md:gap-1 bg-window-innerbg-color p-3 rounded button-shadow border border-button-border-color",
          },
        }}
        position="top-center"
      />
    </Window>
  );
}
