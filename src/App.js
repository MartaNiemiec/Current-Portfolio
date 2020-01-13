import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import OwnProjects from './components/Projects/OwnProjectsList';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/projects">
          <Projects
            projectsId="ownProjects"
            projectsTitle="Selected own projects"
            projects={<OwnProjects />}
          />
        </Route>
        <Route path="/" exact component={Header} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
