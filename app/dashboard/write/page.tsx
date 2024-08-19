import WriteLetterForm from "@/components/dashboard/WriteLetterForm";
import { useUserData } from "@/utils/hooks/useUserData";

export default async function DashboardWriteLetter() {
  const { profileData } = await useUserData();

  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <WriteLetterForm profileData={profileData} />
      </section>
    </main>
  );
}
