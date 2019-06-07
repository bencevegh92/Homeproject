import React from 'react';
import classes from './Navigation.module.scss';


const navigation = () => {
  return (
    <nav className={classes.Nav}>
      <button href='/#' className={classes.Nav__Logo}>
        <img className={classes.Nav__Image} href='/#' src='https://sitejerk.com/images/baby-icon-png-9.png' alt='logo'></img>
      </button>
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