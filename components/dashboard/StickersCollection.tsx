import { Tables } from "@/types/supabase";
import { StickersArray } from "@/utils/stickersArray";
import Window from "../ui/window";
import LetterSticker from "../LetterSticker";

type StickersCollectionProps = {
  stickers: Tables<"user_stickers">[] | undefined | null;
  profiles: Tables<"profiles">[] | null;
};

export default function StickersCollection({
  stickers,
  profiles,
}: StickersCollectionProps) {
  return (
    <Window title="Stickers collection" className="w-full md:w-[600px]">
      <div className="grid grid-cols-3 place-items-center gap-3">
        {StickersArray.map((sticker) => {
          let stickerCount = 0;

          stickers?.forEach((stickerToCount) => {
            if (stickerToCount.url === sticker.url) stickerCount++;
          });

          return (
            <div key={sticker.id}>
              <LetterSticker size={90} image={sticker.url} />
              <div className="text-lg text-center font-bold">
                {stickerCount}
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
}
