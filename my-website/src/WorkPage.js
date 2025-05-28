// components/WorkPage.jsx
import React, { useState } from "react";
import "./styles/WorkPage.css";

let snap1 = require("./images/snap1.jpg");
let jc1 = require("./images/jc1.jpg");
let abg1 = require("./images/abg1.jpg");

const workItems = [
  {
    id: 1,
    company: "Snappy Innovations",
    role: "Software Developer & PM Intern",
    imageName: snap1,
    description: "Flutter app development, project management, and team collaboration.",
  },
  {
    id: 2,
    company: "Johnson Controls",
    role: "Software Developer & PM Intern",
    imageName: jc1,
    description: "Automation of Security systems, software development, and project management.",
  },
  {
    id: 3,
    company: "Ace Beverage Group",
    role: "Summer Sales Representative",
    imageName: abg1,
    description: "Selling and promoting beverages, managing customer relationships, and achieving sales targets.",
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