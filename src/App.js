import React from 'react';

import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import OwnProjects from './components/Projects/OwnProjects';
import CouresProjects from './components/Projects/CouresProjects';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Projects projectsId="ownProjects" 
                bgColor="bg-white" 
                projectsTitle="Selected own projects" 
                projects={<OwnProjects/>}/>
      <Projects projectsId="couresProjects" 
                bgColor="bg-light" 
                projectsTitle="Selected courses projects" 
                projects={<CouresProjects/>}/>
      <Footer />
    </div>
  );
}

export default App;
