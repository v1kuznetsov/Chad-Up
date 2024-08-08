import React, { useEffect } from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  callback: Function,
) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
