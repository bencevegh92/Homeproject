import React from 'react';
import classes from './Navigation.module.scss';


const navigation = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.Nav__Logo}>LOGO</div>
      <div className={classes.Nav__Menu}>
        <div className={classes.Nav__Point}></div>
        <div className={classes.Nav__Point}></div>
        <div className={classes.Nav__Point}></div>
      </div>
      <div className={classes.Nav__Profile}>
        <div className={classes.Nav__ProfileHead}></div>
        <div className={classes.Nav__ProfileBody}></div>
      </div>
    </nav>

  );
}

export default navigation;