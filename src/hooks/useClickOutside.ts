import React, { useEffect } from "react";

export function useClickOutside(
  callback: Function,
  ...refs: Array<React.RefObject<HTMLElement>>
) {
  const handleClick = (event: MouseEvent) => {
    let isOverRef = false;
    for (const ref of refs) {
      if (ref.current && ref.current.contains(event.target as Node)) {
        isOverRef = true;
      }
    }
    if (!isOverRef) callback();
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
