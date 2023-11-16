import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation.js'
import Hero from './components/home/hero/hero.js'
import HowItWorks from './components/home/how-it-works/how-it-works.js'
import Cta from './components/home/cta/cta.js'
import SocialProof from './components/home/social-proof/social-proof';
import BrandGrowth from './components/home/brand-growth/brand-growth';
import Footer from './components/footer/footer';
import { useState, useEffect } from 'react';


export default function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //       .then((response) => response.json())
  //       .then((data) => {
  //          console.log(data);
  //          setPosts(data);
  //       })
  //       .catch((err) => {
  //          console.log(err.message);
  //       });
  // }, []);

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