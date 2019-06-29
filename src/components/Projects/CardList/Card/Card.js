import React from 'react';
import * as classes from './Card.module.scss'; 
import CardLinks from './CardLinks/CardLinks';
import { Card, CardImgOverlay } from 'reactstrap';

const card = (props) => {
  const technologies = props.technologies.split(",")
                                         .map((el, i) => <li key={i}>{el}</li>)
  return (
      <Card inverse className={`${classes.Card} border-0 m-3 shadow `}>
        <img className={`${classes.Card__img} `} height="auto" src={props.image} alt="Card img cap" />
        <CardImgOverlay className={`${classes.Card__content} d-flex flex-column justify-content-between p-0`}>
          <div>
            <h4>{props.cardTitle}</h4>
            <h5>Built using:</h5>
            <ul>{technologies}</ul>
          </div>
          <span className={classes.Card__links} >
            <CardLinks liveLink={props.liveLink} 
                       githubLink={props.githubLink}
                       courseLink={props.courseLink}/>
          </span>
          
        </CardImgOverlay>
      </Card>
  );
};

export default card;