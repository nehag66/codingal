import React, { useEffect, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(600);

  var minutes = Math.floor(counter / 60);
  var seconds = counter % 60;
  var formattedtime = minutes + ":" + seconds;

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <div className="timer-text">{formattedtime}</div>
    </div>
  );
};

export default Timer;
