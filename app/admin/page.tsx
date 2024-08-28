import AdminAppStats from "@/components/adminDashboard/AdminAppStats";
import AdminShuffleLetters from "@/components/adminDashboard/AdminShuffleLetters";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { useAdminData } from "@/utils/hooks/useAdminData";

export default async function AdminDashboardPage() {
  const { letters, profiles, replies, stickers, admin } = await useAdminData();
  return (
    <>
      <DashboardNavbar profileData={admin} isAdmin={true} />
      <main>
        <section className="p-2 w-full min-h-screen grid gap-2 grid-cols-1 md:grid-cols-2">
          <AdminShuffleLetters letters={letters} />
          <AdminAppStats
            letters={letters}
            profiles={profiles}
            replies={replies}
            stickers={stickers}
          />
        </section>
      </main>
    </>
  );
}
