import React, { useState, useEffect } from 'react';

const suggestion = [
  { name: 'Update Mobile Number' },
  { name: 'Update Email' },
  { name: 'Update Bank Details' },
  { name: 'Back to Menu' },
];

const MainContent = () => {
  // Initialize the state for storing the formatted time
  const [initialTime, setInitialTime] = useState<string>('');

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
          <div className="time-live">{initialTime}</div>
        </div>

        <div className="sender-content">
          <div className="sender-logo">SA</div>

          <div className="sender-message">
            {/* <div className="ai-name">SARATHI AI</div> */}
            <div className="sender-text" style={{ lineHeight: '25px' }}>
              Hi, I am SarathiAi - Pramerica Life Insurance Chatbot. I'm here to help you with any question you have today? Click on the menu button below to get started with your Insurance needs.
            </div>
            <div className="sender-timing"></div>
          </div>
        </div>

        <div className="suggestions animate__animated animate__fadeInUp">
          <div className="suggestions-heading">Here are suggestions..</div>
          <div className="suggestion-content">
            {suggestion.map((ele, index) => (
              <div key={index} className={`suggestion-content-${index + 1}`}>
                {/* <div className="mobile-view"></div> */}
                <div className="">{ele.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* user-content */}
        <div className="user-content">
          <div className="user-message">
            {/* <div className="user-name">YOU</div> */}
            <div className="user-text" style={{ lineHeight: '25px' }}>
              Update my mobile number
            </div>
          </div>
          {/* <div className="user-logo">Y</div> */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
