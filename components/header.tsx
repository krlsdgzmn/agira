"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
  const path = usePathname();
  const user = useUser();

  return (
    <header className="top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-3">
          {/* logo */}
          <Image
            src="/logo.svg"
            alt="Logo"
            className="h-10 w-10"
            width={10}
            height={10}
          />
          <h1 className="text-lg font-bold text-farm">Agira</h1>
        </Link>

        {/* add nav here */}
        <div className="flex items-center space-x-2">
          {path !== "/sign-in" && !user.isSignedIn && (
            <Link href="/sign-in">
              <Button variant="outline">Login</Button>
            </Link>
          )}

          {path !== "/sign-up" && !user.isSignedIn && (
            <Link href="/sign-up">
              <Button className="bg-farm text-white hover:bg-farm/90">
                Get Started
              </Button>
            </Link>
          )}

          {/* Mount the UserButton component */}
          {user.isSignedIn && (
            <div className="flex h-10 items-end justify-center pb-1">
              <UserButton showName />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
