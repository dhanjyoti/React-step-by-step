import React from 'react';
import './App.css';
import { petData } from './data';

function App() {

  return (
      <div className='App'>
        <h1>My pets</h1>
        <ul className='container'>
          {
            petData.map((pet, index)=>{
              return (
                <li key={index}>
                <h1>{pet.name}</h1>
                <img src={pet.image}
                alt={pet.name} width='200px' height='150' />
                <h2>{pet.type}</h2>
                <p>{pet.description}</p>
                <ul className='skills'>
                  {
                    pet.skills.map((skill, index)=>(
                      <li key={skill}>{skill}</li>
                    ))
                  }
                </ul>
              </li>
            )})
          }
        </ul>
      </div>
    )
}

export default App;
