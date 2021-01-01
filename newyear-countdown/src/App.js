/**
 * Display Countdown To New Year
 * 
 * Author: gulshan.saini
 * Twitter: https://twitter.com/gulshansainis
 */

import React, { useEffect, useState } from "react";

function App() {
  let newYear = null;

  const calculateTimeLeft = () => {
    let today = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    let [date, month, year] = today.split("/");
    let [hrs, mins, secs] = time.split(":");
    newYear = Number(year)+1;

    const difference = new Date(`${newYear}-01-01 00:00:00`) - new Date(`${year}-${month}-${date} ${hrs}:${mins}:${secs}`);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const timerComponents = [];

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  
  
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>

      {
        timerComponents.length ? 
        <div>
            <h1>New Year Countdown In React</h1>
            <h2>{timerComponents}</h2>
        </div> : 
        <>
        <span>Happy New Year 2021!!!</span>
        </>
      }
    </div>
  );
}

export default App;