import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div>{actor.name}
        <br></br>
        <ul>{actor.movies}</ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
