import { useState } from "react";
import "./styles/SportsPage.css";

let climb1 = require("./images/climb1.jpg");
let climb2 = require("./images/climb2.jpg");
let crime1 = require("./images/crime.jpg");
let dss1 = require("./images/dss2.jpg");
let ball1 = require("./images/ball1.jpg");
let ball2 = require("./images/ball2.jpg");
let chef1 = require("./images/chef1.jpg");
let chef2 = require("./images/chef3.jpg");
let horse1 = require("./images/horse1.jpg");
let horse2 = require("./images/horse3.jpg");

const sports = [
  { name: "Basketball", image: ball2, image2: ball1, 
    description: "My one true addiction, I don't think I'd understand life without basketball. Shoot your shot, brick by brick, play the pace, no ego, for the love of the game <3",
    desciption2: "The WHY: The only place where a clash of egos is encouraged and rewarded. Any one can take the chance to be him, to be that guy.",
   },
  { name: "Culinary School", image: chef1, image2: chef2, 
    description: "Every second counts.",
    desciption2: "The WHY: Food is the easiest way to the heart.", 
  },
  { name: "Sport Climbing", image: climb1, image2: climb2, 
    description: "NOTHING wakes you up faster than falling 30 feet.",
    desciption2: "The WHY: Bravery is a muscle I need to train and I am afraid of heights. Plus, I am literally climbing to new heights to see more than I ever could.",
   },
  { name: "Equestrian", image: horse1, image2: horse2, 
    description: "A sleeper debate for hardest sport: Equestrian. How do you communicate with a teammate that speaks a language no human can speak?",
    desciption2: "The WHY: I'm part Mongolian, part Manchurian, and this is how I wanted to honor my heritage. I set out to find any way to learn how ride a horse. Varsity Equestrian was the answer.",
   },
  { name: "Acting", image: crime1, image2: dss1, 
    description: "Living truthfully under imaginary circumstances.",
    desciption2: "The WHY: I think everyone needs a bit of artistic expression in their life. This is it for me.",
  }
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
            <p>{selected.desciption2}</p>
          </div>
        </div>
      )}
    </div>
  );
}