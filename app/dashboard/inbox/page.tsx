import InboxLetter from "@/components/dashboard/InboxLetter";
import Window from "@/components/ui/window";
import { getNicknameById } from "@/utils/getNicknameById";
import { useUserData } from "@/utils/hooks/useUserData";

export default async function DashboardInbox() {
  const { lettersToReply, profiles } = await useUserData();

  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <Window title="Inbox" borderless className="w-full md:w-[700px]">
          <div className="flex flex-col gap-2">
            {lettersToReply
              ?.filter((letter) => letter.replied === false)
              .map((letter) => (
                <InboxLetter
                  key={letter.id}
                  id={letter.id}
                  author={getNicknameById(profiles, letter.authorId)}
                  wasRead={letter.was_read}
                  date={letter.created_at}
                />
              ))}
          </div>
        </Window>
      </section>
    </main>
  );
}
