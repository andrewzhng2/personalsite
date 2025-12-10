import React, { useState } from "react";
import "./styles/WorkPage.css";

let snap1 = require("./images/snap1.jpg");
let jc1 = require("./images/jc1.jpg");
let abg1 = require("./images/abg1.jpg");
let rhill1 = require("./images/rhill1.jpg");
let sanso1 = require("./images/sanso1.jpg");
let ecu1 = require("./images/ecu3.JPG");
let synap = require("./images/synap.jpg");
let kumon1 = require("./images/kumon1.jpg");
let summit2 = require("./images/summit2.jpg");
let queen1 = require("./images/queen1.jpg");
let musk1 = require("./images/musk2.jpg");
let retainly1 = require("./images/retainly1.jpg");
let trvl1 = require("./images/trvl1.jpg");
let hybrid2 = require("./images/hybrid2.jpg");

const workItems = [
  {
    id: 1,
    company: "Snappy Innovations",
    role: "Software Developer & Business Analyst Intern",
    imageName: snap1,
    description: `A startup competitor to Uber Eats but with a full suite of any restaurant technology you could ever need.
    I was given the opportunity to build the frontend of a QR takeout system and then sell the product into restaurants.`,
    lessons:'Aspiration: My first taste of Sales Engineering, how to balance the asks of the customer and the asks of the development team.',
  },
  {
    id: 2,
    company: "Retainly",
    role: "Founding Full-Stack Engineer and Product Owner",
    imageName: retainly1,
    description: (
      <>
        For <a href="https://app.joinretainly.com/" target="_blank" rel="noopener noreferrer">Retainly</a>, I am building the frontend and backend of a software platform for realtors to manage their vendor lists and clients. Developing using Next, FastAPI, and PostgreSQL. Always building new features and fixing bugs. Learning all kinds of new technologies and tools: Resend, OpenAI API, Cloudflare, Redis, Google OAuth, Stripe.
      </>
    ),
    lessons:'Ownership: Leading a team by doing and taking responsibility.',
  },
  {
    id: 3,
    company: "Johnson Controls",
    role: "Automation Engineer Intern",
    imageName: jc1,
    description: `A 100000+ employee company that specializes in creating infrastructure such as security or HVAC.
    Worked on creating automation testing for hardware. At first we used the Java-based Framework Selenium, but our team saw the potential of JS-based Cypress and our team worked on the migration.
    I got the opportunity to work on our only MacBook, creating all the automation for MacOS.`,
    lessons:'Growth: What progress, communication, and impact looks like in a company with so many layers.',
  },
  {
    id: 4,
    company: "Kumon",
    role: "Kumon Assistant",
    imageName: kumon1,
    description: `Tutored the difficult kids in math and english, I had no problem since I knew what it was like being that kid.`,
    lessons:'Patience: Some people jut need more time to play at their own pace.',
  },
  {
    id: 5,
    company: "Ace Beverage Group",
    role: "Summer Sales Representative",
    imageName: abg1,
    description: `An extremely driven startup mentality but just got acquired Ready-To-Drink alcohol company with the slogan: LFG. 
    Booked 10-12 meetings in person with managers, sold in innovations, upsold main products, and built strong relationships with clients.`,
    lessons:'Relationships: The power of relationships and company culture. Every interaction matters.',
  },
  {
    id: 6,
    company: "Synapsis Biohackathon",
    role: "Lead Events Coodinator",
    imageName: synap,
    description: `A biotechnology biohackathon with a focus on AI the year I joined. 
    I was given the opportunity to lead a team of 5 coordinators, booking spaces, finding keynote speakers, and organizing the timetables.`,
    lessons:'Management: How to manage my own expectations of a teammate and how to get the best out of them without asking for too much.',
  },
  {
    id: 7,
    company: "Sansotei Ramen",
    role: "Line Cook",
    imageName: sanso1,
    description: `A small ramen chain in Toronto with a very fun team. Did everything from prepping, to cooking, to assembling, to cleaning.`,
    lessons:'Pressure: Nothing more stressful than the pace and and pressure of a kitchen. But with a good team, it is some incredible work.',
  },
  {
    id: 8,
    company: "Queen's University",
    role: "Private Tutor and Teaching Assistant",
    imageName: queen1,
    description: `Tutored and marked assignments for Data Analytics, Intro to Programming, and Operating Systems courses.`,
    lessons:'Sympathy: Remember that you were once that student asking those questions.',
  },
  {
    id: 9,
    company: "EF Tours",
    role: "Service Project Volunteer",
    imageName: ecu1,
    description: `Helped build elementary school in remote village in the Amazon Jungle.`,
    lessons:'Perspective: You do not need a lot to be happy.',
  },
  {
    id: 10,
    company: "Queen's Startup Summit",
    role: "Venture Capital Pitch Competition 2nd Place",
    imageName: summit2,
    description: `Invited to face the Commerce students, built my team, and won 2nd place prize in the Venture Capital Pitch Competition.`,
    lessons:'Grind: Put in the work and you will be rewarded. Someone else is putting in that work too.',
  },
  {
    id: 11,
    company: "Muskoka Woods",
    role: "Orientation Leader",
    imageName: musk1,
    description: `Selected to lead a group of 10 first year studenst for overnight 3-day Muskoka Woods trip filled with sports and arts.`,
    lessons:'Responsibility: How team culture can inspire the unexpected in the best way possible.',
  },
  {
    id: 12,
    company: "TRVL",
    role: "Personal Project",
    imageName: trvl1,
    description: `A travel planning website that I can use to plan trips the way they should be planned, adaptable and collaborative!`,
    lessons:'Hosting/Google Maps API: Needed a lot of patience and double-checking to make sure it worked.',
  },
  {
    id: 13,
    company: "City of Richmond Hill",
    role: "QA and Project Management Intern",
    imageName: rhill1,
    description: `A local government IT department for websites and local projects. I got the opportunity to write technical requirements and QA tests for basic government websites.`,
    lessons:'Accumulative advantage: how skills compound over time.',
  },
  {
    id: 14,
    company: "Hybrid",
    role: "Personal Project",
    imageName: hybrid2,
    description: `A website for tracking different activity sessions and optimizing the body by being a hybrid athlete. (Also wanted to figure out the buzz for Snowflake.)`,
    lessons:'Snowflake Analytics, Query Generation, and Data Modeling.',
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
            <p>{selected.lessons}</p>
          </div>
        </div>
      )}
    </div>
  );
}