import React, { Fragment } from 'react';
import Card  from './Card/Card';
import facerecognition from '../../../images/facerecognition.jpg';
import robofriends from '../../../images/robofriends.jpg';
import budgety from '../../../images/budgety.jpg';
import piggame from '../../../images/piggame.jpg';
import trillo from '../../../images/trillo.jpg';
import natours from '../../../images/natours.jpg';

const coursesProjects = (props) => {
  return (
    <Fragment>
      <Card cardTitle="Smart brain" 
            technologies="HTML/CSS,Tachyons CSS framework,Node.js/Express.js,SQL/PostgreSQL,Heroku" 
            liveLink="https://smart-brain-recognition-app.herokuapp.com/" 
            githubLink="https://github.com/MartaNiemiec/smart_brain-recognition_app"
            image={facerecognition}/>
      <Card cardTitle="Robofriends" 
            technologies="HTML/CSS/JavaScript,Redux,Tachyons CSS framework,RoboHash API,Jsonplaceholder API" 
            liveLink="https://martaniemiec.github.io/Robofriends-app/index.html" 
            githubLink="https://github.com/MartaNiemiec/Robofriends-app"
            image={robofriends}/>
      <Card cardTitle="Budgety" 
            technologies="HTML,CSS,JavaScript" 
            liveLink="https://martaniemiec.github.io/Udemy-The_Complete_JavaScript_Course_2018-Jonas/6_budgety/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-The_Complete_JavaScript_Course_2018-Jonas/tree/master/6_budgety"
            image={budgety}/>
      <Card cardTitle="Pig Game" 
            technologies="HTML,CSS,JavaScript" 
            liveLink="https://martaniemiec.github.io/Udemy-The_Complete_JavaScript_Course_2018-Jonas/4-DOM-pig-game/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-The_Complete_JavaScript_Course_2018-Jonas/tree/master/4-DOM-pig-game"
            image={piggame}/>
      <Card cardTitle="Trillo" 
            technologies="Flexbox,HTML/SCSS,NPM" 
            liveLink="https://martaniemiec.github.io/Udemy-Advanced_CSS_and_Sass/Trillo/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-Advanced_CSS_and_Sass/tree/master/Trillo"
            image={trillo}/>
      <Card cardTitle="Natours" 
            technologies="Custom grid with floats,HTML,Sass,NPM" 
            liveLink="https://martaniemiec.github.io/Udemy-Advanced_CSS_and_Sass/Notours/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-Advanced_CSS_and_Sass/tree/master/Notours"
            image={natours}/>
    </Fragment>
  );
};

export default coursesProjects;