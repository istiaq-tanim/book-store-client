import * as React from "react";

export function useLockBody() {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Return a cleanup function that resets the overflow style
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}
