import { getRuntime } from "@yext/pages/util";
import { useState, useEffect } from "react";

// Define a type for the window size
interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): WindowSize => {
  // Initial state will be undefined to avoid flashing an incorrect size
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window's width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Check if the app is running in the browser or server-side
    if (!getRuntime().isServerSide) {
      // Run the handleResize function initially to set size
      handleResize();

      // Subscribe to window resize events
      window.addEventListener("resize", handleResize);

      // Clean up function
      return () => {
        // Unsubscribe from window resize events
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowSize;
