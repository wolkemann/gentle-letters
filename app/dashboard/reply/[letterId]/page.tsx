import WriteReplyFrom from "@/components/dashboard/WriteReplyForm";
import { useUserData } from "@/utils/hooks/useUserData";
import { redirect } from "next/navigation";

export default async function DashboardReply({
  params,
}: {
  params: { letterId: string };
}) {
  const { lettersToReply, profiles, profileData } = await useUserData();
  const { letterId } = params;

  const letter = lettersToReply
    .filter(
      (letter) =>
        letter.replied == false && letter.recipientId === profileData?.id,
    )
    .find((letter) => letter.id.toString() === letterId);

  if (!letter) {
    redirect("/error");
  }

  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <WriteReplyFrom
          letter={letter}
          profiles={profiles}
          profileData={profileData}
        />
      </section>
    </main>
  );
}
