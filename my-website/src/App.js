// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/home/HomePage';
import WorkPage from './pages/work/WorkPage';
import EventPage from './pages/events/EventPage';
import ActPage from './pages/acting/ActPage';
import SportsPage from './pages/sports/SportsPage';
import TravelPage from './pages/travel/TravelPage';
import ContactPage from './pages/contact/ContactPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/acting" element={<ActPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}