import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">APIs</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">SwiperAPI</NavLink>
          </li>
          <li>
            <NavLink to="deckocard">DeckofcardsAPI</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
