"use client";
import React from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  onClickOutside: () => void
) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      )
        onClickOutside();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOutside]);

  React.useEffect(() => {
    const escPressed = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClickOutside();
      }
    };

    window.addEventListener("keydown", escPressed);
    return () => window.removeEventListener("keydown", escPressed);
  });
};

export default useClickOutside;
