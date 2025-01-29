import React, { useState, useEffect } from 'react';

const MainContent = () => {
  // Initialize the state for storing the formatted time
  const [initialTime, setInitialTime] = useState('');

  // Function to format time as '12-hour' with AM/PM
  function getFormattedTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    return date.toLocaleTimeString([], options);
  }

  useEffect(() => {
    const presentTime = new Date();
    const formattedPresentTime = getFormattedTime(presentTime);

    setInitialTime(formattedPresentTime);
  }, []);

  return (
    <div className="mainContent-container">
      <div className="mainContent-content">
        <div className="opening-time">
          <div className="time-live">
            {initialTime}
          </div>
        </div>
        <div className="sender-content"></div>
        <div className="suggestions"></div>
      </div>
    </div>
  );
};

export default MainContent;
