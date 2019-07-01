import React, { Fragment } from 'react';
import Card  from './Card/Card';
import mybooks from '../../../images/mybooks.jpg';
import starwars from '../../../images/starwars.jpg';
import learningplanner from '../../../images/learningplanner.jpg';
import ponggame from '../../../images/ponggame.jpg';
import polind from '../../../images/polind.jpg';
import bestandalucia from '../../../images/bestandalucia.jpg';
import Fade from 'react-reveal/Fade';

const ownProjects = (props) => {
  return (
    <Fragment>
    <Fade bottom>
      <Card cardTitle="Bestandalucia" 
            technologies="WordPress themes and plugins,CSS,Photoshop,Illustrator" 
            liveLink="http://www.bestandalucia.com/"
            image={bestandalucia}/>
      <Card cardTitle="My Books" 
            technologies="HTML/SCSS,NPM,React,Redux,Google Books API" 
            liveLink="https://martaniemiec.github.io/My-Books-with-Redux/" 
            githubLink="https://github.com/MartaNiemiec/My-Books-with-Redux"
            image={mybooks}/>
      <Card cardTitle="Star Wars" 
            technologies="HTML/CSS,NPM,React,Tachyons,The Star Wars API,React Particles.js" 
            liveLink="https://martaniemiec.github.io/starwars_api/" 
            githubLink="https://github.com/MartaNiemiec/starwars_api"
            image={starwars}/>
      <Card cardTitle="Learning planner" 
            technologies="HTML/SCSS,Vanilla JavaScript (ES6),Webpack/Babel,NPM,Node.js/Express.js,PostgreSQL,Deployed on Heroku" 
            liveLink="https://martaniemiec.github.io/Learning-planner/dist/index.html" 
            githubLink="https://github.com/MartaNiemiec/Learning-planner"
            image={learningplanner}/>
      <Card cardTitle="Pong Game" 
            technologies="HTML5 Canvas,CSS,JavaScript" 
            liveLink="https://martaniemiec.github.io/Pong_game/" 
            githubLink="https://github.com/MartaNiemiec/Pong_game"
            image={ponggame}/>
      <Card cardTitle="Polind" 
            technologies=" HTML,SCSS,CSS Grid,Flexbox,NPM,JavaScript" 
            liveLink="https://martaniemiec.github.io/Polind/" 
            githubLink="https://github.com/MartaNiemiec/Polind"
            image={polind}/>
            </Fade>
    </Fragment>
  );
};

export default ownProjects;