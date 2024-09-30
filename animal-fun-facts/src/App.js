import { animals } from './animals';
import { React } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = "";
const background = (
  <img 
    class = 'background'
    alt = 'ocean'
    src = '/images/ocean.jpg'
    />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      onClick ={displayFact}
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />
  );
}

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const fact = animals[animal].facts[index];
  const p = document.getElementById('fact');
  p.innerHTML = fact;
  }

const showBackground = true;


const animalFacts = (
  <div>
    {showBackground && background}
    <h1>
      {title || "Click an animal for a fun fact"}
    </h1>
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
);
root.render(animalFacts);






