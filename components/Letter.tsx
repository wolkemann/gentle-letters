"use client";
import { ReactNode, useState } from "react";
import { Textarea } from "./ui/textarea";

type LetterProps = {
  children?: ReactNode;
  writeMode?: boolean;
  author?: string | null;
  isReply?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
};

const MAX_LETTER_CHARS = 690;

export default function Letter({
  writeMode,
  author,
  isReply,
  disabled,
  children,
  placeholder,
  className,
  onClick,
}: LetterProps) {
  const [charUsed, setCharUsed] = useState<number>(0);

  const handleOnChange = (e: any) => {
    setCharUsed(e.target.value.length);
  };

  return (
    <div
      onClick={onClick}
      className={`flex flex-col w-[350px] h-[510px] text-sm p-3 button-shadow border rounded-sm border-window-border-color ${isReply ? " bg-window-bg-color" : "bg-pink-300"} ${className}`}
    >
      {!writeMode && (
        <div className="h-full whitespace-pre-wrap">{children}</div>
      )}
      {writeMode && (
        <Textarea
          id="letter-textarea"
          name="letter-textarea"
          placeholder={placeholder || "Dear Stranger..."}
          maxLength={MAX_LETTER_CHARS}
          disabled={disabled}
          onChange={handleOnChange}
          className={` ring-offset-transparent focus-visible:ring-transparent p-0 m-0 h-full bg-letter-bg-color border-0 resize-none ${isReply ? " bg-window-bg-color" : "bg-letter-bg-color"}`}
        />
      )}
      <div className="flex justify-between">
        {writeMode && <span>{MAX_LETTER_CHARS - charUsed}</span>}{" "}
        <strong>&ndash; {author}</strong>
      </div>
    </div>
  );
}
