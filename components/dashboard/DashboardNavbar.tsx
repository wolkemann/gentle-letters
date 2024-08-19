"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { LogOut, SquareMenu } from "lucide-react";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { ProfileData } from "@/types/profileData";
import { useState } from "react";

type DashboardNavbarProps = {
  profileData: ProfileData;
};

export default function DashboardNavbar({ profileData }: DashboardNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/");
    }
  };

  const navigateTo = (href: string) => {
    router.prefetch(href);
    router.push(href);
    setIsOpen(false);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      shouldScaleBackground={false}
      setBackgroundColorOnScale={false}
    >
      <DrawerTrigger asChild>
        <Button
          className="z-50 rounded-full p-2 fixed bottom-0 m-2 md:m-5 "
          onClick={() => setIsOpen(true)}
        >
          <SquareMenu />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        onInteractOutside={() => setIsOpen(false)}
        className="bg-window-innerbg-color"
      >
        <DrawerHeader className="hidden">
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="p-5 gap-2 flex items-center justify-center">
          <strong>{profileData.nickname}</strong>
          <Button className="rounded-full p-2" onClick={logout}>
            <LogOut />
          </Button>
        </div>
        <div className="p-5 gap-2 flex items-center justify-center flex-col md:flex-row">
          <Button onClick={() => navigateTo("/dashboard")} className="w-full">
            Dashboard
          </Button>
          <Button
            onClick={() => navigateTo("/dashboard/write")}
            className="w-full"
          >
            Write
          </Button>
          <Button
            onClick={() => navigateTo(" /dashboard/inbox")}
            className="w-full"
          >
            Inbox
          </Button>
          <Button className="w-full">Archive</Button>
          <Button className="w-full">Stickers</Button>
          <Button className="w-full">Donate</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
