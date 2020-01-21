import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import * as classes from './CardGraphic.module.scss'; 
import Fade from 'react-reveal/Fade';

const CardGraphics = (props) => {
  return (
    <Fade bottom>
      <Card inverse className={`${classes.CardGraphics}`} b>
        <CardImg width={props.imageWidth} className={classes.CardGraphics__image} src={props.image} alt={props.cardTitle} />
        <CardImgOverlay className={classes.CardGraphics__imageOverlay}>
          <CardTitle className={`${classes.CardGraphics__title} text-center pb-2 pt-1`}>{props.cardTitle}</CardTitle>
        </CardImgOverlay>
      </Card>
      </Fade>
  );
};

export default CardGraphics;