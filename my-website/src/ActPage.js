import "./styles/ActPage.css";

let headshot = require("./images/actimages/happyHeadshot.jpg");
let dss1 = require("./images/actimages/dss1.jpg");
let lake1 = require("./images/actimages/lake1.jpg");
let multi1 = require("./images/actimages/multi1.jpg");

let resume = require("./assets/AndrewZhangActingResume.pdf");

export default function ActPage() {
  return (
    <div className="acting-page">
      <div className="acting-header">
        <h1>"Living Truthfully Under Imaginary Circumstances"</h1>
      </div>

      <div className="acting-productions">
        <div className="acting-block">
          <img src={dss1} alt="DSS: Nosebleed" />
          <div className="acting-text">
            <h2>Nosebleed</h2>
            <p>I got to play the lead role as my dream job, a talk show host, in a theatre production set in a satirical comedy about a nosebleed. </p>
          </div>
        </div>
        <div className="acting-block reverse">
          <img src={multi1} alt="Multicoloured Toothpaste" />
          <div className="acting-text">
            <h2>Multicoloured Toothpaste</h2>
            <p>I got to play the storyteller role as one of two twin bunnies, Modernity and Monotony, in a lovecraftian horror.</p>
          </div>
        </div>
        <div className="acting-block">
          <img src={lake1} alt="Lake Effect" />
          <div className="acting-text">
            <h2>Lake Effect</h2>
            <p>I got to sing and dance in an interpretive movement production about Lake Ontario.</p>
          </div>
        </div>
        <p className="story">On resdiscovering my love for theatre in my last year of uni, I was a bit, honestly, scared since the last time I acted was in high school. But what's special is that the whole theatre community I was in was so nice. Everybody was so helpful and guiding me on my direction. The professor that listened to my concerns and gave me all the books, phenomenal writers who created so creatively, directors who transformed text into a fantastic production, and amazing cast and crew all with their own unique individual journey.</p>
      </div>

      <div className="acting-resume">
          <a
            href={resume}
            className="acting-resume"
            target="_blank"
            rel="noreferrer"
          >
            View Acting Résumé
          </a>
        </div>
    </div>
  );
}