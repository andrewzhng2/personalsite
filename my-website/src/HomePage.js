import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: "1a795e0e-94d9-4370-8572-ca4a306ffef5" });

const titles = [
  "a technical consultant.",
  "a content creator.",
  "a chef.",
  "a soccer player, climber, baller.",
  "an events coordinator.",
  "an actor."
];



export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [scores, setScores] = useState([]);

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

  useEffect(() => {
  const fetchLiveScores = async () => {
    try {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yyyy = yesterday.getFullYear();
      const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
      const dd = String(yesterday.getDate()).padStart(2, '0');
      const dateStr = `${yyyy}-${mm}-${dd}`;

      const data = await api.nba.getGames({dates:[dateStr]});

      const formatted = data.data.map(game => {
        const home = {
          id: game.home_team.id,
          short: game.home_team.abbreviation,
          full: game.home_team.full_name,
          score: game.home_team_score,
        };
        const away = {
          id: game.visitor_team.id,
          short: game.visitor_team.abbreviation,
          full: game.visitor_team.full_name,
          score: game.visitor_team_score,
        };

        const winner = home.score > away.score ? "home" : "away";

        return { home, away, winner, status: game.status };
      });

      setScores(formatted);

    } catch (err) {
      console.error("Failed to fetch live box scores:", err);
      setScores([{ game: "Could not fetch live scores.", score: "", status: "" }]);
    }
  };

  fetchLiveScores();
}, []);

  return (
    <div className="main-container">
      {!showIntro && (
      <header className="header">
        <a href='/' className="logo">AZ</a>
        <nav className='nav-links'>
          <Link to="/work">Work</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      )}

      {showIntro ? (
        <div className="intro-center">
          <h1 className="intro-name">ANDREW ZHANG</h1>
        </div>
      ) : (
        <>
        <section className="hero">
          <h1>Hey there, I'm Andrew Zhang!</h1>
          <h2>I'm <span className="typed">{typed}</span></h2>
          <p>I've always wanted my own personal hub for the things I cared about! So please explore around to see, everything has a reason and an intention. This website was fully built by my team. (AI + Me lol)
          </p>
        </section>

        <section className="live-section">
          <div className="live-box">
            <h3>Yesterday's NBA Scores:</h3>
            <div className="live-content">
              {scores.length === 0 ? (
                <p>Loading yesterday's scores...</p>
              ) : (
                <div className="score-grid">
                  {scores.map((game, i) => (
                    <div className="score-box" key={i}>
                      {[game.away, game.home].map((team, idx) => (
                        <div
                          key={idx}
                          className={`team-row ${game.winner === (idx === 1 ? "home" : "away") ? "winner" : "loser"}`}
                        >
                          <img
                            src={`https://cdn.nba.com/logos/nba/${team.id}/global/L/logo.svg`}
                            alt={team.short}
                            className="team-logo"
                            onError={(e) => (e.target.style.display = "none")}
                          />
                          <span className="team-name">{team.short}</span>
                          <span className="team-score">{team.score}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="live-box placeholder">
            <h3>Current Top 10 Broadway Shows</h3>
            <div className="live-content">
              <p>Coming Soon...</p>
            </div>
          </div>

          <div className="live-box placeholder">
            <h3>This Week's Weather in Toronto...</h3>
            <div className="live-content">
              <p>Coming Soon...</p>
            </div>
          </div>
        </section>
        </>
      )}
    </div>
  );
}