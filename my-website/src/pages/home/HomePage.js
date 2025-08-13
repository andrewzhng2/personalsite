import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BalldontlieAPI } from "@balldontlie/sdk";

// Removed NBA/team imports used by previous dashboard implementation

// Card images for the four-feature grid
// Using representative images from each section
// Paths are relative to this file (pages/home)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const workCard = require('../work/workimages/abg1.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sportsCard = require('../sports/sportsimages/ball2.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const actingCard = require('../acting/actimages/mrmumray.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const travelCard = require('../travel/travelimages/musk1.jpg');

const api = new BalldontlieAPI({ apiKey: "1a795e0e-94d9-4370-8572-ca4a306ffef5" });

const titles = [
  "a jack of all trades.",
  "a sales engineer.",
  "a CS graduate.",
  "a chef.",
  "a sport climber.",
];

export const rankedCities = [
  "Dubai",
  "Vienna",
  "Sydney",
  "Seoul",
  "New Orleans",
  "Mykonos",
  "Venice",
  "Los Angeles",
  "Madrid",
  "Rio de Janeiro",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [scores, setScores] = useState([]);
  const [shows, setShows] = useState([]);
  const [weather, setWeather] = useState([]);

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

  // FETCH NBA SCORES (yesterday)
  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yyyy = yesterday.getFullYear();
        const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
        const dd = String(yesterday.getDate()).padStart(2, '0');
        const dateStr = `${yyyy}-${mm}-${dd}`;

        const data = await api.nba.getGames({ dates: [dateStr] });

        const formatted = data.data.map(game => {
          const home = {
            short: game.home_team.abbreviation,
            score: game.home_team_score,
          };
          const away = {
            short: game.visitor_team.abbreviation,
            score: game.visitor_team_score,
          };
          return { home, away };
        });
        setScores(formatted);
      } catch (err) {
        console.error("Failed to fetch live box scores:", err);
        setScores([]);
      }
    };
    fetchLiveScores();
  }, []);

  // FETCH BROADWAY SHOWS
  useEffect(() => {
    const fetchBroadway = async () => {
      try {
        const res = await fetch("https://broadwayworldapi.onrender.com/broadway");
        const data = await res.json();
        const cleaned = data.map((item) => {
          const [showName] = item.show.split("\n");
          return {
            rank: item.rank,
            show: showName?.trim(),
          };
        });
        setShows(cleaned);
      } catch (err) {
        console.error("Error fetching Broadway shows:", err);
      }
    };
    fetchBroadway();
  }, []);

  // FETCH WEATHER (top cities)
  useEffect(() => {
    const API_KEY = "02cd484c5619492fa0303704252805";
    const fetchWeather = async () => {
      try {
        const responses = await Promise.all(
          rankedCities.map(city =>
            fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`)
              .then(res => res.json())
          )
        );
        const formatted = responses.map((data, index) => ({
          city: rankedCities[index],
          temp: Math.round(data.current?.temp_c ?? 0),
        }));
        setWeather(formatted);
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      }
    };
    fetchWeather();
  }, []);


  return (
    <div className="main-container">
      {!showIntro && (
      <header className="header">
        <a href='/' className="logo">AZ</a>
        <nav className='nav-links'>
          <Link to="/work">Work</Link>
          <Link to="/events">Events</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/travel">Travel</Link>
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
        <section className="hero-main">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">I'm Andrew Zhang!</h1>
              <h2 className="hero-subtitle">I'm <span className="typed">{typed}</span></h2>
              <p className="hero-quote">
                "Ultimately there is nothing that maximizes talent more than love for the game." - Bill Belichick, The Art of Winning
              </p>
              <div className="quote-divider"></div>
              <p className="hero-description">
                I'm a Queen's computer science major that just graduated and performed in 3 vastly different theatre extracurriculars. 
                I also climb 80 foot ice walls, play a LOT of basketball, and ride horses.
              </p>
              <p className="hero-description">
                I'm currently out on the West Coast, selling RTDs, hiking up mountains, surfing the sandy beaches, and jumping in rivers.
              </p>
              <p className="hero-description">
                To me, life is the game, and I'm always looking to gain perspective and new ways to learn about loving life!
              </p>
            </div>
            <div className="hero-images">
              <div className="image-placeholder">
                <img src="https://via.placeholder.com/300x400/F04F3D/FFFFFF?text=Andrew+Zhang" alt="Andrew Zhang" />
              </div>
              <div className="image-placeholder">
                <img src="https://via.placeholder.com/300x400/FFD75E/000000?text=Coming+Soon" alt="Portfolio" />
              </div>
            </div>
          </div>
        </section>

        <div className="clock">
          <strong></strong> {time}
        </div>

        <div className="scroll-cues" aria-hidden="true">
          <span className="chev"></span>
          <span className="chev"></span>
          <span className="chev"></span>
        </div>

        <section className="feature-grid">
          <Link to="/work" className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(${workCard})` }} />
            <div className="feature-caption">
              <div className="feature-title">Career</div>
              <div className="feature-tags"><span className="feature-tag">Work</span></div>
            </div>
            <div className="feature-details">
              {/* Intentionally left empty for now */}
            </div>
          </Link>

          <Link to="/sports" className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(${sportsCard})` }} />
            <div className="feature-caption">
              <div className="feature-title">Basketball</div>
              <div className="feature-tags"><span className="feature-tag">Sports</span></div>
            </div>
            <div className="feature-details">
              {scores.length === 0 ? (
                <div className="feature-empty">No NBA games found.</div>
              ) : (
                <ul className="feature-list">
                  {scores.slice(0, 10).map((g, i) => (
                    <li key={i}>
                      <span className="list-primary">{g.away.short} {g.away.score}</span>
                      <span className="list-sep"> - </span>
                      <span className="list-secondary">{g.home.short} {g.home.score}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>

          <Link to="/acting" className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(${actingCard})` }} />
            <div className="feature-caption">
              <div className="feature-title">Acting</div>
              <div className="feature-tags"><span className="feature-tag">Theatre</span></div>
            </div>
            <div className="feature-details">
              {shows.length === 0 ? (
                <div className="feature-empty">Loading top shows…</div>
              ) : (
                <ul className="feature-list">
                  {shows.slice(0, 10).map((s, i) => (
                    <li key={i}>
                      <span className="list-primary">{s.rank}.</span>
                      <span className="list-secondary"> {s.show}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>

          <Link to="/travel" className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(${travelCard})` }} />
            <div className="feature-caption">
              <div className="feature-title">Travel</div>
              <div className="feature-tags"><span className="feature-tag">Destinations</span></div>
            </div>
            <div className="feature-details">
              {weather.length === 0 ? (
                <div className="feature-empty">Fetching weather…</div>
              ) : (
                <ul className="feature-list">
                  {weather.slice(0, 10).map((w, i) => (
                    <li key={i}>
                      <span className="list-primary">{i + 1}. {w.city}</span>
                      <span className="list-secondary"> — {w.temp}°C</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        </section>
        </>
      )}
    </div>
  );
}