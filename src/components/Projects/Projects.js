import React from 'react';
import { Container } from 'reactstrap';
 import * as classes from './Projects.module.scss';

const projects = (props) => {
  return (
        <Container className="pb-5 pt-5">
          <h1 className={`text-secondary text-center font-weight-bolder mb-4 Projects__title ${classes.Projects__title}`}>{props.projectsTitle}</h1>
          <div className="mb-4 d-flex flex-wrap justify-content-center">
            {props.projects}
          </div>
        </Container>
    
  );
};

export default projects;