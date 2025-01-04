import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Route Optimizer</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className="hover:text-yellow-300 transition duration-300">Home</NavLink>
            </li>
            <li>
              <NavLink to="/reports" className="hover:text-yellow-300 transition duration-300">Reports</NavLink>
            </li>
            <li>
              <NavLink to="/help" className="hover:text-yellow-300 transition duration-300">Help</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
