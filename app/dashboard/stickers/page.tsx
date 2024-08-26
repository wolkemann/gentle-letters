import StickersCollection from "@/components/dashboard/StickersCollection";
import { useUserData } from "@/utils/hooks/useUserData";

export default async function DashboardStickers() {
  const { user_stickers, profiles, profileData } = await useUserData();

  const stickers = user_stickers?.filter(
    (sticker) => sticker.obtained_by === profileData?.id.toString(),
  );

  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <StickersCollection stickers={stickers} profiles={profiles} />
      </section>
    </main>
  );
}
