import React, { useState, useEffect, useRef } from "react";
import Seconds from "../seconds/Seconds";

function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [countdownZero, setCountdownZero] = useState(false);
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("January 07, 2024 10:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval.current);
        console.log("Countdown reached zero.");
        setCountdownZero(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((distance % (1000 * 60)) / 1000);

        console.log("Days:", days);
        console.log("Hours:", hours);
        console.log("Minutes:", min);
        console.log("Seconds:", sec);

        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMin(String(min).padStart(2, "0"));
        setTimerSec(String(sec).padStart(2, "0"));

        if (days === 0 && hours === 0 && min === 0 && sec === 0) {
          clearInterval(interval.current);
          setCountdownZero(true);
        }
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="flex items-center justify-center space-x-8 font-Montserrat">
      {countdownZero ? (
        <p className="font-bold text-3xl text-center">The wait is over</p>
      ) : (
        <>
          <div className="hidden md:flex flex-row font-Montserrat text-center space-x-9">
            <div className="flex items-center  space-x-1 ">
              <span className="text-6xl font-extrabold sm:text-5xl">
                {timerDays}
              </span>{" "}
              <span className="text-sm sm:text-base">DAYS</span>
            </div>
            <div className="flex items-center  space-x-1">
              <span className="text-6xl font-extrabold sm:text-5xl">
                {timerHours}
              </span>{" "}
              <span className="text-sm sm:text-base">HOURS</span>
            </div>
            <div className="flex items-center  space-x-1">
              <span className="text-6xl font-extrabold sm:text-5xl">
                {timerMin}
              </span>{" "}
              <span className="text-sm sm:text-base">MIN</span>
            </div>
          </div>
          <div className="flex items-center" style={{marginLeft:"80px"}}>
            <span className="font-extrabold">
              <Seconds countdownZero={countdownZero} />
            </span>
            <span className="text-base sec" style={{ marginLeft: "-56px" }}>
              SEC
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default CountDown;
