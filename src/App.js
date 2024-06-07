import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import FullBody from './components/FullBody';
import LowerBody from './components/LowerBody';
import UpperBody from './components/UpperBody';
import ExerciseHero from './components/Hero/ExerciseHero';
import ExerciseDetailPage from './app/pages/ExerciseDetailPage.js';


function App() {
  return (
    <div className="App">
      <h1>Workout App</h1>
      <h2>This is where the Hero element will go.</h2>
      <Routes>
              <Route path='/' element={<ExerciseHero />} />
              <Route path='fullBody' element={<FullBody />} />
              <Route path='upperBody' element={<UpperBody />} />
              <Route path='lowerBody' element= {<LowerBody />} />
              <Route path='/:exerciseId' element={<ExerciseDetailPage />}
              />
      </Routes>
    </div>
  );
}

export default App;
