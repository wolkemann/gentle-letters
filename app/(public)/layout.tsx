import Navbar from "@/components/Navbar";
import { useUserData } from "@/utils/hooks/useUserData";
import { ReactNode } from "react";

export default async function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { authData } = await useUserData();

  return (
    <>
      <Navbar user={authData.user} />
      {children}
    </>
  );
}
