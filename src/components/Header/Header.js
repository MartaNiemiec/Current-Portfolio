import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import * as classes from './Header.module.scss';

const Header = (props) => {
  return (
    <div id="header" className={classes.Jumbo__shadow}>
      <Jumbotron fluid className={`"p-0 text-white vh-100" ${classes.Jumbo}`} 
      style={{
        }}>
        <Container  className="text-center d-flex flex-column justify-content-center ">
          <span className={classes.About}>
          <h1 className={classes.Jumbo__name} data-text="Marta Niemiec">Marta Niemiec</h1>
          <h3 >FRONT END DEVELOPER</h3>
          <p className={classes.Jumbo__info}>
            Front End Developer passionate about building <span className="text-warning font-weight-bold">JavaScript</span> and <span className="text-info font-weight-bold">React.js</span> applications. 
            Having built my own travel website in WordPress four years ago got me hooked into web development. And I haven’t stopped coding ever since! </p>
          <h4 className="mt-4">I have experience with </h4>
          <h1 className="d-flex flex-wrap justify-content-center align-items-center">
            <i className={`${classes.Jumbo__icon} devicon-html5-plain-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-css3-plain-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-sass-original`}></i>
            <i className={`${classes.Jumbo__icon} devicon-bootstrap-plain`}></i>
            <i className={`${classes.Jumbo__icon} devicon-javascript-plain`}></i>
            <i className={`${classes.Jumbo__icon} devicon-react-original-wordmark`}></i>
            <i className={classes.Jumbo__icon} style={{fontSize: "1.1rem", padding: "1.35rem .8rem"}}>Redux</i>
            <i className={`${classes.Jumbo__icon} fab fa-npm`}></i>
            <i className={`${classes.Jumbo__icon} devicon-webpack-plain-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-babel-plain`}></i>
            <i className={`${classes.Jumbo__icon} devicon-nodejs-plain-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-express-original-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-postgresql-plain-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-github-plain-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-wordpress-plain-wordmark`}></i>
            <i className={`${classes.Jumbo__icon} devicon-photoshop-line`}></i>
            <i className={`${classes.Jumbo__icon} devicon-illustrator-line`}></i>

          </h1>
      </span>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;