import React, { Component } from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Footer from './Components/Footer';
import ghibli from './ghibli.png';
import gifSearch from './gif-search.png';
import todoTable from './todo-table.png';
import modal from './modal.png';
import album from './album.png';
import pricing from './pricing.png';
import './App.css';

class App extends Component {
  state = {
    projects: [
      {
        title: "Ghibli",
        picture: ghibli,
        description: "Build with React, Axios and custom CSS.",
        link: "https://11kyle.github.io/ghibli-react-app/",
      },
      {
        title: "Gif-Search",
        picture: gifSearch,
        description: "Built with React, Axios and Bootstrap.",
        link: "https://11kyle.github.io/gif-search/",
      },
      {
        title: "Todo Table",
        picture: todoTable,
        description: "Built with React and Bootstrap.",
        link: "https://11kyle.github.io/react-todo-table/",
      },
      {
        title: "Modal",
        picture: modal,
        description: "Built with React and Bootstrap.",
        link: "https://11kyle.github.io/beautiful/",
      },
      {
        title: "Album",
        picture: album,
        description: "Built with React and Bootstrap. Bootstrap example recreated.",
        link: "https://11kyle.github.io/album/",
      },
      {
        title: "Pricing",
        picture: pricing,
        description: "Built with React and Bootstrap. Bootstrap example recreated.",
        link: "https://11kyle.github.io/pricing/",
      },
    ]
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>

        <Navbar />

        <div className="row">
          {this.state.projects.map((project, index) => 
            <Project
              key={index}
              title={project.title}
              picture={project.picture}
              description={project.description}
              link={project.link}
            />
          )}
        </div>
        <div className="row">
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
