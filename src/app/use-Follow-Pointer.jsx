import { useEffect, useState } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 10, stiffness: 100, restDelta: 0.010 };

export function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setCurrentScreen(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  console.log("Current screen width:", currentScreen);

  useEffect(() => {
    if (!ref.current || currentScreen < 800) return; // Stop pointer effect if screen width < 650px

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;
      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, currentScreen]); // Re-run effect when screen width changes

  return { x: currentScreen < 650 ? 0 : x, y: currentScreen < 650 ? 0 : y };
}
