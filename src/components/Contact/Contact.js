import React from 'react';
import * as classes from './Contact.module.scss';
import ContactsData from './contactsData.json';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const contact = <div className="pt-5">
                    <h1 className={`text-light mb-4 ${classes.Contact__contactMessage}`}>You can find me on:</h1>
                    <ul className="list-unstyled text-center list-inline mt-5">
                      {ContactsData.map((el, i) => {
                        return <li key={i} className="list-inline-item">
                                  <a href={el.link} 
                                    className={`btn-floating btn-dribbble ${classes.Contact__socialIcon}`}>
                                    <i className={el.iconClass}></i>
                                  </a>
                                </li>
                      })}
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