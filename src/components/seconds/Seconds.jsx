import React, { useState, useEffect } from "react";
import secondwhite from "../../assets/secondwhite.svg";
import transnightmode from "../../assets/secondtransnightmode_.svg";
import "./Seconds.css";

function Seconds({ countdownZero }) {
  const [rotationDegree, setRotationDegree] = useState(0);

  useEffect(() => {
    let intervalId;

    if (!countdownZero) {
      intervalId = setInterval(() => {
        updateRotationDegree();
      }, 1000);
    } else {
      clearInterval(intervalId); // Clear the interval if countdownZero is true
    }

    return () => clearInterval(intervalId);
  }, [countdownZero]);

  function updateRotationDegree() {
    const now = new Date();
    const seconds = now.getSeconds();
    const degreesPerSecond = 360 / 60; // 60 seconds in a minute

    if (countdownZero) {
      setRotationDegree(0);
    } else {
      const newRotationDegree = (360 - seconds * degreesPerSecond) % 360;
      setRotationDegree(newRotationDegree);
    }
  }

  return (
    <>
      <div className="countdown-row w-full flex hidden md:block">
        <div className="counting-row">
          <div className="slot-type">
            <div className="num _INVISIBLE_" id="second">
              {Math.floor(rotationDegree / 6)}
            </div>
          </div>
        </div>

        <div className="seconds-holder  ">
          <div className="circle-holder ">
            <div className="dark_digit IE_HIDE ">
              <img
                src={secondwhite}
                className="round "
                alt="Clocks seconds"
                style={{
                  transform: `rotate(${rotationDegree}deg)`,
                  transition: "transform 0.3s ease", // Add CSS transition
                }}
              />
            </div>
            <div
              className="down_opacity_circle "
              style={{
                transform: `rotate(${rotationDegree}deg)`,
                transition: "transform 0.3s ease", // Add CSS transition
              }}
            >
              <img
                src={transnightmode}
                className="round "
                id="digitalsecond"
                alt="Clocks seconds"
              />
            </div>
          </div>
        </div>
      </div>

      {/* smaller screen */}
      <div className="countdown-row  w-full   flex md:hidden">
        <div className="slot-type h-[100%] ">
          <div className="num _INVISIBLE_ h-full " id="second">
            {Math.floor(rotationDegree / 6)}
          </div>
        </div>

        <div className="  smallscreen   ">
          <div className="circle-holder    ">
            <div className="dark_digitsm  ">
              <img
                src={secondwhite}
                className="round "
                alt="Clocks seconds"
                style={{
                  transform: `rotate(${rotationDegree}deg)`,
                  transition: "transform 0.3s ease", // Add CSS transition
                }}
              />
            </div>

            <div
              className="down_opacity_circle  "
              style={{
                transform: `rotate(${rotationDegree}deg)`,
                transition: "transform 0.3s ease", // Add CSS transition
              }}
            >
              <img
                src={transnightmode}
                className="round  "
                id="digitalseconds"
                alt="Clocks seconds"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seconds;
