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
        I'm a Queen's computer science major that just graduated and performed in 3 vastly different theatre extracurriculars. 
        I also climb 80 foot ice walls, play a LOT of basketball, and ride horses.
      </p>
      <p className="hero-description">
        I'm currently working full-time out on the West Coast, selling RTDs, hiking up mountains, surfing the sandy beaches, and jumping in rivers.
      </p>
      <p className="hero-description">
        To me, life is the game, and I'm always looking to gain perspective and new ways to learn about loving life!
      </p>
    </div>
  );
}


