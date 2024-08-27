import AdminShuffleLetters from "@/components/adminDashboard/AdminShuffleLetters";
import { useAdminData } from "@/utils/hooks/useAdminData";

export default async function AdminDashboardPage() {
  const { letters } = await useAdminData();
  return (
    <main>
      <section className="w-full min-h-screen flex  items-center justify-center">
        <AdminShuffleLetters letters={letters} />
      </section>
    </main>
  );
}
