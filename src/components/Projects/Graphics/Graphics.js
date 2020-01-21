import React, { Fragment } from 'react';
import { CardColumns } from 'reactstrap';
import * as classes from './Graphics.module.scss'
import CardGraphic from '../CardGraphics/CardGraphic';
import { graphicsData } from './GraphicsData'

const Graphics = (props) => {
  return (
    <Fragment>
      <CardColumns className={classes.Graphics}>
      { graphicsData.map((el,i) => {
          return <CardGraphic key={i} image={el.image} cardTitle={el.graphicName} />
        })
      }
      </CardColumns>
    </Fragment>
  );
};

export default Graphics;