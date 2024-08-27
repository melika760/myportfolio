import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {

  const SendMessage=async(UserData)=>{
    await fetch("https://freight-53981-default-rtdb.europe-west1.firebasedatabase.app/Request.json",{
      method:"POST",
      body:JSON.stringify({
        use:UserData
      })
    })
  }
  return (
<>
    
    <Hero/>
    <Nav/>

  <About/>
  <Projects/>
  <Contact onConfirm={SendMessage}/>
<Footer/>
</>
 
  );
}

export default App;
