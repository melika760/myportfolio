import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import { Context } from './Store/Context';
import Footer from './components/Footer';
function App() {
  const[section,setsection]=useState("home")

  const SendMessage=async(UserData)=>{
    await fetch("https://freight-53981-default-rtdb.europe-west1.firebasedatabase.app/Request.json",{
      method:"POST",
      body:JSON.stringify({
        use:UserData
      })
    })
  }
  return (
  <Context.Provider value={{section,setsection}}>
    
    <Hero/>
    <Nav/>

  <About/>
  <Projects/>
  <Contact onConfirm={SendMessage}/>
<Footer/>
  </Context.Provider>
 
  );
}

export default App;
