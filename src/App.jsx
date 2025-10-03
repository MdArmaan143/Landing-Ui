
import React from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Impact from './components/Impact';
import LaunchPad from './components/LaunchPad';
import OurProcess from './components/OurProcess';
import OurWork from './components/OurWork';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <Impact/>
      <OurWork/>
    <LaunchPad/>
    <OurProcess/>
    <Testimonials/>
    <Pricing/>
    <Faq/>
    <Footer/>
    </div>
  );
}

export default App;