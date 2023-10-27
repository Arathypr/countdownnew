// CountDownUtils.jsx
import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  const isPast = timestampDayjs.isBefore(nowDayjs);
  const diff = isPast
    ? nowDayjs.diff(timestampDayjs)
    : timestampDayjs.diff(nowDayjs);

  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  return {
    SEC: padWidthZeros(seconds, 2),
    MIN: padWidthZeros(minutes, 2),
    HOURS: padWidthZeros(hours, 2),
    DAYS: padWidthZeros(days, 2),
    isPast: isPast,
  };
}

function padWidthZeros(number, minLength) {
  const numberString = Math.abs(number).toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}
