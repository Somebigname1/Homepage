import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dayOptions = { weekday: 'long' }; 
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' }; 

  return (
    <div className='current-time'>
      <p>&#123; {dateTime.toLocaleDateString(undefined, dayOptions)}  {dateTime.toLocaleTimeString(undefined, timeOptions)} &#125;</p>
    
    </div>
  );
}

export default DateTimeDisplay;



