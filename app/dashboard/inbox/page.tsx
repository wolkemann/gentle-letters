import InboxLetter from "@/components/dashboard/InboxLetter";
import Window from "@/components/ui/window";
import { getNicknameById } from "@/utils/getNicknameById";
import { useUserData } from "@/utils/hooks/useUserData";

export default async function DashboardInbox() {
  const { lettersToReply, repliesWithoutSticker, profiles } =
    await useUserData();

  const inbox = [
    ...lettersToReply.map((letter) => ({
      ...letter,
      isReply: false,
    })),
    ...repliesWithoutSticker.map((reply) => ({
      ...reply,
      replied: reply.sticker_sent,
      isReply: true,
    })),
  ];

  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <Window title="Inbox" borderless className="w-full md:w-[700px]">
          <div className="flex flex-col gap-2">
            {inbox
              ?.filter((letter) => letter.replied === false)
              .map((letter) => (
                <InboxLetter
                  key={letter.id}
                  id={letter.id}
                  author={getNicknameById(profiles, letter.authorId)}
                  wasRead={letter.was_read}
                  date={letter.created_at}
                  isReply={letter.isReply}
                />
              ))}
          </div>
        </Window>
      </section>
    </main>
  );
}
