import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
    <Navigation />
    <Header />
    <Projects/>
    </div>
  );
}

export default App;
