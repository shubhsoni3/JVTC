import React from 'react';
import FunFact from '../../FunFact';

export default function FunFactSection({ bgUrl, data }) {
  return (
    <div className="container">
      <div
        className="cs_funfact_1_wrap cs_radius_30 cs_bg_filed"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // backgroundColor:'#e12454',
        }}
      >
        {data?.map((item, index) => (
          <FunFact 
            key={index} 
            number={item.number} 
            title={item.title} 
            start={item.start}  // Pass start value
            duration={item.duration}  // Pass duration value
          />
        ))}
      </div>
    </div>
  );
}
