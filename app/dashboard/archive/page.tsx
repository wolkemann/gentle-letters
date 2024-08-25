import Archive from "@/components/dashboard/Archive";
import { getNicknameById } from "@/utils/getNicknameById";
import { useUserData } from "@/utils/hooks/useUserData";

export default async function DashboardArchive() {
  const {
    profiles,
    profileData,
    lettersToReply,
    repliesWithoutSticker,
    user_stickers,
  } = await useUserData();

  const conversations = [
    ...lettersToReply
      .filter((letter) => letter.authorId === profileData?.id)
      .map((letter) => {
        const letterReply = repliesWithoutSticker.find(
          (reply) => reply.id.toString() === letter.replyId,
        );
        const replySticker = user_stickers?.find(
          (sticker) => sticker.reply_id === letterReply?.id.toString(),
        );

        return {
          id: `letter-${letter.id}`,
          type: "letter",
          author: getNicknameById(profiles, letter.authorId),
          text: letter.text,
          sticker: replySticker ? replySticker.url : null,
          date: letter.updated_at,
          helperInteraction: {
            type: "reply",
            author: getNicknameById(profiles, letterReply?.authorId),
            text: letterReply?.text,
            date: letterReply?.updated_at,
          },
        };
      }),
    ...lettersToReply
      .filter((letter) => letter.recipientId === profileData?.id)
      .map((letter) => {
        const ReplyOfLetter = repliesWithoutSticker.find(
          (reply2) => letter.id.toString() === reply2.letterRepliedId,
        );
        const replySticker = user_stickers?.find(
          (sticker) => sticker.reply_id === ReplyOfLetter?.id.toString(),
        );

        return {
          id: `reply-${letter.id}`,
          type: "reply",
          author: getNicknameById(profiles, letter.authorId),
          text: letter.text,
          sticker: replySticker ? replySticker.url : null,
          date: letter.updated_at,
          helperInteraction: {
            type: "letter",
            author: getNicknameById(profiles, ReplyOfLetter?.authorId),
            text: ReplyOfLetter?.text,
            date: ReplyOfLetter?.updated_at,
          },
        };
      }),
  ];

  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <Archive conversations={conversations} />
      </section>
    </main>
  );
}
