import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Bell, MessageCircleMore, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const links = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "About", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy", href: "#" },
];

export default async function Header() {
  const user = await currentUser();

  return (
    <header className="top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 md:sticky">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
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
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="hidden text-sm text-muted-foreground hover:text-black lg:block"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <SearchInput />

          {!user && (
            <div className="flex items-center gap-2">
              <Link href="/sign-in">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  className="bg-farm text-white hover:bg-farm/90"
                  size="sm"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          {user && (
            <>
              <div className="flex gap-0">
                <Button variant="ghost" size="icon">
                  <Bell className="text-farm" />
                </Button>

                <Link href="/cart">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="text-farm" />
                  </Button>
                </Link>

                <Button variant="ghost" size="icon">
                  <MessageCircleMore className="text-farm" />
                </Button>
              </div>
              <UserButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
