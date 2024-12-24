import React from "react";
import Hero1 from "../assets/yourname.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="relative">
        <img src={Hero1} alt="HeroImage" className="object-top" />
        <div className="font-sans text-white absolute bottom-12 flex flex-col px-40">
          <h1 class="text-4xl md:text-5xl font-semibold">Watch Now!</h1>
          <p class="mt-4 text-lg md:text-xl font-thin">
            Stream over <span class="font-semibold">
              <CountUp start={0} end={142086} duration={4} separator="," />
              +</span> animes, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
