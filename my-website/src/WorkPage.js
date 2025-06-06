import React, { useState } from "react";
import "./styles/WorkPage.css";

let snap1 = require("./images/workimages/snap1.jpg");
let jc1 = require("./images/workimages/jc1.jpg");
let abg1 = require("./images/workimages/abg1.jpg");
let rhill1 = require("./images/workimages/rhill1.jpg");
let sanso1 = require("./images/workimages/sanso1.jpg");
let kumon1 = require("./images/workimages/kumon1.jpg");
let dash1 = require("./images/workimages/dash1.jpg");
let queen1 = require("./images/workimages/queen1.jpg");

const workItems = [
  {
    id: 1,
    company: "Snappy Innovations",
    role: "Software Developer & Business Analyst Intern",
    imageName: snap1,
    description: `A startup competitor to Uber Eats but with a full suite of POS and all restaurant technologies you could ever need.
    It was a great experience to work with a company of about 30+ people where every team was interconnected and I got to learn from conversations with every single person, even the CEO.
    I'm grateful that I got to build and execute the full project lifecycle of a QR code system that allowed customer to order takeout without entering a busy restaurant.
    From the initial idea, to the design, to the development in Flutter, pitching it to existing clients, and working with restaurant owners to refine features based on their needs.`,
  },
  {
    id: 2,
    company: "Johnson Controls",
    role: "Automation Engingeer Intern",
    imageName: jc1,
    description: `A 100000+ employee company that specializes in building automation and security systems.
    I got the opportunity to work on the automation development team for our security systems: everything from keypads, fire alarms, panels etc. 
    At first we used the Java-based Framework Selenium, but our team saw the potential of JS-based Cypress and our team worked on all that migration.
    I learned about the processes of such a large-scale company and the importance of documentation and regulation between teams.`,
  },
  {
    id: 3,
    company: "City of Richmond Hill",
    role: "QA and Project Management Intern",
    imageName: rhill1,
    description: `When that adult cheque hit as a 16 year old, I didn't even know what to do. 
    But what I really learnt from that experience while I was so young was how skills compound over time.
    I got to see how I could start working on putting in the reps early on in my career, and how that could pay off later.`,
  },
  {
    id: 4,
    company: "Ace Beverage Group",
    role: "Summer Sales Representative",
    imageName: abg1,
    description: `An extremely innovation-focused RTD company where the company motto was LFG (Lead by Example, Fearlessly Innovate, and Get Shit Done!)
    Completely out of my comfort zone, I was in a client facing role, in an industry I had never worked in before in alcohol, and in an entire region I've never been to with no safety nets of connections.
    I basically ran across the country away from home for one of the greatest learning experiences of my life.`,
  },
  {
    id: 5,
    company: "Queen's University",
    role: "Private Tutor and Teaching Assistant",
    imageName: queen1,
    description: `I got the chance to TA as early as my second year for Data Analytics, Operating Systems and Intro to Programming courses. 
    This experience taught me the importance of sympathy, remember that you were once that student asking those questions.`,
  },
  {
    id: 6,
    company: "Kumon",
    role: "Kumon Assistant",
    imageName: kumon1,
    description: `I kept being selected to work with the more troublesome kids because they said I was a kid at heart and 
    I was the only one close to an adult that they listened to. Great kids really. 
    What I really learned is that kids just want to be heard and some attention, maybe just like the adults.`,
  },
  {
    id: 7,
    company: "Sansotei Ramen",
    role: "Kitchen Staff",
    imageName: sanso1,
    description: `I just wanted to wash dishes at first, then it became the front line of the smallest, hottest kitchen ever. 
    I didn't even realize how high the pressure got in rush hour or how crammed we were cause of how great that team and management were.`,
  },
  {
    id: 8,
    company: "DoorDash/Instacart",
    role: "Dasher/Shopper",
    imageName: dash1,
    description: "Finally got to use my simple math for something practical, calculating the value of a kilometer and time spent to see if orders were worth taking. It wasn't pretty work, but I was university broke.",
  },
];

export default function WorkPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="work-page">
        {workItems.map((item, i) => (
          <div key={i} className="work-card" onClick={() => setSelected(item)}>
            <img src={item.imageName} alt={item.company} className="work-image"/>
            <div className="work-overlay">
              <h2 className="work-company">{item.company}</h2>
              <p className="work-title">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="work-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="work-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>
              ← Back
            </button>
            <img src={selected.imageName} alt={selected.company}/>
            <h2>{selected.role}</h2>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}