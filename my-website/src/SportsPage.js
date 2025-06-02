import { useState } from "react";
import "./styles/SportsPage.css";

let track1 = require("./images/sportsimages/track1.jpg");
let climb1 = require("./images/sportsimages/climb1.jpg");
let soccer1 = require("./images/sportsimages/soccer1.jpg");
let ball1 = require("./images/sportsimages/ball1.jpg");
let swim1 = require("./images/sportsimages/swim1.jpg");
let swim2 = require("./images/sportsimages/swim2.jpg");
let swim3 = require("./images/sportsimages/swim3.jpg");
let horse1 = require("./images/sportsimages/horse1.jpg");
let golf1 = require("./images/sportsimages/golf1.jpg");
let golf2 = require("./images/sportsimages/golf2.jpg");

const sports = [
  { name: "Basketball", image: ball1, description: "Drive-and-kick + lockdown D." },
  { name: "Swimming", image: swim3, description: "Casual club-level stroke practice." },
  { name: "Sport Climbing", image: climb1, description: "Bouldering, lead climbing, and ice climbing." },
  { name: "Equestrian", image: horse1, description: "Family legacy, still learning basics." },
  { name: "Golf", image: golf1, description: "Weekend range work & putting comps." }
];

export default function SportsPage() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="sports-container">
        {sports.map((sport, i) => (
          <div
            key={i}
            className={`sport-column ${hovered === i ? "hovered" : hovered !== null ? "dimmed" : ""}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(sport)}
            style={{ backgroundImage: `url(${sport.image})` }}
          >
            <div className="sport-overlay">
              <span>{sport.name}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="sport-expanded" onClick={() => setSelected(null)}>
          <div className="sport-expanded-content" onClick={(e) => e.stopPropagation()}>
            <button className="back-button" onClick={() => setSelected(null)}>← Back</button>
            <img src={selected.image} alt={selected.name} />
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}