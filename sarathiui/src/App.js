import Header from './components/Header.tsx';
import MainContent from './components/MainContent.tsx';
import Footer from './components/Footer.tsx'
import './App.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen.tsx'

function App() {
  const [showIntro,setShowIntro] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>setShowIntro(false),2000);
    return ()=>clearTimeout(timer);
  },[]);
  return (
    <div className="App">
      {showIntro? <IntroScreen />:
   (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )}
    </div>
  );
}

export default App;
