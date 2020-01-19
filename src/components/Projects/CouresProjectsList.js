import React, { Fragment } from 'react';
import Card  from './Card/Card';
import Fade from 'react-reveal/Fade';
import { coursesProjects } from './CoursesProjectsData';

const CoursesProjects = () => {
  return (
    <Fragment>
      <Fade bottom>
      { coursesProjects.map((el, i) => {
          return <Card key={i}
                  cardTitle= {el.cardTitle} 
                  technologies={el.technologies}
                  liveLink={el.liveLink}
                  githubLink={el.githubLink}
                  courseLink={el.courseLink}
                  image={el.image}/>    
      })}
      </Fade>
    </Fragment>
  );
};

export default CoursesProjects;