import React from 'react';
import * as classes from './Projects.module.scss';
import Fade from 'react-reveal/Fade';

const Projects = (props) => {
  return (
    <Fade bottom>
      <div id={props.projectsId} className={`w-100 ${classes.Projects}`}>
        <div className="pb-3 pt-3 pr-0 pl-0" style={{ overflow: "hidden" }}>
          <h1 className={`text-center font-weight-bolder Projects__title pt-4 ${classes.Projects__title}`}>{props.projectsTitle}</h1>
          <div className="mb-4 d-flex flex-wrap justify-content-center">
            {props.projects}
          </div>
        </div>
      </div>
    </Fade>


  );
};

export default Projects;