import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const generateDirectors = directors.map((director, i) => (
    <div key={i}>
    <h3>{director.name}</h3>
    <p>Movies:</p>
    <ul>{
      director.movies.map((movie, i) => <li key={i}>{movie}</li>)
      }</ul>
    </div>
    ))

  return (
    <div>
      <h1>Directors Page</h1>
      {generateDirectors}
    </div>
  );
}

export default Directors
