import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import OwnProjects from './components/Projects/CardList/OwnProjects';



function App() {
  return (
    <div className="App">
    <Navigation />
    <Header />
    <Projects projectsTitle="Selected own projects" projects={<OwnProjects/>}/>
    </div>
  );
}

export default App;
