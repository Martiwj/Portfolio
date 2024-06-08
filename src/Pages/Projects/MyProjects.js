import React from 'react';
import { Link } from 'react-router-dom';
import './MyProjects.css'

function MyProjects() {
  const projects = [
    {
      title: 'Game Of Life',
      description: 'This is a Java implementation of John Conways Game of Life. The project was a part of the IN1010 course, where we had full freedom to choose how we wanted to implement and design it. It was a really fun project where I learned a lot about GUI in Java.',
      video: '/projects/gof.mp4', 
    },
    {
      title: 'GemHunt',
      description: 'I created this small and enjoyable game while learning Java GUI during the spring my 2nd semester. The game incorporates elements of classical Minesweeper logic but is slightly simplified.',
      video: '/projects/minesweeper.mp4',
      githubLink: 'https://github.com/Martiwj/Gemhunt.git', 
    },
    {
      title: 'AI Discord bot',
      description: 'Over the Christmas break, I undertook a project to delve into APIs and networks. The idea of creating an AI Discord bot emerged from my frequent coding discussions and pair coding sessions on the Discord app with friends. I wanted a seamless way to seek coding help without leaving the app. This project allowed me to explore APIs and networks practically, enhancing the collaborative coding experience within Discord.',
      video: '/projects/cookbot.mp4',
      githubLink: 'https://github.com/Martiwj/Discord-AI-Bot.git', 
    },
    {
      title: "Summify", 
      description: "Summify is a personal project I developed to streamline the process of extracting key information from online articles and web content. By leveraging web scraping techniques and the OpenAI API, Summify allows users to generate quick summaries by simply inputting a URL.",
      video: '/projects/summify.mp4',
      githubLink: 'https://github.com/Martiwj/Summify', 
    }, 
    {
      title: "RetrivalChatbot", 
      description: "The RetrievalChatbot was originally a small school project I had. I enjoyed working on it, so I continued to develop it further by adding more datasets, a nice GUI, and a CLI for using the bot. Currently, it's a Marvel-based chatbot that utilizes dialogues from all 23 MCU movies. The bot uses TF-IDF vectors and compares the TF-IDF input vector from the user with the most similar vector from the dataset and gives you a response based on that. ",
      image: '/projects/chatbot.png', 
      githubLink: 'https://github.com/Martiwj/RetrievalChatbot',

    }
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
            {project.image && <img src={project.image} alt={project.title} width="100%" height="auto" />}
            {project.title && (
              <>
                <h2>
                  <a href={project.githubLink} target="blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h2>
              </>
            )}
            {project.description && <p>{project.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
