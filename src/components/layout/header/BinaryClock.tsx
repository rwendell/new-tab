import { Dispatch, SetStateAction, useEffect, useState } from "react";


const BinaryClock = () => {
  const time = new Date();
  const [hours, setHours] = useState(time.getHours());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());

  if (seconds >= 60) {
    setSeconds(0);
    setMinutes(minutes + 1);
  }

  if (minutes > 60) {
    console.log("minutes", minutes);
    setMinutes(0);
    setHours(hours + 1);
  }

  if (hours > 24) {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });

  return (
    <div>
      {`
        ${hours.toString(2)}
        ${minutes.toString(2)}  
        ${seconds.toString(2)}  
    `}
    </div>
  );
};
export { BinaryClock };
