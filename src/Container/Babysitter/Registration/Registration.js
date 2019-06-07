import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import classes from './Registration.module.scss';
import Axios from 'axios';


class registration extends Component {
  state = {
    firstName: null,
    lastName: null,
    password: null,
    email: null,
  }

  newUserHandler = () => {
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email
    }
    Axios.post('https://homeproject-b6d06.firebaseio.com/users.json' , data)
      .then(response => {
        console.log(response)
      })
  }

  render() {
    return (
      <Fade>
        <div className={classes.RegistrationBox}>
          <fieldset className={classes.Registration}>
            <div className={classes.Registration__Content}>
              <Link className={classes.ButtonLink} to="/login"><button className={[classes.Login__Button, classes.Login__LoginButton].join(' ')}>Belépés</button></Link>
              <button className={[classes.Login__Button, classes.Login__RegistrationButton].join(' ')}>Regisztráció</button>
            </div>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="text" onChange={(event) => this.setState({ firstName: event.target.value })}></input>
              <span className={classes.Registration__span}>First Name</span>
            </label>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="text" onChange={(event) => this.setState({ lastName: event.target.value })}></input>
              <span className={classes.Registration__span}>Last Name</span>
            </label>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="password" onChange={(event) => this.setState({ password: event.target.value })}></input>
              <span className={classes.Registration__span}>Password</span>
            </label>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="password"></input>
              <span className={classes.Registration__span}>Password</span>
            </label>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="email" onChange={(event) => this.setState({ email: event.target.value })}></input>
              <span className={classes.Registration__span}>Email</span>
            </label>
            <button onClick={this.newUserHandler} className={classes.Registration__EnterButton}>Regisztráció</button>
          </fieldset>

        </div>
      </Fade>
    );
  }
}


export default registration;