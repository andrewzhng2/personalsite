// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import EventPage from './EventPage';
import ActPage from './ActPage';
import SportsPage from './SportsPage';
import TravelPage from './TravelPage';
import ContactPage from './ContactPage';

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