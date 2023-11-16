import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation.js'
import Hero from './components/home/hero/hero.js'
import HowItWorks from './components/home/how-it-works/how-it-works.js'
import Cta from './components/home/cta/cta.js'
import SocialProof from './components/home/social-proof/social-proof';
import BrandGrowth from './components/home/brand-growth/brand-growth';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
   <Navigation />
   <Hero />
   <SocialProof />
   <HowItWorks />
   <BrandGrowth />
   <Cta />
   <Footer />
   </>
  );
}

export default App;
