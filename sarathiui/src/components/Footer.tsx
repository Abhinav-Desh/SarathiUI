import React from "react";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Footer = () => {  
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Changed from onClick to onSubmit for form submission */}
        <form onSubmit={handleForm} className="footer-form">
          <div className="something-type">
            <div className="attach-file">
              <AttachFileIcon style={{ color: "rgb(146 146 146)" }} />
            </div>
            <input
              type="text"
              placeholder="Type something here..."
              className="text-something"
            />
          </div>
          {/* Added type="submit" to button */}
          <button type="submit" className="send">
            <SendIcon style={{ color: '#585858' }} />
          </button>
        </form>
        <div className="footer-text">
          <sup>*</sup>These are AI-generated responses and may contain inaccuracies. Responses may take a few seconds.
        </div>
      </div>
    </div>
  );
};

export default Footer;
