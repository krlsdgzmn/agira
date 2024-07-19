import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          {/* logo */}
          <Image
            src="logo.svg"
            alt="Logo"
            className="h-10 w-10"
            width={10}
            height={10}
            priority
          />
          <h1 className="text-lg font-bold text-farm">Agira</h1>
        </div>

        {/* add nav here */}
        <div className="flex items-center gap-2">
          <Button variant="outline">Login</Button>
          <Button className="bg-farm text-white hover:bg-farm/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
