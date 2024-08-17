import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import { Context } from './Store/Context';
function App() {
  const[section,setsection]=useState("home")
  return (
  <Context.Provider value={{section,setsection}}>
    
    <Hero/>
    <Nav/>
<main>
  <About/>
  <Projects/>
  <Contact/>
</main>
  </Context.Provider>
 
  );
}

export default App;
