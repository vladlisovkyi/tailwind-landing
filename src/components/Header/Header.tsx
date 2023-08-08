import React, { useCallback, useEffect, useRef, useState } from "react";
import useSlider from "../../hooks/useSlider";
import useScroll from "../../hooks/useScroll";
import { useMediaQuery } from "usehooks-ts";
import { linksArr } from "../../data";


interface IHeader {
  heroHeight: number;
}
const Header: React.FC<IHeader> = ({ heroHeight }) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const { scrollY } = useScroll();
  const matches = useMediaQuery("(max-width: 768px)");
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const sliderInfo = useSlider({
    ref: ulRef,
    tabIndex,
  });
  useEffect(() => {
    if (!matches) setMenuOpen(false);
  }, [matches]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 ${
        scrollY > heroHeight - 60 ? "bg-[rgba(0,0,0,0.8)]" : "bg-transparent"
      } transition-colors duration-200 w-full z-50`}
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-3 min-h-full">
        <div className="flex justify-between items-center h-[72px]">
          <img
            src="./assets/images/logo.svg"
            alt=""
            className="w-32 sm:w-44 "
          />
          <nav className="hidden md:flex">
            <ul
              className="flex items-center font-alata gap-3 relative text-white"
              ref={ulRef}
            >
              {linksArr.map((link, i) => (
                <li
                  onMouseEnter={() => setTabIndex(i)}
                  onMouseLeave={() => setTabIndex(0)}
                  className="py-2"
                  key={i}
                >
                  <a href="#" className="p-2">
                    {link}
                  </a>
                </li>
              ))}
              <div
                className="absolute bottom-0 h-1 bg-orange-500 rounded-lg transition-all duration-700"
                style={{
                  transform: `translateX(${sliderInfo.left}px)`,
                  width: `${sliderInfo.width}px`,
                }}
              ></div>
            </ul>
          </nav>
          <div
            className={`absolute top-0 bottom-0 left-0 ${
              menuOpen ? "flex flex-col" : "hidden"
            } md:hidden  self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
          >
            {linksArr.map((link, i) => (
              <a href="#" className="hover:text-pink-500" key={i}>
                {link}
              </a>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className={`hamburger block md:hidden focus:outline-none ${
              menuOpen && "open"
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
