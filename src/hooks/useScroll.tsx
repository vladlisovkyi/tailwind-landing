import { useState, useEffect } from "react";

interface ScrollPosition {
  scrollY: number;
}

const useScroll = (): ScrollPosition => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY };
};

export default useScroll;
