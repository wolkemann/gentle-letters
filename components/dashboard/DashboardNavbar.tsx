"use client";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { LogOut, SquareMenu } from "lucide-react";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Tables } from "@/types/supabase";

import { useState } from "react";
import Link from "next/link";

type DashboardNavbarProps = {
  profileData: Tables<"profiles"> | null | undefined;
};

export default function DashboardNavbar({ profileData }: DashboardNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.refresh();
    }
  };

  return (
    <nav>
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
            <strong>{profileData?.nickname}</strong>
            <Button className="rounded-full p-2" onClick={logout}>
              <LogOut />
            </Button>
          </div>

          <div className="p-5 gap-2 flex items-center justify-center flex-col md:flex-row">
            <Link
              href="/dashboard"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Dashboard</Button>
            </Link>
            <Link
              href="/dashboard/write"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Write</Button>
            </Link>
            <Link
              href="/dashboard/inbox"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Inbox</Button>
            </Link>
            <Link
              href="/dashboard/archive"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Archive</Button>
            </Link>
            <Link
              href="/dashboard/stickers"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Stickers</Button>
            </Link>
            <Link
              href="/dashboard"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Donate</Button>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
