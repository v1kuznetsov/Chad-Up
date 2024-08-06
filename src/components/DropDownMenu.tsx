"use client";

import { useState } from "react";
import { Button } from "./Button";
import { cn } from "@/utils/cn";

export function DropDownMenu({
  children,
  className,
  leftRight,
  translateX,
  buttonName,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  leftRight?: string;
  translateX?: number;
  buttonName: string;
}>) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {buttonName}
      </Button>
      <nav
        className={`menu ${leftRight} translate-x-[${translateX}rem] ${isOpen ? "active" : ""}`}
      >
        {children}
      </nav>
    </div>
  );
}
