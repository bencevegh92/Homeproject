import React, { Component } from 'react';
import Fade from 'react-reveal';
import axios from '../axios';

import classes from '../Homepage/Homepage.module.scss';

import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import PersonCard from '../PersonCard/PersonCard';

class homepage extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get('http://localhost:8081/users/')
      .then(response => {
        const users = response.data;
        const updatedUsers = users.map(post => {
          return {
            ...post,
          }
        });
        this.setState({ users: updatedUsers });
      })
  }

  render() {
    let users = this.state.users.map(user => {
      return <PersonCard
        name={user.name}
        age={user.age}
        description={user.description}
      />;
    });
    return (
      <Fade>
        <div>
          <Navigation />
          <Search />
          <div className={classes.personcard__container}>
            {users}
          </div>
        </div>
      </Fade>
    );
  }
}

export default homepage;