import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import * as classes from './Header.module.scss';
import Fade from 'react-reveal/Fade';
import SkillIcons from './skilIcons.json';

const Header = (props) => {
  const name = <h1 className={classes.Jumbo__name}>Marta Niemiec</h1>
               

  const title = <h3>FRONT END DEVELOPER</h3>

  const about =  <div className={classes.Jumbo__info}>
                    <p>Front End Developer passionate about building <span className="font-weight-bold">JavaScript</span> and <span className="font-weight-bold">React.js</span> applications. </p>
                    <p>Administrator of my WordPress travel website - 
                    <a href="http://www.bestandalucia.com/"> bestandalucia.com</a>. </p>
                    <p>Contributor to open source Angular project - 
                    <a href="https://topicfriends.org/"> TopicFriends</a>.</p> 
                    <p>Contributor to Angular project - 
                    <a href="https://innotopic.com/"> InnoTopic</a>.</p> 
                    <p>Graphic designer - 
                    <a href="https://devfest.gdgmalaga.dev/">  GDG DevFest Málaga 2019</a>.</p>
                  </div>

  const experience = <h3 className="mt-4 pt-3 text-uppercase">Experience with </h3>

  const icons = <h1 className="d-flex flex-wrap justify-content-center align-items-center">
                    {SkillIcons.map((el, i) => {
                      if (el.name === "redux") {
                        return <i key={i} className={`${classes.Jumbo__icon} ${classes.Jumbo__redux}`}>Redux</i>
                      } else {
                        return <i key={i} className={`${classes.Jumbo__icon} ${el.iconClass}`}></i>
                      }
                    })}
                  </h1>

  return (
    <div id="header" className={classes.Jumbo__shadow}>
      <Jumbotron fluid className={`"p-0 text-white vh-100" ${classes.Jumbo}`} 
      style={{
        }}>
        <Container  className="text-center d-flex flex-column justify-content-center ">
          <Fade bottom>
            <div className={classes.About}>
              {name}
              {title}
              {about}
              {experience}            
              {icons}
            </div>
          </Fade>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;