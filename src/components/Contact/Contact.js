import React from 'react';
import * as classes from './Contact.module.scss';
import Fade from 'react-reveal/Fade';

const Contact = (props) => {
  const contact = <div className="pt-5">
                    <h1 className={`text-light mb-4 ${classes.Contact__contactMessage}`}>You can find me on:</h1>
                    <ul className="list-unstyled text-center list-inline mt-5">
                      <li className={`list-inline-item `}>
                        <a href="https://www.linkedin.com/in/MartaNiemiec/" 
                          className={`btn-floating btn-dribbble ${classes.Contact__socialIcon}`}>
                          <i className="fab fa-linkedin-in"> </i>
                        </a>
                      </li>
                      <li className={`list-inline-item `}>
                        <a href="https://github.com/MartaNiemiec" 
                          className={`btn-floating btn-dribbble ${classes.Contact__socialIcon}`}>
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li className={`list-inline-item `}>
                        <a href="https://twitter.com/Marta_Niemiec" 
                          className={`btn-floating btn-dribbble ${classes.Contact__socialIcon}`}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
  return (
      <Fade bottom>
        <div className={`container d-flex flex-wrap justify-content-center ${classes.Contact}`}>
          {contact}
        </div>
      </Fade>
  );
};

export default Contact;