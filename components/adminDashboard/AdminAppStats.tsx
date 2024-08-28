import { Tables } from "@/types/supabase";
import Window from "../ui/window";

type AdminAppStatsProps = {
  letters: Tables<"letters">[];
  profiles: Tables<"profiles">[];
  replies: Tables<"replies">[];
  stickers: Tables<"user_stickers">[];
};

export default function AdminAppStats({
  letters,
  profiles,
  replies,
  stickers,
}: AdminAppStatsProps) {
  return (
    <Window title="Statistics">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <StatLabel label="Users" stat={profiles.length} />
        <StatLabel label="Letters" stat={letters.length} />
        <StatLabel label="Replies" stat={replies.length} />
        <StatLabel label="Stickers" stat={stickers.length} />
      </div>
    </Window>
  );
}

function StatLabel({ label, stat }: { label: string; stat: number }) {
  return (
    <div className="p-3 flex justify-between items-center bg-pink-300 rounded shadow">
      {label}
      <div className="p-1 flex items-center font-bold text-sm justify-center w-8 rounded-full border border-button-border-color bg-window-bg-color shadow">
        {stat}
      </div>
    </div>
  );
}
