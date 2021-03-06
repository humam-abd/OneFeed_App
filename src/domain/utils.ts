/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect } from "react";
import { APP_LANGUAGES } from "./constants";

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
export function getBrowserLanguage() {
  const userLanguage = navigator.language;
  if (userLanguage === "en-US") return APP_LANGUAGES.en;
  if (userLanguage === "zh-CN") return APP_LANGUAGES.zh;
  return userLanguage;
}

// Kelvin to Celsius converter
export function getCelsiusValue(value: number) {
  return (value - 273.15).toFixed();
}
