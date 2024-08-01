import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
