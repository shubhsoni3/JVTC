// src/components/Counter.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
};

Counter.propTypes = {
  end: PropTypes.number.isRequired,
};

export default Counter;
