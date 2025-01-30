import React from "react";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Footer = () => {

  return (
    <div className="footer-container">
      
      <div className="footer-content">
      <form  className="footer-form">
        <div className="something-type">
            <div className="attach-file"><AttachFileIcon style={{color:"rgb(146 146 146);"}}/></div>
            <input type="text" placeholder="Type something here..." className="text-something"/></div>
        <button className="send"><SendIcon style={{color:'white'}}/></button>
      </form>
      <div className="footer-text"> <sup>*</sup>These are AI generated responses and may contain inaccuracies. Responses may take a few seconds.</div>
      </div>
    </div>
  );
};

export default Footer;
