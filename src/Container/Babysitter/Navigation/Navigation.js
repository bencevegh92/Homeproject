import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';


const navigation = () => {
  return (
    <nav className={classes.Nav}>
      <button href='/#' className={classes.Nav__Logo}>
        <Link to="/homepage"><img className={classes.Nav__Image} href='/#' src='https://sitejerk.com/images/baby-icon-png-9.png' alt='logo'></img></Link>
      </button>
      <div className={classes.Nav__Menu}>
        <div className={classes.Nav__Point}></div>
        <div className={classes.Nav__Point}></div>
        <div className={classes.Nav__Point}></div>
      </div>
      <Link to='/profile'><div className={classes.Nav__Profile}>
        <div className={classes.Nav__ProfileHead}></div>
        <div className={classes.Nav__ProfileBody}></div>
      </div></Link>
    </nav>
  );
}

export default navigation;