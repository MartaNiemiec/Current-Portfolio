import React, { Fragment } from 'react';
import Card  from './Card/Card';
import facerecognition from '../../assets/images/facerecognition.jpg';
import robofriends from '../../assets/images/robofriends.jpg';
import budgety from '../../assets/images/budgety.jpg';
import piggame from '../../assets/images/piggame.jpg';
import trillo from '../../assets/images/trillo.jpg';
import natours from '../../assets/images/natours.jpg';
import forkify from '../../assets/images/forkify.jpg';
import burger from '../../assets/images/burger.jpg';
// import Fade from 'react-reveal/Fade';

const coursesProjects = (props) => {
  return (
    <Fragment>
    {/* <Fade bottom> */}
      <Card cardTitle="Burger builder" 
            technologies="HTML/CSS,JavaScript (ES6),React,Redux,React-router,Firebase" 
            liveLink="https://martaniemiec.github.io/Burger-builder/" 
            githubLink="https://github.com/MartaNiemiec/Burger-builder"
            courseLink="https://www.udemy.com/react-the-complete-guide-incl-redux/"
            image={burger}/>
      <Card cardTitle="Smart brain" 
            technologies="HTML/CSS,JavaScript (ES6),React,Tachyons CSS framework,Node.js/Express.js,SQL/PostgreSQL,Heroku,Clarifai API,React Particles.js" 
            liveLink="https://smart-brain-recognition-app.herokuapp.com/" 
            githubLink="https://github.com/MartaNiemiec/smart_brain-recognition_app"
            courseLink="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/"
            image={facerecognition}/>
      <Card cardTitle="Robofriends" 
            technologies="HTML/CSS/JavaScript (ES6),React,Redux,Tachyons CSS framework,RoboHash API,Jsonplaceholder API" 
            liveLink="https://martaniemiec.github.io/Robofriends-app/index.html" 
            githubLink="https://github.com/MartaNiemiec/Robofriends-app"
            courseLink="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/"
            image={robofriends}/>
      <Card cardTitle="Forkify" 
            technologies="HTML,CSS,JavaScript (ES6),NPM,Webpack,Babel, food2fork API " 
            liveLink="https://martaniemiec.github.io/Forkify/dist/index.html#54454" 
            githubLink="https://github.com/MartaNiemiec/Forkify"
            courseLink="https://www.udemy.com/the-complete-javascript-course/"
            image={forkify}/>
      <Card cardTitle="Budgety" 
            technologies="HTML,CSS,JavaScript (ES5)" 
            liveLink="https://martaniemiec.github.io/Udemy-The_Complete_JavaScript_Course_2018-Jonas/6_budgety/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-The_Complete_JavaScript_Course_2018-Jonas/tree/master/6_budgety"
            courseLink="https://www.udemy.com/the-complete-javascript-course/"
            image={budgety}/>
      <Card cardTitle="Pig Game" 
            technologies="HTML,CSS,JavaScript (ES5)" 
            liveLink="https://martaniemiec.github.io/Udemy-The_Complete_JavaScript_Course_2018-Jonas/4-DOM-pig-game/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-The_Complete_JavaScript_Course_2018-Jonas/tree/master/4-DOM-pig-game"
            courseLink="https://www.udemy.com/the-complete-javascript-course/"
            image={piggame}/>
      <Card cardTitle="Trillo" 
            technologies="Flexbox,HTML/SCSS,NPM" 
            liveLink="https://martaniemiec.github.io/Udemy-Advanced_CSS_and_Sass/Trillo/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-Advanced_CSS_and_Sass/tree/master/Trillo"
            courseLink="https://www.udemy.com/advanced-css-and-sass/"
            image={trillo}/>
      <Card cardTitle="Natours" 
            technologies="Custom grid with floats,HTML,Sass,NPM" 
            liveLink="https://martaniemiec.github.io/Udemy-Advanced_CSS_and_Sass/Notours/index.html" 
            githubLink="https://github.com/MartaNiemiec/Udemy-Advanced_CSS_and_Sass/tree/master/Notours"
            courseLink="https://www.udemy.com/advanced-css-and-sass/"
            image={natours}/>
      {/* </Fade> */}
    </Fragment>
  );
};

export default coursesProjects;