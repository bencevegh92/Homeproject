import React, { Component } from 'react';
import classes from './PersonCard.module.scss';
import axios from 'axios';

class personCard extends Component {
  state = {
    users: [],
  }
  componentDidMount() {
    axios.get('https://homeproject-b6d06.firebaseio.com/users')
      .then(response => {
        let users = response.data;
        let getUsers = users.map(user => {
          return {
            ...user
          }
        })
        console.log(getUsers)
      })
  }



  render() {
    return (
      < div className={classes.PersonCard} >
        <img className={classes.PersonCard__Img} alt=''></img>
        <div className={classes.PersonCard__Overlay}>
          <div className={classes.PersonCard__Name}></div>
          <div className={classes.PersonCard__Age}></div>
          <div className={classes.PersonCard__Description}></div>
        </div>
      </div >
    );
  }
}

export default personCard;