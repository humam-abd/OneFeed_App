/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect } from "react";

// Data fetching onload
export function useAsyncEffect(
  asyncFn: () => Promise<void>,
  deps?: DependencyList | undefined
): void {
  useEffect(() => {
    asyncFn();
  }, deps);
}

// Get Browser language
export const getBrowserLanguage = () => {
  const userLanguage = navigator.language;
  if (userLanguage === "en-US") return "en";
  if (userLanguage === "zh-CN") return "zh";
  return userLanguage;
};
