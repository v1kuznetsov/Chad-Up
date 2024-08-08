"use client";

import { useRef, useState } from "react";
import { Button } from "./Button";
import { useClickOutside } from "@/hooks/useClickOutside";

export function DropDownChatsMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <div className="mr-auto">
      <Button buttonRef={buttonRef} onClick={() => setOpen(!isOpen)}>
        Chats
      </Button>
      <nav
        className={`headerChatsNav left-[-20rem] flex list-none flex-col gap-4 p-[1rem] ${isOpen ? "translate-x-[100%]" : ""}`}
        ref={navRef}
      >
        {children}
      </nav>
    </div>
  );
}
