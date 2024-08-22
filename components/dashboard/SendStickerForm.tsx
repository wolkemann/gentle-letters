"use client";
import { Tables } from "@/types/supabase";
import Letter from "../Letter";
import { getNicknameById } from "@/utils/getNicknameById";
import { useState } from "react";
import { Sticker } from "lucide-react";

type SendStickerFormProps = {
  letter: Tables<"letters">;
  reply: Tables<"replies">;
  profiles: Tables<"profiles">[] | null;
};

export default function SendStickerForm({
  letter,
  reply,
  profiles,
}: SendStickerFormProps) {
  const [zIndex, setZIndex] = useState<string>("z-[40]");

  return (
    <div className="flex justify-center w-screen h-[525px] relative">
      <Letter
        author={getNicknameById(profiles, letter.authorId)}
        onClick={() => setZIndex("z-[40]")}
        className={`${zIndex}`}
      >
        {letter.text}
      </Letter>
      <Letter
        isReply
        author={getNicknameById(profiles, reply.authorId)}
        onClick={() => setZIndex("z-[20]")}
        className="absolute ml-5 mt-9 z-[30]"
      >
        {reply.text}
        <div className="absolute rounded-full border-dashed bottom-1 right-1 w-[50px] h-[50px] border-2 border-green-950 cursor-pointer text-sm">
          <Sticker />
        </div>
      </Letter>
    </div>
  );
}
