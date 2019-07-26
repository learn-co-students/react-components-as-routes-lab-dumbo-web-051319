import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const generateActors = actors.map((actor, i) =>(
    <div key={i}>
    <h3>Name: {actor.name}</h3>
    <p>Movies:</p>
    <ul>
    {actor.movies.map((movie,i) => <li key={i}>{movie}</li>)}
    </ul>
    </div>
    ))

  return (
    <div>
      <h1>Actors Page</h1>
      {generateActors}
    </div>
  );
};

export default Actors;
