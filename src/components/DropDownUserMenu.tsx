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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    () => {
      setOpen(false);
    },
    buttonRef,
    navRef,
  );

  return (
    <div className="ml-auto">
      <Button
        buttonRef={buttonRef}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {username}
      </Button>
      <nav
        className={`headerUserNav flex list-none flex-col items-center gap-4 p-[1rem] ${isOpen ? "translate-y-[100%]" : ""} `}
        ref={navRef}
      >
        {children}
        <form>
          <Button className="mt-auto hover:underline" formAction={signout}>
            Sign out
          </Button>
        </form>
      </nav>
    </div>
  );
}
