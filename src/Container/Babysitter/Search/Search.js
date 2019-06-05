import React from 'react';
import classes from './Search.module.scss';


const search = () => {
  return (
    <div className={classes.Input}>
      <input className={classes.Input__Box}></input>
      <button className={classes.Input__Button}>Keresés</button>
      <input className={classes.Input__Radio} id='name' type='radio' name='search' autofocus></input>
      <label className={classes.Search__by} for='name'>Név</label>
      <input className={classes.Input__Radio} id='city' type='radio' name='search'></input>
      <label className={classes.Search__by} for='city'>Város</label>
    </div>

  );
}

export default search;