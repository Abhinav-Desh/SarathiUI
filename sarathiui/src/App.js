import Header from './components/Header.tsx';
import MainContent from './components/MainContent.tsx';
import Footer from './components/Footer.tsx'
import './App.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen.tsx'

function App() {
  const [showIntro,setShowIntro] = useState(true);
  const [userMessage,setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [toggleSuggestion,setToggleSuggestion] = useState(true);
  // const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    const timer = setTimeout(()=>setShowIntro(false),2000);
    return ()=>clearTimeout(timer);
  },[]);


  // useEffect(() => {
  //   if (messages && messagesEndRef?.current && messages?.length > 1) {
  //     messagesEndRef?.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [messages]);


  return (
    <div className="App">
      {showIntro? <IntroScreen />:
   (
    <>
      <Header />
      <MainContent messages={messages} setMessages= {setMessages} userMessage={userMessage} setUserMessage={setUserMessage} toggleSuggestion={toggleSuggestion} setToggleSuggestion={setToggleSuggestion} />
      <Footer messages={messages} setMessages={setMessages} userMessage = {userMessage} setUserMessage ={setUserMessage} toggleSuggestion={toggleSuggestion} setToggleSuggestion={setToggleSuggestion}/>
    </>
  )}
    </div>
  );
}

export default App;
