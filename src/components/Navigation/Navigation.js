import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink exact="true" to="/">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
}
