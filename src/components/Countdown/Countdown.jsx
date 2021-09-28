import React, { useEffect, useState } from "react";
import './countdown.scss'

const targetTime = new Date("2022-03-01").getTime();

export const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
 
      <p className="counter">
        <span>{days} Days </span>
        <span>{hours} Hours </span>
        <span>{minutes} Minutes </span>
        <span>{seconds} Seconds</span>
        
      </p>
    </div>
  );
};

export default Countdown;
