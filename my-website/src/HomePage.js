import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BalldontlieAPI } from "@balldontlie/sdk";
import teamIdMap from './team_id_mapping.json';

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

  // HIDE INTRO
  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(introTimer);
  }, []);

  // TYPING EFFECT
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

  // UPDATE CLOCK
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      const day = now.toLocaleDateString("en-US", { weekday: "long" });
      const dateStr = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

      setTime(`${day},    ${dateStr}   ${hours}:${minutes}:${seconds} ${ampm}`);
    };

    updateClock(); // initial call
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // FETCH NBA SCORES
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

  // FETCH BROADWAY SHOWS
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchBroadway = async () => {
      try {
        const res = await fetch("https://broadway-grosses-api.vercel.app/api/latest");
        const data = await res.json();
        setShows(data.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch Broadway shows:", err);
      }
    };

    fetchBroadway();
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
          <p>Finally, a self-built personal hub for the things I cared about! Please explore around to see, everything has a reason and an intention. This website was fully built by my team. (team = AI + me)
          </p>
        </section>

        <div className="clock">
          <strong>Today's Date and Time (PST):</strong> {time}
        </div>

        <section className="live-dashboard">
            <div className="dashboard-column">
              <h3>Yesterday's NBA Scores:</h3>
              {scores.length === 0 ? (
                <p>No NBA Games :(</p>
              ) : (
                scores.slice(0, 10).map((game, i) => (
                  <div className="column-item" key={i}>
                    {[game.away, game.home].map((team, idx) => {
                      if (!team) return null; // <-- prevents potential crash
                      return (
                        <div
                          key={idx}
                          className={`team-row ${game.winner === (idx === 1 ? "home" : "away") ? "winner" : "loser"}`}
                        >
                          <img
                            src={`https://cdn.nba.com/logos/nba/${teamIdMap[team.id]}/global/L/logo.svg`}
                            alt={team.short}
                            className="team-logo"
                            onError={(e) => (e.target.style.display = "none")}
                          />
                          <span className="team-name">{team.short}</span>
                          <span className="team-score">{team.score}</span>
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
          </div>

          <div className="dashboard-column">
            <h3>Current Top 10 Broadway Shows</h3>
            {shows.length === 0 ? (
              <p className="no-data-msg">No Broadway data</p>
            ) : (
              shows.map((show, i) => (
                <div className="column-item" key={i}>
                  <strong>#{show.rank}</strong><br />
                  {show.show}<br />
                  <span style={{ fontSize: '12px', color: '#777' }}>
                    {show.theater} – {show.capacity}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="dashboard-column">
            <h3>This Week's Weather... Around the World!</h3>
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