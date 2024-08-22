import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { useUserData } from "@/utils/hooks/useUserData";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { profileData } = await useUserData();

  return (
    <>
      <DashboardNavbar profileData={profileData} />
      {children}
    </>
  );
}
