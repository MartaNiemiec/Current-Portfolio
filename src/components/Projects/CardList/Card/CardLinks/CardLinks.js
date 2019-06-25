import React from 'react';
import * as classes from './CardLinks.module.scss';
import { NavLink,    } from 'reactstrap';

const cardLinks = (props) => {
  return (
      <div className="d-flex justify-content-center">
        <NavLink className={`${classes.CardLinks__icon} m-1 rounded-lg text-light `} href={props.liveLink}>
          <i className="fas fa-globe-americas"></i>
        </NavLink>
        <NavLink className={`${classes.CardLinks__icon} m-1 rounded-lg text-light `} href={props.githubLink}>
          <i className="fab fa-github"></i>
        </NavLink>
      </div>
  );
};

export default cardLinks;