import { Tables } from "@/types/supabase";

type SendStickerFormProps = {
  letter: Tables<"letters">;
  reply: Tables<"replies">;
  profiles: Tables<"profiles">[] | null | undefined;
  profileData: Tables<"profiles"> | null | undefined;
};

export default function SendStickerForm({
  letter,
  reply,
  profiles,
  profileData,
}: SendStickerFormProps) {
  return <>2</>;
}
