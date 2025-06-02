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
        <div className="acting-top">
          <a
            href={resume}
            className="acting-resume"
            target="_blank"
            rel="noreferrer"
          >
            View Acting Résumé
          </a>
          <img
            src={headshot}
            alt="Andrew Zhang Headshot"
            className="acting-headshot"
          />
        </div>
      </div>

      <h2 className="acting-subheading">Productions I've Been a Part Of</h2>

      <div className="acting-productions">
        <div className="acting-block">
          <img src={dss1} alt="Nosebleed" />
          <p>Nosebleed</p>
        </div>
        <div className="acting-block">
          <img src={multi1} alt="Multicoloured Toothpaste" />
          <p>Multicoloured Toothpaste</p>
        </div>
        <div className="acting-block">
          <img src={lake1} alt="Lake Effect" />
          <p>Lake Effect</p>
        </div>
        {/* Add more blocks as needed */}
      </div>
    </div>
  );
}