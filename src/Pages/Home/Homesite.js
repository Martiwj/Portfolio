import { Link } from 'react-router-dom';

function Home() {
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
        <section className="Links">
            <p className="animation" data-item='Reach me @'>Reach me @</p>
            <a href="https://github.com/Martiwj" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/martiwj" target="_blank">LinkedIn</a>
            <a href="mailto:martiwj@.ifi.uio.no" target="_blank" title="Send e-post til Martin">Mail</a>
            <a href="https://open.kattis.com/users/mj" target="_blank">Kattis</a>
            <a href="https://wakatime.com/@HissigKoder?rank=me&page=1&board=b98c1a35-338e-4e50-90ec-4d1c1bdf7e80" target="_blank">WakaTime</a>
        </section>
    </div>
    );
  }
export default Home; 
  