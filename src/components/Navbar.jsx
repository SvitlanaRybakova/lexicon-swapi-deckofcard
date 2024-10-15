import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">APIs</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {routes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.path} className={({ isActive }) => (isActive ? 'active' : '')}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
