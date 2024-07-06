import React, { useState, useEffect } from 'react';
import './App.css'; 

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="digital-clock-container">
      <div className="digital-clock">
        <p>{formattedTime}</p>
      </div>
    </div>
  );
}

export default DigitalClock;
