// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/home/HomePage';
import WorkPage from './pages/work/WorkPage';
import SportsPage from './pages/play/PlayPage';
import ContactPage from './pages/contact/ContactPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/workhard" element={<WorkPage />} />
          <Route path="/playhard" element={<SportsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}