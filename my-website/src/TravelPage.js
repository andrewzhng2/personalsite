import './styles/TravelPage.css';
import { useEffect, useState } from 'react';

let chi1 = require("./images/travelimages/chi1.jpg");
let mont1 = require("./images/travelimages/mont1.jpg");
let punta1 = require("./images/travelimages/punta1.jpg");
let ken1 = require("./images/travelimages/ken1.jpg");
let fra1 = require("./images/travelimages/fra1.jpg");
let nyc1 = require("./images/travelimages/nyc1.jpg");
let nyc2 = require("./images/travelimages/nyc2.jpg");
let china1 = require("./images/travelimages/china1.jpg");
let china5 = require("./images/travelimages/china5.jpg");
let eng1 = require("./images/travelimages/eng1.jpg");
let ecu1 = require("./images/travelimages/ecu2.jpg");
let jap1 = require("./images/travelimages/jap1.jpg");
let cruise1 = require("./images/travelimages/cruise1.jpg");
let pizza1 = require("./images/travelimages/pizza1.jpg");
let pizza2 = require("./images/travelimages/pizza2.jpg");
let heid1 = require("./images/travelimages/heid1.jpg");
let miami1 = require("./images/travelimages/miami1.jpg");
let miami3 = require("./images/travelimages/miami3.jpg");
let amst1 = require("./images/travelimages/amst1.jpg");

const travelItems = [
  { id: 1, city: "Chicago", country: "USA", image: chi1 },
  { id: 2, city: "Mont Tremblant", country: "Canada", image: mont1 },
  { id: 3, city: "Punta Cana", country: "Dominican Republic", image: punta1 },
  { id: 4, city: "Kentucky", country: "USA", image: ken1 },
  { id: 5, city: "Paris", country: "France", image: fra1 },
  { id: 6, city: "NYC", country: "USA", image: nyc1 },
  { id: 7, city: "Chongqing", country: "China", image: china5 },
  { id: 8, city: "London", country: "England", image: eng1 },
  { id: 9, city: "Amazon Jungle", country: "Ecuador", image: ecu1 },
  { id: 10, city: "Tokyo", country: "Japan", image: jap1 },
  { id: 11, city: "Pizza Tour", country: "Boston", image: pizza2},
  { id: 12, city: "Heidelberg", country: "Germany", image: heid1 },
  { id: 13, city: "Cruise!", country: "Secret 1", image: cruise1 },
  { id: 14, city: "Miami", country: "US", image: miami3 },
  { id: 15, city: "Amsterdam", country: "Netherlands", image: amst1 },
];

export default function TravelPage() {
  const [visible, setVisible] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let delay = 0;
    const order = [];

    for (let row = 0; row < 3; row++) {
      const start = row * 5;
      const end = start + 5;
      const rowItems = travelItems.slice(start, end);
      order.push(...(row % 2 === 0 ? rowItems : rowItems.reverse()));
    }

    order.forEach((item, i) => {
      setTimeout(() => {
        setVisible(prev => [...prev, item.id]);
      }, i * 300);
    });
  }, []);

  return (
    <div className="travel-page">
      {travelItems.map(item => (
        <div
          key={item.id}
          className={`travel-card ${visible.includes(item.id) ? "visible" : ""}`}
          onClick={() => setSelected(item)}
        >
          <img src={item.image} alt={item.city} className="travel-image" />
          <div className="travel-overlay">
            <div>
              <h2 className="travel-city">{item.city}</h2>
              <p className="travel-country">{item.country}</p>
            </div>
          </div>
        </div>
      ))}

      {selected && (
        <div className="travel-expanded" onClick={() => setSelected(null)}>
          <div className="travel-expanded" onClick={e => e.stopPropagation()}>
            <button className="back-button" onClick={() => setSelected(null)}>← Back</button>
            <img src={selected.image} alt={selected.city} />
            <h2>{selected.city}</h2>
            <p>{selected.country}</p>
          </div>
        </div>
      )}
    </div>
  );
}