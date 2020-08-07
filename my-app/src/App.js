import React from 'react';
import './App.css';

import Header from "./components/header/header.js";
import Project from "./components/projects/projects.js";
import Footer from "./components/footer/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
