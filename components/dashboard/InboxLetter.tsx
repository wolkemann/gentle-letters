import { getDateAsText } from "@/utils/dateFormatters";
import Window from "../ui/window";
import { MailOpen, MailWarning, Reply } from "lucide-react";

type InboxLetterProps = {
  author: string;
  date: string;
  wasRead: boolean;
};

export default function InboxLetter({
  author,
  date,
  wasRead,
}: InboxLetterProps) {
  return (
    <Window borderless className="p-2 cursor-pointer bg-window-innerbg-color">
      <div className="text-sm">{getDateAsText(date)}</div>
      <div className="w-full flex items-center text-sm md:text-base">
        <div>{wasRead ? <MailOpen /> : <MailWarning />}</div>
        <div className="ml-3">
          from <strong>{author}</strong>
        </div>
      </div>
    </Window>
  );
}
