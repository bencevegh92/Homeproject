import React from 'react';
import classes from './PersonCard.module.scss';

const personCard = (props) => (
  < div className={classes.PersonCard} >
    <img className={classes.PersonCard__Img} alt=''></img>
    <div className={classes.PersonCard__Overlay}>
      <div className={classes.PersonCard__Name}>{props.name}</div>
      <div className={classes.PersonCard__Age}>{props.age}</div>
      <div className={classes.PersonCard__Description}>{props.description}</div>
    </div>
  </div >
)
  
export default personCard;