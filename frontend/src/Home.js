import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Features from './components/Features';
import NutritionPanel from './components/Nutrition';

function Home(){
    return (
        <div>
          <Navigation />
          <Features />
          <NutritionPanel/>
        </div>
      );
}

export default Home;