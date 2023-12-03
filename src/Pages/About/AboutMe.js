import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div>
      <header className="header-links">
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/about">About Me</Link>
          <Link to="#">Projects</Link>
          <div id="indicator"></div>
        </nav>
      </header>

      <div className="aboutme">
        <div className="text-container">
          <h1>Martin W Jørgensen</h1>
          <p>
            I am studying for a bachelor's degree in computer science, currently in my 2nd year at the University of Oslo. I have a strong passion for algorithms and data structures and love to challenge myself with intricate problem-solving.
          </p>
        </div>
        <img src="/portrett.png" alt="Beskrivelse av bildet" />
      </div>
    </div>
  );
}

export default AboutMe;
