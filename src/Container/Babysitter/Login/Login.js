import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import classes from './Login.module.scss';

const login = () => {
  return (
    <Fade>
      <div className={classes.LoginBox}>
        <fieldset className={classes.Login}>
          <div className={classes.Login__Content}>
          <button className={[classes.Login__Button, classes.Login__LoginButton].join(' ')}>Belépés</button>
          <Link className={classes.ButtonLink} to="/registration"><button className={[classes.Login__Button, classes.Login__RegistrationButton].join(' ')}>Regisztráció</button></Link>
        </div>
        <label className={classes.Login__label}>
          <input className={classes.Login__Input} placeholder=" " type="email" />
          <span className={classes.Login__span}>Email</span>
        </label>
        <label className={classes.Login__label}>
          <input className={classes.Login__Input} placeholder=" " type="password" />
          <span className={classes.Login__span}>Jelszó</span>
        </label>
        <div className={classes.fartmaster}>
          <button className={classes.Login__ForgetButton}>Elfelejtette a jelszavát?</button>
          <Link className={classes.ButtonLink} to="/homepage"><button className={classes.Login__EnterButton}>Beléps</button></Link>
        </div>
        </fieldset>
        
      </div>
    </Fade>
  );

}

export default login;