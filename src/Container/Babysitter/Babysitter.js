import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './Babysitter.module.scss';

import Welcome from './Welcome/Welcome';
import Chooseform from './ChooseForm/ChooseForm';
import Login from '../Babysitter/Login/Login';
import Registration from '../Babysitter/Registration/Registration';
import Homepage from './Homepage/Homepage';
import Profile from '../Babysitter/Navigation/Profile/Profile';

class Babysitter extends Component {
    render() {
        return (
            <div className={classes.Babysitter}>
                <Route path='/' exact component={Welcome} />
                <Route path='/chooseform' exact component={Chooseform} />

                <Route path='/login' exact component={Login} />
                <Route path='/registration' exact component={Registration} />

                <Route path='/homepage' exact component={Homepage}/>

                <Route path='/profile' exact component={Profile} />
            </div>
        );
    }
}

export default Babysitter;