import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './Babysitter.module.scss';

import Welcome from './Welcome/Welcome';
import Chooseform from './ChooseForm/ChooseForm';

class Babysitter extends Component {
    render() {
        return (
            <div className={classes.Babysitter}>
                <Route path='/' exact component={Welcome} />
                <Route path='/chooseform' exact component={Chooseform} />
            </div>
        );
    }
}

export default Babysitter;