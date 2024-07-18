import React from 'react';
import CountUp from 'react-countup';

export default function FunFact({ number, title, start = 0, duration = 2.5 }) {
  return (
    <div className="cs_funfact cs_style_1 text-center">
      <h2 className="cs_funfact_numbers cs_fs_72">
        <CountUp 
          start={start}  // Starting point of the count
          end={parseFloat(number)}  // End point of the count
          duration={duration}  // Duration of the count animation in seconds
          separator=","  // Separator for thousands
          suffix={number.includes('%') ? '%' : (number.includes('+') ? '+' : '')}  // Add suffix based on the number
          decimals={number.includes('.') ? 2 : 0}  // Show decimals if there is a period in the number
        />
      </h2>
      <p className="cs_funfact_title m-0 cs_heading_colors">{title}</p>
    </div>
  );
}
