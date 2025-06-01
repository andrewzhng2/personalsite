import "./styles/EventPage.css";
import { useEffect, useState } from "react";

let tea1 = require("./images/eventimages/tea1.jpg");
let home1 = require("./images/eventimages/home1.jpg");
let veld1 = require("./images/eventimages/veld1.jpg");
let cottage1 = require("./images/eventimages/cottage1.jpg");
let bbq1 = require("./images/eventimages/bbq1.jpg");
let secsan1 = require("./images/eventimages/secsan2.jpg");
let dinpar1 = require("./images/eventimages/dinpar2.jpg");
let chef1 = require("./images/eventimages/chef1.jpg");
let mich1 = require("./images/eventimages/mich1.jpg");

const family = [
  { title: "Afternoon Tea", image: tea1, description: "Relaxed get-together with family and desserts." },
  { title: "Home", image: home1, description: "Just the comfort of being together with nothing planned." },
  { title: "VELD", image: veld1, description: "Took my siblings to VELD music festival — unforgettable." }
];

const friends = [
  { title: "Cottages", image: cottage1, description: "Escaping the city with friends, canoeing and fires." },
  { title: "BBQ", image: bbq1, description: "Grill master summer sessions in the backyard." },
  { title: "Secret Santa", image: secsan1, description: "Tradition where everyone goes too hard with costumes." }
];

const culinary = [
  { title: "Dinner Parties", image: dinpar1, description: "Cooking themed dinners with surprise menus." },
  { title: "George Brown Cooking/Baking", image: chef1, description: "Formal culinary training for passion and skills." },
  { title: "Michelin", image: mich1, description: "Documenting the journey of learning recipes solo." }
];

export default function EventsPage() {
  const [selected, setSelected] = useState(null);

  const renderRow = (items, title, direction) => (
    <div className="event-row-container">
      <h2 className="event-row-title">{title}</h2>
      <div className={`event-row ${direction}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className="event-card"
            onClick={() => setSelected(item)}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="event-overlay">
              <h3 className="event-text">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="events-page">
      {renderRow(family, "FAMILY", "slide-left")}
      {renderRow(friends, "FRIENDS", "slide-right")}
      {renderRow(culinary, "CULINARY", "slide-left")}

      {selected && (
        <div className="event-expanded" onClick={() => setSelected(null)}>
          <div className="event-expanded-content" onClick={(e) => e.stopPropagation()}>
            <button className="back-button" onClick={() => setSelected(null)}>← Back</button>
            <img src={selected.image} alt={selected.title} />
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}