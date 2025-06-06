import { useState } from "react";
import "./styles/SportsPage.css";

let track1 = require("./images/sportsimages/track1.jpg");
let climb1 = require("./images/sportsimages/climb1.jpg");
let climb2 = require("./images/sportsimages/climb2.jpg");
let soccer1 = require("./images/sportsimages/soccer1.jpg");
let ball1 = require("./images/sportsimages/ball1.jpg");
let ball2 = require("./images/sportsimages/ball2.jpg");
let swim1 = require("./images/sportsimages/swim1.jpg");
let swim2 = require("./images/sportsimages/swim2.jpg");
let swim3 = require("./images/sportsimages/swim3.jpg");
let horse1 = require("./images/sportsimages/horse1.jpg");
let horse2 = require("./images/sportsimages/horse3.jpg");
let golf1 = require("./images/sportsimages/golf1.jpg");
let golf2 = require("./images/sportsimages/golf2.jpg");

const sports = [
  { name: "Basketball", image: ball1, image2: ball2, description: "My one true addiction, I almost wouldn't understand life without basketball. Shoot your shot, brick by brick, play the pace, no ego, for the love of the game <3" },
  { name: "Swimming", image: swim3, image2: swim2, description: "5 AM wakeups, followed by ice cold water, just to be yelled out for underperforming? Sounds like hell, but nothing taught me more discipline than competitive swimming." },
  { name: "Sport Climbing", image: climb1, image2: climb2, description: "Bouldering, lead climbing, and ice climbing." },
  { name: "Equestrian", image: horse1, image2: horse2, description: "I'm part Mongolian, part Manchurian, and this is how I wanted to honor my heritage. Plus it was cowboy season. So I set out to find any way to learn how ride a horse. Varsity Equestrian was the answer." },
  { name: "Golf", image: golf1, image2: golf2, description: "My dad's favourite (and only) sport that he plays. I wish my shots didn't slice so hard." }
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
            <img src={selected.image2} alt={selected.name} />
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}