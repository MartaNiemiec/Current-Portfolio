import React from 'react';
import { Container } from 'reactstrap';
 import CardList from './CardList/CardList';
 import * as classes from './Projects.module.scss';

const projects = (props) => {
  return (
    <Container>
      <h1 className={`text-secondary text-center font-weight-bolder mb-4 Projects__title ${classes.Projects__title}`}>SELECTED PROJECTS</h1>
      <div className="mb-4 d-flex flex-wrap justify-content-center">
        <CardList/>
      </div>
    </Container>
  );
};

export default projects;