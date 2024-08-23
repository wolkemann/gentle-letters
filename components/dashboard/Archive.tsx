"use client";
import { Conversation } from "@/types/conversations";
import Window from "../ui/window";
import ArchiveItem from "./ArchiveItem";

type ArchiveProps = {
  conversations: Conversation[];
};

export default function Archive({ conversations }: ArchiveProps) {
  console.log(conversations);
  return (
    <div>
      <Window>
        {conversations.map((conv) => (
          <ArchiveItem key={conv.id} {...conv} />
        ))}
      </Window>
    </div>
  );
}
