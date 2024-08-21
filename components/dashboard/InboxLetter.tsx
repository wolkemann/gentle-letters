import { getDateAsText } from "@/utils/dateFormatters";
import Window from "../ui/window";
import { MailOpen, MailWarning, Reply } from "lucide-react";
import Link from "next/link";

type InboxLetterProps = {
  id: number;
  author: string | null | undefined;
  date: string;
  wasRead: boolean;
};

export default function InboxLetter({
  id,
  author,
  date,
  wasRead,
}: InboxLetterProps) {
  return (
    <Window
      borderless
      className="p-2 cursor-pointer bg-window-innerbg-color border-window-innerborder-color"
    >
      <Link href={`/dashboard/reply/${id}`}>
        <div className="text-sm">{getDateAsText(date)}</div>
        <div className="w-full flex items-center text-sm md:text-base">
          <div>{wasRead ? <MailOpen /> : <MailWarning />}</div>
          <div className="ml-2">
            Letter from <strong>{author}</strong>
          </div>
        </div>
      </Link>
    </Window>
  );
}
