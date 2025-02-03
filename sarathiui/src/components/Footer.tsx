import React from "react";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface FooterProps {
  messages: {  text: string; sender: string; }[];
  setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; }[]>>;
  userMessage: string;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
  toggleSuggestion:boolean;
  setToggleSuggestion: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ messages, setMessages, userMessage, setUserMessage,toggleSuggestion,setToggleSuggestion }) => {
  
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userMessage.trim()) {
      setMessages([...messages, {sender: 'user', text:userMessage}]);
      setMessages((prev)=> [...prev, {sender: 'bot', text:"Reply for the particular response: "+ userMessage}]);

      setToggleSuggestion(false);
      setUserMessage('');
    }
    console.log('Form submitted');
    console.log(userMessage);
  };

  const typing = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <form onSubmit={handleForm} className="footer-form">
          <div className="something-type">
            <div className="attach-file">
              <AttachFileIcon style={{ color: "rgb(146 146 146)" }} />
            </div>
            <input
              type="text"
              placeholder="Type something here..."
              className="text-something"
              value={userMessage}
              onChange={typing}
            />
          </div>
          {/* Added type="submit" to button */}
          <button type="submit" className="send">
            <SendIcon style={{ color: 'white', fontSize: '18px' }} />
          </button>
        </form>
        <div className="footer-text">
          <sup>*</sup> These are AI-generated responses and may contain inaccuracies. Responses may take a few seconds.
        </div>
      </div>
    </div>
  );
};

export default Footer;
