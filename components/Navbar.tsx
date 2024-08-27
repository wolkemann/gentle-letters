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
import { Button } from "./ui/button";

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
    <nav className="fixed w-full flex justify-center bg-slate-50 shadow">
      <div className="flex justify-between w-full md:container">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="p-3 fixed md:p-5 z-50 md:hidden">
              <CircleEllipsis />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen bg-slate-50 shadow">
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
              <DropdownMenuItem className="pl-5 pb-5 pt-0" asChild>
                {user ? (
                  <Link className="block md:hidden" href="/dashboard">
                    <Button variant="window">Dashboard</Button>
                  </Link>
                ) : (
                  <Link className="block md:hidden" href="/register">
                    <Button variant="window">Create account</Button>
                  </Link>
                )}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="p-3 text-center w-full font-extrabold text-lg md:p-5 md:text-left md:w-fit">
          <Link href="/" className="">
            Gentle Letters
          </Link>
        </h1>

        <ul className="flex font-bold items-center">
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
              <Link className="hidden md:block" href="/dashboard">
                <Button variant="window">Dashboard</Button>
              </Link>
            ) : (
              <Link className="hidden md:block" href="/register">
                <Button variant="window">Create account</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
