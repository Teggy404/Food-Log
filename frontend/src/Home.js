import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MacroPanel from './components/Macros';
import Features from './components/Features';

function Home(){
    return (
        <div>
          <Navigation />
          <MacroPanel />
          <Features />
        </div>
      );
}

export default Home;