import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css'; // or use a dedicated layout.css

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      {!isHome && (
        <header className="header">
          <Link to="/" className="logo">AZ</Link>
          <nav className="nav-links">
            <Link to="/work" className="nav-link">Work</Link>
            <Link to="/experiences" className="nav-link">Experiences</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </header>
      )}
      <Outlet />
    </div>
  );
}