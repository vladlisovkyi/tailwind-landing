import React, { useCallback, useEffect } from "react";
import { useElementSize } from "usehooks-ts";

interface IHero {
  setHeroHeight: (value: number) => void;
}
const Hero: React.FC<IHero> = ({ setHeroHeight }) => {
  const [refContainer, { height }] = useElementSize();

  const handleHeroHeight = useCallback(() => {
    setHeroHeight(height);
  }, [height, setHeroHeight]);

  useEffect(() => {
    handleHeroHeight();
  }, [handleHeroHeight]);
  return (
    <section className="hero min-h-screen w-full" ref={refContainer}>
      <div className="container max-w-6xl mx-auto px-6 py-12 md:px-3">
        <p className="max-w-lg my-32 p-4 font-sans text-4xl sm:text-5xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experience That Deliver
        </p>
      </div>
    </section>
  );
};

export default Hero;
