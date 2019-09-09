import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        { <h1>Movies Page</h1>}
        {movies.map(movie => {
          return <div> Title: {movie.title} <br></br>
          <br></br>Movie Length: {movie.time} 
          <ul> {movie.genres}</ul></div>
        })}
    </div>
    );
  };
  
  
  export default Movies;
