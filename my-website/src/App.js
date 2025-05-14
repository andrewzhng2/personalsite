import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const titles = [
  "a technical consultant.",
  "a content creator.",
  "a chef.",
  "a soccer player, climber, baller.",
  "an events coordinator.",
  "an actor."
];

function App() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Hide intro (and show header) after 2.5 seconds
  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const current = titles[index % titles.length];
    const typingSpeed = isDeleting ? 30 : 80;

    const handleTyping = () => {
      setTyped(prev =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && typed === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typed === "") {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typed, isDeleting, index]);

  return (
    <div className="main-container">
      {!showIntro && (
      <header className="header">
        <a href='/' className="logo">AZ</a>
        <nav className='nav-links'>
          <a href='#'>Work</a>
          <a href='#'>Experiences</a>
          <a href='#'>Events</a>
          <a href='#'>Contact</a>
        </nav>
      </header>
      )}

      {showIntro ? (
        <div className="intro-center">
          <h1 className="intro-name">ANDREW ZHANG</h1>
        </div>
      ) : (
        <main className="hero">
          <h1>Hey there, I'm Andrew Zhang!</h1>
          <h2>I'm <span className="typed">{typed}</span></h2>
          <p>Always looking for opportunities to experience something new or fruitful and give it my all 
            when does times come.
          </p>
        </main>
      )}
    </div>
  );
}

export default App;
