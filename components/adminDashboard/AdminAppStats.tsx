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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at
      illum in molestias nam aut est aliquam amet, maxime harum, deserunt
      asperiores temporibus consequatur molestiae voluptatibus, nemo voluptate
      quibusdam accusantium?
    </Window>
  );
}
