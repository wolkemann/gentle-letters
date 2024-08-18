"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CircleEllipsis } from "lucide-react";
import Link from "next/link";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

export default function Navbar({ user }: { user: User | null }) {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.refresh();
    }
  };
  return (
    <nav className="fixed w-full flex justify-center bg-app">
      <div className="flex justify-between w-full md:container">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="p-3 text-window-bg-color fixed md:p-5 z-50 md:hidden">
              <CircleEllipsis />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen bg-app text-window-bg-color">
            <DropdownMenuGroup>
              <DropdownMenuItem className="p-5" asChild>
                <Link
                  className="block md:hidden  hover:underline"
                  href="/about"
                >
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-5" asChild>
                <Link
                  className="block md:hidden  hover:underline"
                  href="/register"
                >
                  Donate
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-5" asChild>
                {user ? (
                  <div
                    onClick={logout}
                    className="p-5 block md:hidden  hover:underline cursor-pointer"
                  >
                    Logout
                  </div>
                ) : (
                  <Link
                    className="p-5 block md:hidden  hover:underline"
                    href="/login"
                  >
                    Login
                  </Link>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem className="p-5" asChild>
                {user ? (
                  <Link
                    className="block md:hidden hover:underline"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    className="block md:hidden hover:underline"
                    href="/register"
                  >
                    Create account
                  </Link>
                )}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="p-3 text-center w-full text-window-innerbg-color drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold md:p-5 md:text-left md:w-fit">
          <Link href="/" className="">
            Gentle Letters
          </Link>
        </h1>

        <ul className="flex font-bold text-window-bg-color">
          <li>
            <Link className="p-5 hidden md:block hover:underline" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className="p-5 hidden md:block hover:underline"
              href="/register"
            >
              Donate
            </Link>
          </li>
          <li>
            {user ? (
              <div
                onClick={logout}
                className="p-5 hidden md:block hover:underline cursor-pointer"
              >
                Logout
              </div>
            ) : (
              <Link
                className="p-5 hidden md:block hover:underline"
                href="/login"
              >
                Login
              </Link>
            )}
          </li>
          <li>
            {user ? (
              <Link
                className="p-5 hidden md:block hover:underline"
                href="/dashboard"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                className="p-5 hidden md:block hover:underline"
                href="/register"
              >
                Create account
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
