import "./styles/EventPage.css";
import { useEffect, useState } from "react";

let tea1 = require("./images/eventimages/tea1.jpg");
let summit1 = require("./images/eventimages/summit1.jpg");
let veld1 = require("./images/eventimages/veld1.jpg");
let cottage1 = require("./images/eventimages/cottage1.jpg");
let bbq1 = require("./images/eventimages/bbq1.jpg");
let secsan1 = require("./images/eventimages/secsan2.jpg");
let dinpar1 = require("./images/eventimages/dinpar2.jpg");
let chef1 = require("./images/eventimages/chef1.jpg");
let mich1 = require("./images/eventimages/mich1.jpg");
let tea2 = require("./images/eventimages/tea2.jpg");
let summit2 = require("./images/eventimages/summit2.jpg");
let veld2 = require("./images/eventimages/veld2.jpg");
let cottage2 = require("./images/eventimages/cottage2.jpg");
let bbq2 = require("./images/eventimages/bbq2.jpg");
let secsan2 = require("./images/eventimages/secsan1.jpg");
let dinpar2 = require("./images/eventimages/dinpar1.jpg");
let chef2 = require("./images/eventimages/chef3.jpg");
let mich2 = require("./images/eventimages/mich2.jpg");

const family = [
  { title: "Afternoon Tea", image: tea1, image2: tea2, description: "The first time I got that big paycheck, I took my mom for afternoon tea! Now it's a tradition every Mother's Day. She's the reason I got my fashion. That's it. Jk love you mom" },
  { title: "Secret Santa", image: secsan1, image2: secsan2, description: "I love all holidays, but Christmas has got to be my favourite. This year I did 4 Secret Santas! Who doesn't like getting together (and gifts obviously)" },
  { title: "VELD", image: veld1, image2: veld2, description: "Crazy to say that an EDM music festival is such an important annual family tradition (for the younger generation). But it's truly a beautiful moment in a lively environment." }
];

const friends = [
  { title: "Cottages", image: cottage1, image2: cottage2, description: "Canada's specialty. Gotta enjoy the simplicity of life sometimes: nature, kayaking, bonfires, and hot tubs with the boys. Family too I guess." },
  { title: "Annual BBQ", image: bbq1, image2: bbq2, description: "Andrew's Annual August Big Backyard Bonanza. Since I missed prom AND grad to covid, I didn't even get any proper goodbyes! I host this every year to catchup and introduce new people I've met on my journey!" },
  { title: "Startup Summit", image: summit1, image2: summit2, description: "If you know the reputation of Commerce kids at Queens, then you know why we entered this competition. Us Comp Sci kids had to beat them at their own game. A pitch competition." }
];

const culinary = [
  { title: "Dinner Parties", image: dinpar1, image2: dinpar2, description: "They say food is an easy key to someone's heart. Cooking isn't hard, crafting a themed menu is. Shoutout Jon Favreau in Chef. (and Scarlett Johansson)" },
  { title: "Cooking/Baking", image: chef1, image2: chef2, description: "Certified culinary arts certificate, but I got a lot more classes to take. Italian, French, Baking, Plating, man I am excited." },
  { title: "Michelin", image: mich1, image2: mich2, description: "I've been to 4 1-star Michelins so far, please ask me how I felt about them." }
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
        <div className="event-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>← Back</button>
            <img src={selected.image2} alt={selected.title} />
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}