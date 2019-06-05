import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './Registration.module.scss';


const registration = () => {
  return (
    <div className={classes.Registration}>
      <nav className={classes.Title__Content}>
        <button className={classes.Title__Login}><Link to="/login">Belépés</Link></button>
        <button className={classes.Title__Registration}>Regisztráció</button>
      </nav>
      <label>
        <input className={classes.Registration__Input} placeholder=" " type="text" />
        <span>Vezetéknév</span>
      </label>
      <label>
        <input className={classes.Registration__Input} placeholder=" " type="text" />
        <span>Keresztnév</span>
      </label>
      <label>
        <input className={classes.Registration__Input} placeholder=" " type="password" />
        <span>Jelszó</span>
      </label>
      <label>
        <input className={classes.Registration__Input} placeholder=" " type="password" />
        <span>Jelszó újra</span>
      </label>
      <label>
        <input className={classes.Registration__Input} placeholder=" " type="email" />
        <span>Email</span>
      </label>
      <button className={classes.Registration__Button}>Regisztráció</button>
      
    </div>

  );
}

export default registration;