import React, { useEffect, useState } from "react";
import "../../styles/index.css";


const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  const padNumber = (number) => {
    return number.toString().padStart(6, "0");
  };

  const digitArray = padNumber(seconds)
    .split("")
    .map((digit, index) => (
      <div key={index} className="digit-container">
        {digit}
      </div>
    ));

  return (
    <div className="counter-container">
      <div className="clock-symbol"><i className="far fa-clock"></i></div>
      {digitArray}
    </div>
  );
};

export default SecondsCounter;

