import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.scss';

const login = () => {
  return (
    <div className={classes.Login}>
      <nav className={classes.Title__Content}>
        <button className={classes.Title__Login}>Belépés</button>
        <button className={classes.Title__Registration}><Link to="/registration">Regisztráció</Link></button>
      </nav>
      <label>
        <input className={classes.Login__Input} placeholder=" " type="email" />
        <span>Email</span>
      </label>
      <label>
        <input className={classes.Login__Input} placeholder=" " type="password" />
        <span>Jelszó</span>
      </label>
      <button className={classes.Login__Button__Forget}>Elfelejtette a jelszavát?</button>
      <button className={classes.Login__Button}>Beléps</button>
    </div>
  );

}

export default login;