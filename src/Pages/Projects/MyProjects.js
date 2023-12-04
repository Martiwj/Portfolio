import { Link } from 'react-router-dom';

function MyProjects() {
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

        <div className='comingSoon'>

          <h1>Coming soon...</h1>

        </div>

      </div>
    );
  }
  
  export default MyProjects;
  