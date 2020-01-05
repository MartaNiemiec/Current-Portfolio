import React from 'react';
import { Container } from 'reactstrap';
 import * as classes from './Projects.module.scss';

const projects = (props) => {
  return (
    <div id={props.projectsId} className={`w-100 ${classes.Projects}`}>
      <Container className="pb-3 pt-3 pr-0 pl-0" style={{overflow: "hidden"}}>
          <h1 className={`text-center font-weight-bolder mb-4 Projects__title pt-4 ${classes.Projects__title}`}>{props.projectsTitle}</h1>
            <div className="mb-4 d-flex flex-wrap justify-content-center">
          {props.projects}
          </div>
        </Container>
    </div>
        
    
  );
};

export default projects;