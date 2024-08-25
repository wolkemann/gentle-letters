import { Conversation } from "@/types/conversations";
import { getDateAsText } from "@/utils/dateFormatters";
import { getArchiveStatus } from "@/utils/getArchiveStatus";
import {
  CircleCheck,
  CircleEllipsis,
  CircleHelp,
  Mail,
  MessageSquareReply,
  MoveRight,
  Sticker,
} from "lucide-react";
import LetterSticker from "../LetterSticker";

type ArchiveItemProps = {
  conversation: Conversation;
  onClick: () => void;
};

export default function ArchiveItem({
  conversation,
  onClick,
}: ArchiveItemProps) {
  const { date, type, helperInteraction, sticker } = conversation;

  return (
    <div
      onClick={onClick}
      className={`text-sm shadow cursor-pointer ${type === "letter" ? "bg-pink-300" : "bg-window-bg-color"} rounded p-3`}
    >
      <div>{getDateAsText(date || "")}</div>
      <div className="grid grid-cols-6  place-items-center">
        <Mail />
        <MoveRight />
        {helperInteraction.author ? (
          <MessageSquareReply />
        ) : (
          <CircleHelp className=" opacity-40" />
        )}
        <MoveRight />
        {sticker ? <Sticker /> : <CircleHelp className=" opacity-40" />}
        <LetterSticker className=" place-self-end" image={sticker} />
      </div>
      <div className="mt-2">{getArchiveStatus(conversation)}</div>
    </div>
  );
}
