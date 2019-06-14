import React from 'react';
import { Link } from 'react-router-dom';

import classes from './PersonCard.module.scss';

const personCard = (props) => (
  < div className={classes.PersonCard} >
    <Link to="/profile"><img className={classes.PersonCard__Img} alt=''></img></Link>
    <div className={classes.PersonCard__Overlay}>
      <div className={classes.PersonCard__Name}>{props.name}</div>
      <div className={classes.PersonCard__Age}>{props.age}</div>
      <div className={classes.PersonCard__Description}>{props.description}</div>
    </div>
  </div >
)
  
export default personCard;