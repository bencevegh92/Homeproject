import React from 'react';
import classes from './Search.module.scss';


const search = () => {
  return (
    <div className={classes.Search}>
      <input className={classes.Search__Input}></input>
      <button className={classes.Search__Button}>Keresés</button>
    </div>

  );
}

export default search;