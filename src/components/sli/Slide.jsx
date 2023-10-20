import React, { useState, useEffect, useRef } from "react";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import OrientationMessage from "../orientationmessage/OrientationMessage";
import logowhite from "../../assets/logowhite.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import copyright from "../../assets/copyright.png";
import CountDown from "../countdown/CountDown";
import twitter from "../../assets/twitter.png";
import "./Slide.css";

function Slide() {
  const images = [slider1, slider2, slider3, slider4, slider5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const slidePanelRef = useRef(null);

  useEffect(() => {
    const autoSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (slidePanelRef.current) {
      slidePanelRef.current.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="h-[100vh] w-[100%] relative overflow-hidden">
      {/* <img
        src={logowhite}
        alt="Logo"
        className="absolute top-4 left-20 h-28 w-32 object-contain hidden sm:block"
      />
      <img
        src={logowhite}
        alt="Logo"
        className="absolute sm:top-4 vvsm:top-10 vvsm:left-7 vvsm:w-28 sm:left-10 sm:h-2 object-contain block sm:hidden"
      /> */}
      <OrientationMessage />
      <div className="absolute top-32 sm:left-20 text-white font-semibold vvsm:left-7">
        <div className="vvsm:text-[20px] ssm:text-3xl sm:text-4xl vvsm:-mt-11 vsm:-mt-10 md:text-4xl lg:text-5xl xl:text-5xl font-Montserrat sm:mt-6">
          {" "}
          A new ERA is loading!!
        </div>
        <div className="font-Montserrat vvsm:text-[10px] ssm:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
          Prepare for an adventure like no other.
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center text-white">
        <CountDown countdownTimestampMs={1643673600000} />
      </div>

      {/*social media */}
      <div>
        {/* <div
          className="flex absolute bottom-[90px] ssm:left-10 sm:left-20 vvsm:left-8 sm:mb-[-25px]"
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
        </div> */}
        <div
          className="flex absolute bottom-[90px] right-10 sm:right-20 vvsm:right-8 sm:mb-[-25px]"
          style={{ alignItems: "center" }}
        >
          <a
            href="https://in.linkedin.com/company/zesdrotechnologies"
            onMouseEnter={() => setHoveredIcon("linkedin")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className={`mr-5 social-icon ${
                hoveredIcon === "linkedin" ? "opacity-1" : "opacity-0.6"
              }`}
            />
          </a>
          <a
            href="https://www.facebook.com/"
            onMouseEnter={() => setHoveredIcon("facebook")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={facebook}
              alt="Facebook"
              className={`mr-5 social-icon ${
                hoveredIcon === "facebook" ? "opacity-1" : "opacity-0.6"
              }`}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            onMouseEnter={() => setHoveredIcon("instagram")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={instagram}
              alt="Instagram"
              className={`mr-5 social-icon ${
                hoveredIcon === "instagram" ? "opacity-1" : "opacity-0.6"
              }`}
            />
          </a>
          <a
            href="https://twitter.com/"
            onMouseEnter={() => setHoveredIcon("twitter")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={twitter}
              alt="Twitter"
              className={`social-icon ${
                hoveredIcon === "twitter" ? "opacity-1" : "opacity-0.6"
              }`}
            />
          </a>
        </div>

        {/* <div className="absolute bottom-11 vvsm:left-8 ssm:left-10 sm:left-20 sm:mb-[-25px] flex items-center">
          <img src={copyright} alt="" className="mr-2" />
          <div className="text-white font-Montserrat vvsm:text-xs ssm:text-sm sm:text-lg">
            <span style={{ fontWeight: "normal" }}>zesdro Technologies.</span>{" "}
            <span style={{ fontWeight: "bold" }}>All Rights Reserved.</span>
          </div>
        </div> */}
      </div>
      <div className="page-container h-screen">
        <div className="content w-screen h-screen">
          <div
            className="prev"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length
              )
            }
          ></div>
          <div className="slide-panel h-screen" ref={slidePanelRef}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-screen w-screen slide"
              />
            ))}
          </div>
          <div
            className="next"
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
