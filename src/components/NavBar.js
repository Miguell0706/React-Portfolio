import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <header className="bg-gradient-to-r from-black to-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-green-100 text-4xl font-bold hahmlet "
          >
            Miguel Lozano
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-100"
            activeClassName="text-green-100 bg-blue-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white  hover:text-green-100"
            activeClassName="text-green-100 bg-blue-900"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white  hover:text-green-100"
            activeClassName="text-green-100 bg-blue-900"
          >
            Contact Me
          </NavLink>
        </nav>
 
      </div>
    </header>
  );
}
