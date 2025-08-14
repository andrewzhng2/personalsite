import { useState } from "react";
import "./styles/SportsPage.css";

let climb1 = require("./sportsimages/climb1.jpg");
let climb2 = require("./sportsimages/climb2.jpg");
let crime1 = require("./sportsimages/crime.jpg");
let dss1 = require("./sportsimages/dss2.jpg");
let ball1 = require("./sportsimages/ball1.jpg");
let ball2 = require("./sportsimages/ball2.jpg");
let chef1 = require("./sportsimages/chef1.jpg");
let chef2 = require("./sportsimages/chef3.jpg");
let horse1 = require("./sportsimages/horse1.jpg");
let horse2 = require("./sportsimages/horse3.jpg");

const sports = [
  { name: "Basketball", image: ball1, image2: ball2, 
    description: "My one true addiction, I don't think I'd understand life without basketball. Shoot your shot, brick by brick, play the pace, no ego, for the love of the game <3",
    desciption2: "The WHY: The only place where a clash of egos is encouraged and rewarded. Any one can take the chance to be him, to be that guy.",
   },
  { name: "Culinary School", image: chef1, image2: chef2, 
    description: "Every second counts.",
    desciption2: "The WHY: Food is the easiest way to the heart.", 
  },
  { name: "Sport Climbing", image: climb1, image2: climb2, 
    description: "I can tell you that NOTHING wakes you up faster than falling 30 feet. But then you try again and just go up. I love bouldering, lead climbing, and ice climbing.",
    desciption2: "The WHY: I am literally climbing to new heights to see more than I ever could. Also, my biggest fear is falling so it gets me used to feeling of discomfort and fear",
   },
  { name: "Equestrian", image: horse1, image2: horse2, 
    description: "I'm part Mongolian, part Manchurian, and this is how I wanted to honor my heritage. Plus it was cowboy season. So I set out to find any way to learn how ride a horse. Varsity Equestrian was the answer.",
    desciption2: "The WHY: Since you can't talk to a horse, nothing in life is even close to how much you have to trust your instinct to do equestrian. How can you guess what the horse feels and will react?",
   },
  { name: "Acting", image: crime1, image2: dss1, 
    description: "My dad's favourite (and only) sport that he plays. I'm actually named after a golf course as well. I wish my shots didn't slice so hard.",
    desciption2: "The WHY: A pure game of mental warfare, where it's just you vs. you. It's also about remembering that every shot is a new opportunity, the past or future shouldn't affect anything. Stay present.",
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