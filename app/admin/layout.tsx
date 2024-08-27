import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { useUserData } from "@/utils/hooks/useUserData";

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
