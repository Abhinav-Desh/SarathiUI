import React from "react";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState, useRef } from 'react';

interface FooterProps {
  messages: { text: string; sender: string; }[];
  setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; }[]>>;
  userMessage: string;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
  toggleSuggestion: boolean;
  setToggleSuggestion: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ messages, setMessages, userMessage, setUserMessage, toggleSuggestion, setToggleSuggestion }) => {
  const [file, setFile] = useState<any>(null);
  
  const fileInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile); 
      console.log(selectedFile); 
    } else {
      console.error('No file selected!');
    }
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userMessage.trim()) {
      
      setMessages(prevMessages => [ ...prevMessages,   { sender: 'user', text: userMessage }]);
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: `Reply for the particular response: ${userMessage}` }]);

      setToggleSuggestion(false);
      setUserMessage('');
    }
    console.log('Form submitted');
    console.log(userMessage);
    
    // console.log(file.name)
   
    setFile(null);
    if(file!==null){
      console.log(file.name);
    }
    else{
      console.error("file is null right now ")
    }
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
              <input
                type="file"
                ref={fileInput}
                onChange={onChange}
                style={{ display: 'none' }}
              />
              <div onClick={() => fileInput.current?.click()}>
                <AttachFileIcon style={{ color: "rgb(146, 146, 146)" }} />
              </div>
            </div>
            <input
              type="text"
              placeholder="Type something here..."
              className="text-something"
              value={userMessage}
              onChange={typing}
            />
          </div>
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
