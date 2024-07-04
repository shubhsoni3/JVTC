import React, { useState, useEffect } from "react";

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.ceil(end / (duration / 20)); // Update every 20ms
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + step;
        return nextCount >= end ? end : nextCount;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default CountUp;
