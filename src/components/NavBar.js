import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gradient-to-r from-black to-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-green-800 text-4xl font-bold hahmlet tracking-widest"
          >
            Miguel Lozano
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-100"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white  hover:text-green-100"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="infline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/Miguell0706"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/miguel-lozano-836445155/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          
        </div>
      </div>
    </header>
  );
}
