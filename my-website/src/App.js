// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import ExpPage from './ExpPage';
import EventPage from './EventPage'
import ContactPage from './ContactPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/experiences" element={<ExpPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}