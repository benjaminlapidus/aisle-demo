import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation.js'
import Hero from './components/home/hero/hero.js'
import HowItWorks from './components/home/how-it-works/how-it-works.js'
import Cta from './components/home/cta/cta.js'


function App() {
  return (
    <>
   <Navigation />
   <Hero />
   <HowItWorks />
   <Cta />
   </>
  );
}

export default App;
