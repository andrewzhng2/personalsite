import "./styles/ContactPage.css";

let resume = require("./assets/AndrewZhangResume.pdf");

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img
          src="/images/portrait.jpg" // use your image path
          alt="Andrew Zhang"
          className="contact-photo"
        />
      </div>

      <div className="contact-right">
        <div className="contact-location">TORONTO</div>

        <div className="contact-info">
          <h2>Andrew Zhang</h2>
          <p>andrew.zhng2@gmail.com</p>
          <p>(647) 550-8254</p>
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
          <a href="https://instagram.com/andrewzhng" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/andrew-zhang2/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/@andrewzhng" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </div>
  );
}