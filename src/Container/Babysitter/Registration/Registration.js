import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import classes from './Registration.module.scss';
import Axios from 'axios';


class registration extends Component {
  state = {
    name: null,
    userName: null,
    password: null,
    email: null,
  }

  newUserHandler = () => {
    const data = {
      name: this.state.firstName,
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email
    }
    Axios.post('http://localhost:8081/users/' , data)
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
              <input className={classes.Registration__Input} placeholder=" " type="text" onChange={(event) => this.setState({ name: event.target.value })}></input>
              <span className={classes.Registration__span}>Name</span>
            </label>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="text" onChange={(event) => this.setState({ userName: event.target.value })}></input>
              <span className={classes.Registration__span}>User Name</span>
            </label>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="password" onChange={(event) => this.setState({ password: event.target.value })}></input>
              <span className={classes.Registration__span}>Password</span>
            </label>
            <label className={classes.Registration__label}>
              <input className={classes.Registration__Input} placeholder=" " type="password"></input>
              <span className={classes.Registration__span}>Check Password</span>
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