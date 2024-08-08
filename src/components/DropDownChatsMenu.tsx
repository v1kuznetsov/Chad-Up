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
  const headerChatsNav = useRef(null);
  useClickOutside(headerChatsNav, () => {
    if (isOpen) setTimeout(() => setOpen(false), 500);
  });

  return (
    <div className="mr-auto">
      <Button onClick={() => setOpen(!isOpen)}>Chats</Button>
      <nav
        className={`headerChatsNav left-[-20rem] flex list-none flex-col gap-4 p-[1rem] ${isOpen ? "translate-x-[100%]" : ""}`}
        ref={headerChatsNav}
      >
        {children}
      </nav>
    </div>
  );
}
