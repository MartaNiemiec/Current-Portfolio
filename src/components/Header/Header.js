import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Header.css';

const Header = (props) => {
  return (
    <div className="Jumbo_shadow">
      <Jumbotron fluid className="Jumbo p-0 text-white vh-100" 
      style={{
        }}>
        <Container  className="vh-100 text-center d-flex flex-column justify-content-center ">
          <span className="About">
          <h1 className="Jumbo_name">Marta Niemiec</h1>
          <h3 >FRONT END DEVELOPER</h3>
          <p >After learning the basics of graphic design and launching my own travel website in WordPress three years ago, I dived into the front-end world to learn building modern, responsive websites and apps from scratch. My goal is to become a Full Stack Developer. </p>
          <h4>I have experience in </h4>
          <h1 className="d-flex flex-wrap justify-content-center align-items-center">
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-sass-original"></i>
            <i className="devicon-bootstrap-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-github-plain-wordmark"></i>
            <i className="devicon-webpack-plain-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-express-original-wordmark"></i>
            <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-wordpress-plain-wordmark"></i>
            <i className="devicon-photoshop-line"></i>
            <i className="devicon-illustrator-line"></i>
            <i className="devicon-babel-plain"></i>

            <i style={{fontSize: "1.1rem", padding: "1.35rem .8rem"}}>NPM</i>
            <i style={{fontSize: "1.1rem", padding: "1.35rem .8rem"}}>Redux</i>

          </h1>
         
          {/* HTML, CSS, SCSS, Javascript (ES5, ES6), React, Redux, RWD, Git, GitHub, NPM, Webpack, Node.js, Express.js,  PostgreSQL, WordPress, Photoshop, Illustrator.     */}
      </span>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;