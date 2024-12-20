import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Features from './components/Features';
import NutritionPanel from './components/Nutrition';
import { Container } from 'react-bootstrap';

function Home(){
    return (
        <div>
          <Navigation />
            <Container>
              <Features />
              <NutritionPanel/>
            </Container>
        </div>
      );
}

export default Home;