"use client";

import { useRef, useState } from "react";
import { Button } from "./Button";
import { useClickOutside } from "@/hooks/useClickOutside";
import { signout } from "./actions";

type Props = {
  username?: string;
} & React.PropsWithChildren;

export function DropDownUserMenu({ children, username }: Props) {
  const [isOpen, setOpen] = useState(false);
  const headerUserNav = useRef(null);
  useClickOutside(headerUserNav, () => {
    if (isOpen) setTimeout(() => setOpen(false), 500);
  });

  return (
    <div className="ml-auto">
      <Button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {username}
      </Button>
      <nav
        className={`headerUserNav flex list-none flex-col items-center gap-4 p-[1rem] ${isOpen ? "translate-y-[100%]" : ""} `}
        ref={headerUserNav}
      >
        {children}
        <li className="mt-auto hover:underline">
          <form>
            <Button formAction={signout}>Sign out</Button>
          </form>
        </li>
      </nav>
    </div>
  );
}
