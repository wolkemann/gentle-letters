import SendStickerForm from "@/components/dashboard/SendStickerForm";
import { useUserData } from "@/utils/hooks/useUserData";
import { redirect } from "next/navigation";

export default async function DashboardSendSticker({
  params,
}: {
  params: { replyId: string };
}) {
  const { lettersToReply, repliesWithoutSticker, profiles } =
    await useUserData();
  const { replyId } = params;

  const reply = repliesWithoutSticker.find(
    (reply) => reply.id.toString() === replyId && reply.sticker_sent === false,
  );

  if (!reply) {
    redirect("/error");
  }

  const letter = lettersToReply.find(
    (letter) => letter.id.toString() === reply.letterRepliedId,
  );

  if (!letter) {
    redirect("/error");
  }

  return (
    <main>
      <section className="w-full min-h-screen flex flex-col md:items-center md:justify-center">
        <SendStickerForm letter={letter} reply={reply} profiles={profiles} />
      </section>
    </main>
  );
}
