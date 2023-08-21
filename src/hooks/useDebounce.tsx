"use client";
import { useEffect, useState } from "react";
/**
 * A `Debouncer` for use in search components. Created by Ahmet Ulutaş
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      // Cancels the timeout if value changes (also on delay change or unmount)
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}