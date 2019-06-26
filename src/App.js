import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import OwnProjects from './components/Projects/CardList/OwnProjects';
import CouresProjects from './components/Projects/CardList/CouresProjects';



function App() {
  return (
    <div className="App">
    <Navigation />
    <Header />
    <Projects bgColor="bg-white" projectsTitle="Selected own projects" projects={<OwnProjects/>}/>
    <Projects bgColor="bg-light" projectsTitle="Courses projects" projects={<CouresProjects/>}/>
    </div>
  );
}

export default App;
