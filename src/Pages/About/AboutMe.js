import { Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
  return (
    <div>
      <header className="header-links">
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <div id="indicator"></div>
        </nav>
      </header>

      <div className="aboutme">
        <div className="text-container">
          <h1>Martin W Jørgensen</h1>
          <p>
            I am studying for a bachelor's degree in informatics, currently in my 5th semester at the University of Oslo. I have a strong passion for algorithms and data structures and love to challenge myself with intricate problem-solving.
          </p>

          <div className="text-subcontainer">
            <img src="/images/portrett.png" alt="Martin W Jørgensen" />
            <p>Besides my studies, I am also active in the student community. I am currently the financial manager in LIST, the student association for informatics and language technology. Additionally, I am the vice leader of MAPS (Mathematics Algorithms and Programming for Students).</p>
            <p>I recently worked as a Scientific Assistant for the Language Technology group at the Institute for Informatics at the University of Oslo (UiO), where I annotated data for training large language models (LLMs). I also work as a researcher for Search People, where I assist in conducting research to find optimal candidates for various jobs.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
