export default function HeroText({ typed }) {
  return (
    <div className="hero-text">
      <h1 className="hero-title">I'm Andrew Zhang!</h1>
      <h2 className="hero-subtitle">I'm <span className="typed">{typed}</span></h2>
      <p className="hero-quote">
        "Ultimately there is nothing that maximizes talent more than love for the game." - Bill Belichick, The Art of Winning
      </p>
      <div className="quote-divider"></div>
      <p className="hero-description">
        I'm a Queen's computer science major that love being the student as much as the teacher. 
        I lead by doing it first, taking responsiblity, and having open and honest communication. I'm currently training for a half-marathon in May and a half Ironman after that.
      </p>
      <p className="hero-description">
        I'm currently working in Toronto as a software engineer and product owner at <a href="https://app.joinretainly.com/" target="_blank" rel="noopener noreferrer">Retainly</a>, a software platform for realtors.
      </p>
      <p className="hero-description">
        I've also been doing the LeetCode grind and working on personal projects, most recently being TRVL. 
      </p>
      <p className="hero-description">
        "The game" to me is life. I'm always looking to gain perspective and learning new ways to love life!
      </p>
    </div>
  );
}


