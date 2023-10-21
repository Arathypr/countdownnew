import React, { useState, useEffect } from "react";
import "./AutoSlide.css";
import OrientationMessage from "../orientationmessage/OrientationMessage";

import logowhite from "../../assets/logowhite.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

import CountDown from "../countdown/CountDown";

function AutoSlide() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1696104901055-425157b698d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://i.ibb.co/58Mq6Mb/slide1.jpgid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://i.ibb.co/8r7WYJh/slide3.jpgid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1696187488666-5d45f5aa384b?ixlib=rb-4.0.3&ixidid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 4000;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const autoAdvance = () => {
    nextSlide();
  };

  useEffect(() => {
    const intervalId = setInterval(autoAdvance, autoSlideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="h-[100vh] w-[100%] relative overflow-hidden">
      <img
        src={logowhite}
        alt="Logo"
        className="absolute top-4 left-20 h-28 w-32 object-contain hidden sm:block"
      />
      <img
        src={logowhite}
        alt="Logo"
        className="absolute sm:top-4 vvsm:top-10 vvsm:left-7 vvsm:w-28 sm:left-10 sm:h-2  object-contain block sm:hidden"
      />
      <OrientationMessage />
      <div className="absolute top-32 sm:left-20 text-white font-semibold  vvsm:left-7  ">
        <div className=" vvsm:text-[20px] ssm:text-3xl sm:text-4xl vvsm:-mt-11 vsm:-mt-10 md:text-4xl lg:text-5xl xl:text-5xl font-Montserrat sm:mt-6 ">
          {" "}
          A new ERA is loading!!
        </div>
        <div className="font-Montserrat vvsm:text-[10px] ssm:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg  ">
          Prepare for an adventure like no other.
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center text-white">
        <CountDown countdownTimestampMs={1643673600000} />
      </div>

      {/*social media */}
      <div>
        <div
          className="flex  absolute bottom-[75px] ssm:left-10 sm:left-20 vvsm:left-8 sm:mb-[-25px]  "
          style={{ alignItems: "center" }}
        >
          <a href="https://in.linkedin.com/company/zesdrotechnologies">
            <img src={linkedin} alt="LinkedIn" className="mr-5" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="Facebook" className="mr-5" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>

        <div className="absolute bottom-11 vvsm:left-8 ssm:left-10   sm:left-20  sm:mb-[-25px] flex items-center">
          <img src={copyright} alt="" className="mr-2" />
          <div className="text-white font-Montserrat vvsm:text-xs ssm:text-sm sm:text-lg">
            <span style={{ fontWeight: "normal" }}>zesdro Technologies.</span>{" "}
            <span style={{ fontWeight: "bold" }}>All Rights Reserved.</span>
          </div>
        </div>
      </div>
      {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-[100%] h-[100vh] bg-center bg-cover duration-500"
      ></div> */}
    </div>
  );
}

export default AutoSlide;
