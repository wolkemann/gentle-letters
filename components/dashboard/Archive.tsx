"use client";
import { Conversation } from "@/types/conversations";
import Window from "../ui/window";
import ArchiveItem from "./ArchiveItem";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Letter from "../Letter";
import { useState } from "react";
import LetterSticker from "../LetterSticker";

type ArchiveProps = {
  conversations: Conversation[];
};

type ArchiveLetter = {
  author: string | undefined | null;
  text: string | undefined | null;
};

type ArchiveReply = {
  author: string | undefined | null;
  text: string | undefined | null;
  sticker: string | undefined | null;
};

export default function Archive({ conversations }: ArchiveProps) {
  const [letterZIndex, setLetterZIndex] = useState<string>("z-50");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [letter, setLetter] = useState<ArchiveLetter>({
    author: null,
    text: null,
  });
  const [reply, setReply] = useState<ArchiveReply>({
    author: null,
    text: null,
    sticker: null,
  });

  return (
    <Window className="container w-screen md:w-[600px]">
      <div className="flex flex-col gap-1">
        {conversations.map((conv) => (
          <ArchiveItem
            key={conv.id}
            onClick={() => {
              if (conv.sticker && conv.type === "letter") {
                setLetterZIndex("z-50");
                setLetter({ author: conv?.author, text: conv.text });
                setReply({
                  author: conv.helperInteraction.author,
                  text: conv.helperInteraction.text,
                  sticker: conv.sticker,
                });
                setIsDialogOpen(true);
              }
              if (conv.sticker && conv.type === "reply") {
                setLetterZIndex("z-50");
                setLetter({
                  author: conv.author,
                  text: conv.text,
                });
                setReply({
                  author: conv.helperInteraction.author,
                  text: conv.helperInteraction.text,
                  sticker: conv.sticker,
                });
                setIsDialogOpen(true);
              }
            }}
            conversation={conv}
          />
        ))}
      </div>
      <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
        <DialogContent className="p-0 flex flex-col items-center justify-center bg-transparent border-transparent">
          <DialogHeader className="hidden">
            <DialogTitle>Reading conversation</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Letter
            author={letter?.author}
            className={`absolute mb-20 mr-3 ${letterZIndex}`}
            onClick={() => setLetterZIndex("z-50")}
          >
            {letter?.text}
          </Letter>
          <Letter
            author={reply?.author}
            className={`absolute z-40`}
            isReply
            onClick={() => setLetterZIndex("z-30")}
          >
            {reply?.text}
            <LetterSticker
              image={reply?.sticker}
              className="bottom-1 right-1 absolute"
            />
          </Letter>
        </DialogContent>
      </Dialog>
    </Window>
  );
}
