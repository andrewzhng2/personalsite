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
  { id: 1, city: "Chicago", country: "USA", image: chi1, description:`Chi-town, best food I've ever had, flicking the bean, what a city.` },
  { id: 2, city: "Mont Tremblant", country: "Canada", image: mont1, description:`White-water rafting, via ferrata, ziplining, great trip during COVID.` },
  { id: 3, city: "Punta Cana", country: "Dominican Republic", image: punta1, description:`Just sit back and relax, infinite food, drinks, sun. What a time with the boys.` },
  { id: 4, city: "Kentucky", country: "USA", image: ken1, description:`Red River Gorge, what a uniquely beautiful place to climb. KFC also so good here.` },
  { id: 5, city: "Paris", country: "France", image: fra1, description:`Opulence at its finest, get a baguette and just look at all the things you can't afford. At least you can eat cake!` },
  { id: 6, city: "NYC", country: "USA", image: nyc1, description:`Concrete Jungle Tomato, basically Toronto but better in every way.` },
  { id: 7, city: "Chongqing", country: "China", image: china5, description:`The real Sci-Fi city, so busy, but so beautiful.` },
  { id: 8, city: "London", country: "England", image: eng1, description:`Who else trip planning something like at 14? At the same time, shoutout to my mom for believing in me. This London/Manchester trip was the best I've been on. Sherlock, KSI, Austin Powers.` },
  { id: 9, city: "Amazon Jungle", country: "Ecuador", image: ecu1, description:`Got selected to help build an elementary school in the AMAZON JUNGLE. 50 people went on this trip, 40 got sick. Me and my boy didn't ;).` },
  { id: 10, city: "Tokyo", country: "Japan", image: jap1 , description:`Yeah, everything you hear about Japan is true. If you wanna see something whack tho, people watch on the subway.`},
  { id: 11, city: "Pizza Tour", country: "Boston", image: pizza2, description:`You know the rules. One bite. Dave Portnoy inspired this trip and we learned a valuable lesson: don't trust everything you see online. Apizza is good tho.`},
  { id: 12, city: "Heidelberg", country: "Germany", image: heid1, description:`What an underrated country, I can't wait to go back. Heidelberg is a small university town in the middle of a valley with a river in between it. And the only place I've taken a free ride from a stranger.` },
  { id: 13, city: "Cruise!", country: "Secret 1", image: cruise1, description:`I can't even describe how much I love cruises. My brother is deathly seasick, so it's banned now, but the way some people got it for trains, I got it for cruise ships.` },
  { id: 14, city: "Miami", country: "US", image: miami3, description:`Opulent vibes of Miami mixed with the relaxation of Punta Cana. Also don't go to E11ven unless you do your research.` },
  { id: 15, city: "Amsterdam", country: "Netherlands", image: amst1, description:`My first solo trip at 17, thanks to my brother having moved there for a year. Biking was somehow better than walking and driving there.`},
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
        <div className="travel-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="travel-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>← Back</button>
            <img src={selected.image} alt={selected.city} />
            <h2>{selected.city}</h2>
            <p>{selected.description}</p>
          </div>
        </div>
      )}

      <p>I fully endorse going all out when travelling, why try for 50% when it can be 100%. Put all your heart into it, you'll still feel like you missed out on so much, but at least you can say you tried. (yes this means that travelling for work or school is not it.)</p>
    </div>
  );
}