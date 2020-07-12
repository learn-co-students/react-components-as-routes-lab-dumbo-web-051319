import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const generateMovies = movies.map((movie, i) => (
    <div key={i}>
    <h3>{movie.title}</h3>
    <p>Time: {movie.time}</p>
    <p>Genres:</p>
    <ul>{
      movie.genres.map((genre, i) => <li key={i}>{genre}</li>)
      }</ul>
    </div>
    ))

  return (
    <div>
        <h1>Movies Page</h1>
        {generateMovies}
    </div>
  );
};

export default Movies;
