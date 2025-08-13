import "./styles/ContactPage.css";

let resume = require("./assets/AndrewZhangResume.pdf");
let picture = require("./china.jpg");

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img
          src={picture}
          alt="Andrew Zhang"
          className="contact-photo"
        />
      </div>

      <div className="contact-right">
        <div className="contact-location">For The Love of the Game!</div>

        <div className="contact-info">
          <p>Andrew Zhang</p>
          <p>(647) 550-8254</p>
          <p>andrew.zhng2@gmail.com</p>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            View Resume
          </a>
        </div>

        <div className="contact-socials">
          <a href="https://instagram.com/andrew.zhng" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/andrew-zhang2/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/@andrewzhng" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </div>
  );
}