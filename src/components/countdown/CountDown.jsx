// import React, { useEffect, useState } from "react";
// import { getRemainingTimeUntilMsTimestamp } from "./utils/CountDownUtils";

// import Seconds from "../seconds/Seconds";
// import "./CountDown.css";
// const defaultRemainingTime = {
//   SEC: "00",
//   MIN: "00",
//   HOURS: "00",
//   DAYS: "00",
// };

// function CountDown() {
//   const [countdownZero, setCountdownZero] = useState(false);

//   const startDate = new Date("2023-10-21T06:19:00");
//   const countdownStartTimestampMs = startDate.getTime();

//   const endDate = new Date("2023-10-27T15:14:00");
//   const countdownEndTimestampMs = endDate.getTime();
//   console.log("End ddeatrac", countdownEndTimestampMs);

//   const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       updateRemainingTime(countdownEndTimestampMs);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [countdownEndTimestampMs]);

//   function updateRemainingTime(endTime) {
//     const updatedRemainingTime = getRemainingTimeUntilMsTimestamp(endTime);
//     setRemainingTime(updatedRemainingTime);

//     if (
//       updatedRemainingTime.DAYS === "00" &&
//       updatedRemainingTime.HOURS === "00" &&
//       updatedRemainingTime.MIN === "00"
//     ) {
//       setCountdownZero(true);
//     } else {
//       setCountdownZero(false);
//     }
//   }

//   console.log("remainingTime", remainingTime);
//   return (
//     <>
//       {!countdownZero ? (
//         <>
//           <div>
//             <div className="font-Montserrat text-center sm:space-x-16zz">
//               <div className="md:hidden vvsm:mt-1  mt-40 sm:mt-36 sm:mr-20">
//                 <div className="flex flex-col items-center space-x-1 ">
//                   <span className="text-5xl font-extrabold sm:text-7xl vvsm:text-5xl ">
//                     {remainingTime.DAYS}
//                   </span>
//                   <span className="text-sm sm:text-base sm:pb-10 vsm:pb-14 vvsm:pb-3">
//                     DAYS
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center space-x-1">
//                   <span className="text-6xl font-extrabold sm:text-7xl vvsm:text-5xl">
//                     {remainingTime.HOURS}
//                   </span>
//                   <span className="text-sm sm:text-base sm:pb-10 vsm:pb-14 vvsm:pb-3">
//                     HOURS
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center space-x-1">
//                   <span className="text-6xl font-extrabold sm:text-7xl vvsm:text-5xl">
//                     {remainingTime.MIN}
//                   </span>
//                   <span className="text-sm sm:text-base">MIN</span>
//                 </div>
//               </div>

//               <div className="hidden md:flex flex-row font-Montserrat text-center space-x-3">
//                 <div className="flex items-center space-x-1">
//                   <span className="text-6xl font-extrabold sm:text-5xl">
//                     {remainingTime.DAYS}
//                   </span>
//                   <span className="text-sm sm:text-base">DAYS</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <span className="text-6xl font-extrabold sm:text-5xl">
//                     {remainingTime.HOURS}
//                   </span>
//                   <span className="text-sm sm:text-base">HOURS</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <span className="text-6xl font-extrabold sm:text-5xl">
//                     {remainingTime.MIN}
//                   </span>
//                   <span className="text-sm sm:text-base">MIN</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}

//       <div className="flex items-center ml-[68px] ">
//         <span className="font-extrabold">
//           <Seconds countdownZero={countdownZero} />
//         </span>
//         <span className="text-base sec" style={{ marginLeft: "-120px" }}>
//           SEC
//         </span>
//       </div>
//     </>
//   );
// }

// export default CountDown;
// import React, { useEffect, useRef, useState } from "react";

// function CountDown() {
//   const [timerDays, setTimerDays] = useState("00");
//   const [timerHours, setTimerHours] = useState("00");
//   const [timerMin, setTimerMin] = useState("00");
//   const [timerSec, setTimerSec] = useState("00");
//   let interval = useRef();

//   const startTimer = () => {
//     const countDownDate = new Date("October 27, 2023 15:58:00").getTime();

//     interval.current = setInterval(() => {
//       // Corrected setinterval to setInterval
//       const now = new Date().getTime();
//       const distance = countDownDate - now;

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const sec = Math.floor((distance % (1000 * 60)) / 1000);

//       if (distance < 0) {
//         clearInterval(interval.current);
//       } else {
//         setTimerDays(String(days).padStart(2, "0"));
//         setTimerHours(String(hours).padStart(2, "0"));
//         setTimerMin(String(min).padStart(2, "0"));
//         setTimerSec(String(sec).padStart(2, "0"));
//       }
//     }, 1000);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => {
//       clearInterval(interval.current);
//     };
//   }, []); // Added an empty dependency array

//   return (
//     <div className="flex items-center justify-center space-x-2">
//       <p className="text-center">{timerDays} Days</p>
//       <span className="text-center">:</span>
//       <p className="text-center">{timerHours} Hours</p>
//       <span className="text-center">:</span>
//       <p className="text-center">{timerMin} Min</p>
//       <span className="text-center">:</span>
//       <p className="text-center">{timerSec} Sec</p>
//     </div>
//   );
// }

// export default CountDown;
import React, { useEffect, useRef, useState } from "react";
import Seconds from "../seconds/Seconds";

function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("October 27, 2023 17:41:00").getTime();

    interval.current = setInterval(() => {
      // Corrected setinterval to setInterval
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMin(String(min).padStart(2, "0"));
        setTimerSec(String(sec).padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []); // Added an empty dependency array

  return (
    <div className="flex items-center justify-center space-x-2">
      <p className="text-center">{timerDays} Days</p>
      <span className="text-center">:</span>
      <p className="text-center">{timerHours} Hours</p>
      <span className="text-center">:</span>
      <p className="text-center">{timerMin} Min</p>
      <span className="text-center">:</span>
      <p className="text-center">{timerSec} Sec</p>{" "}
      <div className="flex items-center ml-[68px] ">
        <span className="font-extrabold">
          <Seconds
            countdownZero={
              timerDays === "00" && timerHours === "00" && timerMin === "00"
            }
          />
        </span>
        <span className="text-base sec" style={{ marginLeft: "-120px" }}>
          SEC
        </span>
      </div>
    </div>
  );
}

export default CountDown;
