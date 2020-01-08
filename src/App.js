import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import OwnProjects from './components/Projects/OwnProjects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
        <Route path={process.env.PUBLIC_URL + "/projects"}>
          <Projects
            projectsId="ownProjects"
            projectsTitle="Selected own projects"
            projects={<OwnProjects />}
          />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Header} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
