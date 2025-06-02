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
    description: "Got to work through the entire SaaS development lifecycle, requirements with clients, design, development, testing, and deployment. This is where I was first inspired to blend my interests in working directly with clients and software development. I loved the expereience in a startup that was hungry to get funding but great communication and innovation.",
  },
  {
    id: 2,
    company: "Johnson Controls",
    role: "Automation Engingeer Intern",
    imageName: jc1,
    description: "Working at a company at this size taught me a lot the importance of structure and culture, especially from a management perspective. I was able to work on a variety of projects, from building automation systems for MacOS and Windows systems to Agile project management.",
  },
  {
    id: 3,
    company: "Ace Beverage Group",
    role: "Summer Sales Representative",
    imageName: abg1,
    description: "Manage and grow a portfolio of 60+ accounts, from major chains to local businesses. I was able to apply my business knowledge and communication skills to build relationships with clients and drive sales growth. This experience taught me the importance of innovation and building a real and good relationship with distribution.",
  },
  {
    id: 4,
    company: "City of Richmond Hill",
    role: "QA and Project Management Intern",
    imageName: rhill1,
    description: "When that adult cheque hit as a 16 year old, I didn't even know what to do. ",
  },
  {
    id: 5,
    company: "Queen's University",
    role: "Private Tutor and Teaching Assistant",
    imageName: queen1,
    description: "I got the chance to TA as early as my second year, OS and Intro to Programming. I was able to help students understand complex concepts and improve their coding skills. This experience taught me the importance of sympathy, understanding that you were once the student asking questions.",
  },
  {
    id: 6,
    company: "Kumon",
    role: "Kumon Assistant",
    imageName: kumon1,
    description: "I kept being selected to work with the more troublesome kids because they said I was a kid at heart and I was the only one close to an adult that they listened to. Great kids really.",
  },
  {
    id: 7,
    company: "DoorDash/Instacart",
    role: "Dasher/Shopper",
    imageName: dash1,
    description: "Finally got to use my simple math for something practical, calculating the value of a kilometer and time spent to see if orders were worth taking. It wasn't pretty work, but I was university broke",
  },
  {
    id: 8,
    company: "Sansotei Ramen",
    role: "Kitchen Staff",
    imageName: sanso1,
    description: "Literally everything, just wanted to wash dishes at first, then it became the front line of the smallest hottest kitchen. The amazing team and managment made it so I didn't even realize how hot it was till I see now as a customer.",
  },
];

export default function WorkPage() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div>
      <div className="work-page">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="work-card"
            onClick={() => setSelectedWork(item)}
          >
            <img src={item.imageName} alt={item.company} className="work-image"/>
            <div className="work-overlay">
              <div>
                <h2 className="work-company">{item.company}</h2>
                <p className="work-title">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div className="work-expanded" onClick={() => setSelectedWork(null)}>
          <div className="work-expanded" onClick={(e) => e.stopPropagation()}>
            <button className="back-button" onClick={() => setSelectedWork(null)}>
              ← Back
            </button>
            <img src={selectedWork.imageName} alt={selectedWork.company}/>
            <h2>{selectedWork.company}</h2>
            <p>{selectedWork.title}</p>
            <p>{selectedWork.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}