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
  const [countdownZero, setCountdownZero] = useState(false); // Initialize countdownZero state

  // Calculate the timestamp for October 20, 2023, 11:35 PM IST
  const startDate = new Date("2023-10-21T06:19:00");
  const countdownStartTimestampMs = startDate.getTime();

  // Calculate the timestamp for January 7, 2024, 10:00 AM IST
  // const endDate = new Date("2024-01-07T10:00:00");
  const endDate = new Date("2023-10-21T17:25:00");
  const countdownEndTimestampMs = endDate.getTime();

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownEndTimestampMs);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownEndTimestampMs]);

  function updateRemainingTime(endTime) {
    const updatedRemainingTime = getRemainingTimeUntilMsTimestamp(endTime);
    setRemainingTime(updatedRemainingTime);

    if (
      updatedRemainingTime.DAYS === "00" &&
      updatedRemainingTime.HOURS === "00" &&
      updatedRemainingTime.MIN === "00"
    ) {
      setCountdownZero(true);
    } else {
      setCountdownZero(false);
    }
  }
  return (
    <>
      <div className="font-Montserrat text-center sm:space-x-16zz">
        <div className="md:hidden vvsm:mt-1  mt-40 sm:mt-36 sm:mr-20">
          <div className="flex flex-col items-center space-x-1 ">
            <span className="text-5xl font-extrabold sm:text-7xl vvsm:text-5xl ">
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

        <div className="hidden md:flex flex-row font-Montserrat text-center space-x-3">
          <div className="flex items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-5xl">
              {remainingTime.DAYS}
            </span>
            <span className="text-sm sm:text-base">DAYS</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-5xl">
              {remainingTime.HOURS}
            </span>
            <span className="text-sm sm:text-base">HOURS</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-6xl font-extrabold sm:text-5xl">
              {remainingTime.MIN}
            </span>
            <span className="text-sm sm:text-base">MIN</span>
          </div>
        </div>
      </div>

      <div className="flex items-center ml-[68px] ">
        <span className="font-extrabold">
          <Seconds countdownZero={countdownZero} />
        </span>
        <span className="text-base sec" style={{ marginLeft: "-120px" }}>
          SEC
        </span>
      </div>
    </>
  );
}

export default CountDown;
