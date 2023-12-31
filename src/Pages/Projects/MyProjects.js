import React from 'react';
import { Link } from 'react-router-dom';

function MyProjects() {
  const projects = [
    {
      title: 'Game Of Life',
      description: 'This is a Java implementation of John Conways Game of Life. The project was a part of the IN1010 course, where we had full freedom to choose how we wanted to implement and design it. It was a really fun project where I learned a lot about GUI in Java.',
      video: 'gof.mp4', 
    },
    {
      title: 'MineSweeper(ish)',
      description: 'I created this small and enjoyable game while learning Java GUI during the spring my 2nd semester. The game incorporates elements of classical Minesweeper logic but is slightly simplified.',
      video: 'minesweeper.mp4',
    },
    {
      title: 'AI Discord bot',
      description: 'Over the Christmas break, I undertook a project to delve into APIs and networks. The idea of creating an AI Discord bot emerged from my frequent coding discussions and pair coding sessions on the Discord app with friends. I wanted a seamless way to seek coding help without leaving the app. This project allowed me to explore APIs and networks practically, enhancing the collaborative coding experience within Discord.',
      video: 'minesweeper.mp4',
    },
    // Add more projects as needed
  ];

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

      <div className='project-container'>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.video && (
              <video width="100%" height="auto" controls >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {project.image && <img src={project.image} alt={project.title} />}
            {project.title && <h2>{project.title}</h2>}
            {project.description && <p>{project.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
