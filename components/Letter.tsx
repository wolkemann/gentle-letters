"use client";
import { ChangeEvent, ReactNode, useState } from "react";
import { Textarea } from "./ui/textarea";

type LetterProps = {
  children?: ReactNode;
  writeMode?: boolean;
  author?: string;
  isReply?: boolean;
  disabled?: boolean;
};

const MAX_LETTER_CHARS = 690;

export default function Letter({
  writeMode,
  author,
  isReply,
  disabled,
  children,
}: LetterProps) {
  const [charUsed, setCharUsed] = useState<number>(0);

  const handleOnChange = (e: any) => {
    setCharUsed(e.target.value.length);
  };

  return (
    <div
      className={`flex flex-col w-[350px] h-[510px] text-sm p-3 button-shadow border rounded-sm border-window-border-color ${isReply ? " bg-window-bg-color" : "bg-letter-bg-color"} `}
    >
      {!writeMode && (
        <div className="h-full whitespace-pre-wrap">{children}</div>
      )}
      {writeMode && (
        <Textarea
          id="letter-textarea"
          name="letter-textarea"
          placeholder="Dear Stranger..."
          maxLength={MAX_LETTER_CHARS}
          disabled={disabled}
          onChange={handleOnChange}
          className={`  p-0 m-0 h-full bg-letter-bg-color border-0 resize-none ${isReply ? " bg-window-bg-color" : "bg-letter-bg-color"}`}
        />
      )}
      <div className="flex justify-between">
        {writeMode && <span>{MAX_LETTER_CHARS - charUsed}</span>}{" "}
        <strong>&ndash; {author}</strong>
      </div>
    </div>
  );
}
