import React, { Fragment } from 'react';
import Card  from './Card/Card';
import Fade from 'react-reveal/Fade';
import { ownProjects } from './OwnProjectsData';

const OwnProjects = () => {
  return (
    <Fragment>
      <Fade bottom>
        { ownProjects.map((el, i) => {
           return <Card key={i}
                   cardTitle= {el.cardTitle} 
                   technologies={el.technologies}
                   liveLink={el.liveLink}
                   githubLink={el.githubLink}
                   image={el.image}/>
        })}
      </Fade>
    </Fragment>    
      
  
  );
};

export default OwnProjects;