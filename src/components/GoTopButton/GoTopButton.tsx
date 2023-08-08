import React, { useCallback } from "react";
import useScroll from "../../hooks/useScroll";
interface IGoTop {
  heroHeight: number;
}
const GoTopButton: React.FC<IGoTop> = ({ heroHeight }) => {
  const { scrollY } = useScroll();
  const handleScrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <button
      onClick={handleScrollTop}
      className={`fixed w-12 h-12 ${
        scrollY > heroHeight ? "translate-x-0" : "translate-x-[300%]"
      } bottom-6 right-6 bg-orange-500 hover:bg-orange-400 transition-all duration-200 rounded-full flex justify-center items-center z-10`}
    >
      <img src="./assets/images/arrow.svg" alt="arrow" width={24} height={24} />
    </button>
  );
};

export default GoTopButton;
