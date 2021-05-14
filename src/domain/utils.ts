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
