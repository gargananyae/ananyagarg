
import Intro from './components/Intro/Intro';
import Splash from './components/Splash/Splash'
import { useEffect, useState } from 'react';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer'


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    document.title = "Ananya Garg | Personal Website"
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
      loading?
      <Splash/>
      :
      <>
        <Intro/>
        <Project/>
        <Footer/>
      </>
    
  );
}

export default App;
