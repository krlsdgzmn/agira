"use client";

import { SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

export default function SearchInput() {
  const [open, setOpen] = useState(false);
  const handleSetOpen = (): void => {
    setOpen((isOpen) => !isOpen);
  };

  const currentPath = usePathname();

  return (
    <>
      {(currentPath === "/consumer" || currentPath === "/farmer") && (
        <div className="mx-auto my-4 flex h-9 w-full items-center gap-2 overflow-hidden rounded-md border border-border bg-gray-50">
          <Button
            variant="ghost"
            className="h-full w-full p-0 pl-2 pr-6"
            onClick={handleSetOpen}
          >
            <SearchIcon className="pr-2 opacity-50" />
            <span className="w-full text-left font-normal text-muted-foreground">
              Search products...
            </span>
          </Button>

          <CommandDialog open={open} onOpenChange={handleSetOpen}>
            <CommandInput placeholder="Search products..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Vegetables</CommandItem>
                <CommandItem>Fruits</CommandItem>
                <CommandItem>Meats</CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      )}
    </>
  );
}
