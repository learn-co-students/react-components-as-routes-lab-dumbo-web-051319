import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <li><NavLink to="/" exact activeStyle={{
        color: 'red'
      }}>Home
      </NavLink></li>
      <li><NavLink to="/actors" exact activeStyle={{
        color: 'red'
      }}>Actors
      </NavLink></li>
      <li><NavLink to="/directors" exact activeStyle={{
        color: 'red'
      }}>Directors
      </NavLink></li>
      <li><NavLink to="/movies" exact activeStyle={{
        color: 'red'
      }}>Movies
      </NavLink></li>
    </div>
  );
};

export default NavBar;
