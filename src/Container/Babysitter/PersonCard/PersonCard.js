import React from 'react';
import classes from './PersonCard.module.scss';


const personCard = () => {
  return (
    < div className={classes.PersonCard} >
      <img className={classes.PersonCard__Img}></img>
      <div className={classes.PersonCard__Overlay}>
        <div className={classes.PersonCard__Name}>Erzsébet</div>
        <div className={classes.PersonCard__Age}>25</div>
        <div className={classes.PersonCard__Description}>You have to write some information about me to here...</div>
      </div>
    </div >

  );
}

export default personCard;