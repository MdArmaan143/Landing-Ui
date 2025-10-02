
import React from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Impact from './components/Impact';
import LaunchPad from './components/LaunchPad';
import OurProcess from './components/OurProcess';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <Impact/>
    <LaunchPad/>
    <OurProcess/>
    </div>
  );
}

export default App;