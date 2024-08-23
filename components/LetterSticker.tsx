import { Stamp } from "lucide-react";

type LetterStickerProps = {
  size?: number;
  image?: string;
  className?: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function LetterSticker({
  size = 50,
  image,
  selected,
  className,
  onClick,
}: LetterStickerProps) {
  return (
    <div
      onClick={onClick}
      className={`p-1 flex justify-center items-center cursor-pointer text-sm rounded-full bg-slate-100 
        ${image ? "border" : "border-dashed hover:bg-window-innerbg-color"} border-2  
        ${selected ? "border-red-600" : "border-button-border-color"}
        ${className}`}
      style={{ width: size, height: size }}
    >
      {!image && <Stamp />}
      {image && (
        <picture>
          <img src={`/stickers/${image}`} alt="" />
        </picture>
      )}
    </div>
  );
}
