import React, { useState, useEffect, ReactEventHandler } from 'react';
import { useRef } from 'react';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
const suggestion = [
  { name: 'Update Mobile Number' },
  { name: 'Update Email' },
  { name: 'Update Bank Details' },
  { name: 'Back to Menu' },
];
interface MainContentProps {
  messages: {  text: string; sender: string; }[];
  setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; }[]>>;
  userMessage: string;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
  toggleSuggestion:boolean;
  setToggleSuggestion: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainContent: React.FC<MainContentProps> = ({ messages, setMessages, userMessage, setUserMessage,toggleSuggestion,setToggleSuggestion}) => {
  // Initialize the state for storing the formatted time
  const [initialTime, setInitialTime] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
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
    if (messages && messagesEndRef?.current && messages?.length > 1) {
      messagesEndRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const presentTime = new Date();
    const formattedPresentTime = getFormattedTime(presentTime);
    setInitialTime(formattedPresentTime);
  }, []);
  
  const suggestiontype = (e:any)=>{
    console.log(e);
    setMessages([...messages,{sender: 'user', text:e}]);
    setToggleSuggestion(false);
  }
  return (
    <div className="mainContent-container">
      <div className="mainContent-content">
        <div className="opening-time">
          <div className="time-live">{initialTime}</div>
        </div>

        <div className="sender-content">
          <div className="sender-logo">SA</div>

          <div className="sender-message">
            {/* <div className='tick-icon'><DoneAllIcon style={{fontSize:'18px'}}/></div> */}
            <div className="sender-text" style={{ lineHeight: '25px' }}>
              Hi, I am SarathiAi - Pramerica Life Insurance Chatbot. I'm here to help you with any question you have today? Click on the menu button below to get started with your Insurance needs.
            </div>
            <div className="sender-timing"></div>
          </div>
        </div>

       {toggleSuggestion && (<div className="suggestions animate__animated animate__fadeInUp">
          <div className="suggestions-heading">Here are suggestions..</div>
          <div className="suggestion-content">
            {suggestion.map((ele, index) => (
              <div key={index} className={`suggestion-content-${index + 1}`}>
                {/* <div className="mobile-view"></div> */}
                <div className="" onClick={(e)=>{suggestiontype(ele.name)}}>{ele.name}</div>
              </div>
            ))}
          </div>
        </div>)}

        {/* user-content */}
        {messages.map((element,index)=>(
          element.sender === 'bot' ?
          <div key={index} className="sender-content">
          <div className="sender-logo">SA</div>

          <div className="sender-message">
            {/* <div className='tick-icon'><DoneAllIcon style={{fontSize:'18px'}}/></div> */}
            <div className="sender-text" style={{ lineHeight: '25px' }}>
              {element.text}
            </div>
            <div className="sender-timing"></div>
          </div>
        </div>: 
        (
          <div key={index} className="user-content">
          <div className="user-message">
            {/* <div className="user-name">YOU</div> */}
            <div className="user-text" style={{ lineHeight: '25px' }}>
              {element.text}
            </div>
          </div>
          {/* <div className="user-logo">Y</div> */}
        </div>
        )
        ))}
         <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MainContent;
