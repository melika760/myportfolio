
import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
    <Hero/>
    <Nav/>
<main>
  <Projects/>
  <Contact/>
</main>
    </div>
  );
}

export default App;
