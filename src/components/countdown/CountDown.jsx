import React, { useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./utils/CountDownUtils";

import Seconds from "../seconds/Seconds";
import "./CountDown.css";

const defaultRemainingTime = {
  SEC: "00",
  MIN: "00",
  HOURS: "00",
  DAYS: "00",
};

function CountDown() {
  // Calculate the timestamp for December 31st of the current year
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 11, 31); // Months are 0-indexed, so 11 represents December
  const countdownTimestampMs = targetDate.getTime();

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <>
      <div className="font-Montserrat text-center sm:space-x-16zz">
        <div className="md:hidden vvsm:mt-1  mr-0 sm:mt-36 sm:mr-20">
          <div className="flex flex-col items-center space-x-1 ">
            <span className="text-6xl font-extrabold sm:text-7xl vvsm:text-5xl ">
              {remainingTime.DAYS}
            </span>
            <span className="text-sm sm:text-base sm:pb-10 vsm:pb-14 vvsm:pb-3">
              DAYS
            </span>
          </div>
          <div className="flex flex-col items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-7xl vvsm:text-5xl">
              {remainingTime.HOURS}
            </span>
            <span className="text-sm sm:text-base sm:pb-10 vsm:pb-14 vvsm:pb-3">
              HOURS
            </span>
          </div>
          <div className="flex flex-col items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-7xl vvsm:text-5xl">
              {remainingTime.MIN}
            </span>
            <span className="text-sm sm:text-base">MIN</span>
          </div>
        </div>

        <div className="hidden md:flex flex-row font-Montserrat text-center space-x-16">
          <div className="flex items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-7xl">
              {remainingTime.DAYS}
            </span>
            <span className="text-sm sm:text-base">DAYS</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-7xl">
              {remainingTime.HOURS}
            </span>
            <span className="text-sm sm:text-base">HOURS</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-7xl">
              {remainingTime.MIN}
            </span>
            <span className="text-sm sm:text-base">MIN</span>
          </div>
        </div>
      </div>

      <div className="flex items-center ml-[68px] ">
        <span className="font-extrabold">
          <Seconds />
        </span>
        <span className="text-sm sec" style={{ marginLeft: "-58px" }}>
          SEC
        </span>
      </div>
    </>
  );
}

export default CountDown;
