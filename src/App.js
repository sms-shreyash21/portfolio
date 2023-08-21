
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Activities/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
