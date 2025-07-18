import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BalldontlieAPI } from "@balldontlie/sdk";
import teamIdMap from './team_id_mapping.json';

const api = new BalldontlieAPI({ apiKey: "1a795e0e-94d9-4370-8572-ca4a306ffef5" });

const titles = [
  "a sales engineer.",
  "a content creator.",
  "an explorer.",
  "a chef.",
  "a outdoor sport climber",
  "an actor."
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
        const res = await fetch("https://broadwayworldapi.onrender.com/broadway");
        const data = await res.json();

        const cleaned = data.map((item) => {
          const [avgPrice, topPrice] = item.avg_ticket.split("$").filter(Boolean);
          const [showName, theater] = item.show.split("\n");

          return {
            rank: item.rank,
            show: showName?.trim(),
            theater: theater?.trim(),
            gross: item.gross,
            capacity: item.capacity,
            avgTicket: `$${avgPrice}`,
            topTicket: `$${topPrice}`,
          };
        });

        setShows(cleaned);
      } catch (err) {
        console.error("Error fetching Broadway shows:", err);
      }
    };

    fetchBroadway();
  }, []);

  // FETCH WEATHER
  useEffect(() => {
    const API_KEY = "02cd484c5619492fa0303704252805"; // Replace with your actual key

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
          temp: Math.round(data.current.temp_c),
          icon: data.current.condition.icon,
          desc: data.current.condition.text,
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
          <Link to="/acting">Acting</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/travel">Travelling</Link>
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
          <p className='intro-text'>I'm a passionate 22 year old who just graduated with a Comp Sci degree from Queens. I'm currently trying a completely different career path in sales, in a field I had no experience (which is alcohol RTDs), in the complete opposite lifestyle: The West Coast.</p>
          <p className='intro-text'>My three values right now are: Community, Health, Growth. My community is what gets me out of bed in the morning, they have helped build me to who I am today. I want to keep pushing my limits and growing so that I can provide for my community. (Can't do that without being available, so that's why health is top priority.)</p>
          <p className='intro-text'>So please explore my website and hopefully, it gives you some insight into who I truly am.</p>
        </section>

        <div className="clock">
          <strong></strong> {time}
        </div>

        <section className="live-dashboard">
            <div className="dashboard-column basketball-theme">
              <h3>Yesterday's NBA Scores:</h3>
              {scores.length === 0 ? (
                <p className="no-data-msg">No NBA Games :(</p>
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

          <div className="dashboard-column broadway-theme">
            <h3>Current Top 10 Broadway Shows</h3>
            {shows.length === 0 ? (
              <p className="no-data-msg">Render application needs 50 seconds to load, so please literally give it a minute!</p>
            ) : (
              shows.map((show, index) => (
                <div key={index} className="column-item">
                  <div className="team-row">
                    <span className="prod-name">
                      {show.rank}. {show.show}
                    </span>
                  </div>
                  <div className="team-row">
                    <span className="theater">{show.theater}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="dashboard-column weather-theme">
            <h3>Today's Weather... in My Top 10 Travel Destinations!</h3>
            {weather.length === 0 ? (
              <p className="no-data-msg">Fetching weather...</p>
            ) : (
              weather.map((city, index) => (
                <div key={index} className="column-item">
                  <div className="team-row">
                    <img
                      src={city.icon}
                      alt={city.desc}
                      className="team-logo"
                    />
                    <span className="city-name">{index + 1}. {city.city}</span>
                    <span className="temperature">{city.temp}°C</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
        </>
      )}
    </div>
  );
}