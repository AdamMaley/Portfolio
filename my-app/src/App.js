import React from 'react';
import './App.css';

import Header from "./components/header/Header.js";
import ProjectsList from "./components/projects/ProjectsList.js";
import Footer from "./components/footer/Footer.js";

import {projects} from "../src/data/projects.js";

function App() {


  return (
    <div className="App">
      <Header />
      <ProjectsList projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
