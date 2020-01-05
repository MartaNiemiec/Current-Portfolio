import React from 'react';
import * as classes from './Footer.module.scss';
import Fade from 'react-reveal/Fade';

const projects = (props) => {
  const map = <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe className={classes.Footer__map} title="location" width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20luis%20de%20sabinillas&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  <a href="https://www.maps-erstellen.de"> </a>
                </div>
              </div>

  const contact = <div className="p-5">
                    <h1 className={`text-light mb-4 ${classes.Footer__contactMessage}`}>You can find me on:</h1>
                    <ul className="list-unstyled text-center list-inline mt-5">
                      <li className={`list-inline-item `}>
                        <a href="https://www.linkedin.com/in/MartaNiemiec/" 
                          className={`btn-floating btn-dribbble ${classes.Footer__socialIcon}`}>
                          <i className="fab fa-linkedin-in"> </i>
                        </a>
                      </li>
                      <li className={`list-inline-item `}>
                        <a href="https://github.com/MartaNiemiec" 
                          className={`btn-floating btn-dribbble ${classes.Footer__socialIcon}`}>
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li className={`list-inline-item `}>
                        <a href="https://twitter.com/Marta_Niemiec" 
                          className={`btn-floating btn-dribbble ${classes.Footer__socialIcon}`}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

    const copyright = <div className={`footer-copyright text-center py-3 text-light ${classes.Footer__copyright}`}>© 2019 Copyright: 
                        <span className={classes.Footer__myname}>{"<"}Marta Niemiec{"/ >"}</span>
                      </div>

  return (
    <footer id="footer" className={`page-footer font-small special-color-dark ${classes.Footer}`} style={{overflow: "hidden"}}>
      <Fade bottom>
        <div className="container d-flex flex-wrap justify-content-center">
          {/* {map} */}
          {contact}
        </div>
      </Fade>
      <Fade bottom delay={500}>
        {copyright}
      </Fade>
    </footer>

        
    
  );
};

export default projects;