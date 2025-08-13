import { Outlet, useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import './App.css'; // or use a dedicated layout.css

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      {!isHome && (
        <header className="header">
          <Link to="/" className="alt-logo">AZ</Link>
          <nav className="nav-links">
            <NavLink
              to="/work"
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              Work
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              Events
            </NavLink>
            <NavLink
              to="/sports"
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              Sports
            </NavLink>
            <NavLink
              to="/travel"
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              Travel
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              Contact
            </NavLink>
          </nav>
        </header>
      )}
      <Outlet />
    </div>
  );
}