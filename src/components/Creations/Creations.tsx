import React from "react";
import { creationsData } from "../../data";

const Creations = () => {
  return (
    <section>
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-3">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>

          <button className="hidden btn md:block">See All</button>
        </div>

        <div className="item-container grid grid-cols-1 md:grid-cols-4 gap-5">
          {creationsData.map((creation) => (
            <div key={creation.desktopImage} className="group item">
              <img
                src={creation.desktopImage}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={creation.mobileImage}
                alt=""
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>{creation.title}</h5>
            </div>
          ))}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creations;
