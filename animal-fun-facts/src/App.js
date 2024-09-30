import React from 'react';
import { animals } from './animals';
import './App.css';

const title = "";
const background = (
  <img 
    className='background'
    alt='ocean'
    src='/images/ocean.jpg'
  />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />
  );
}

const animalFacts = (
  <div>
    {background}
    <h1>
      {title === "" ? "Click an animal for a fun fact" : title}
    </h1>
    <div className='animals'>
      {images}
    </div>
  </div>
);

function App() {
  return animalFacts;
}

export default App;
