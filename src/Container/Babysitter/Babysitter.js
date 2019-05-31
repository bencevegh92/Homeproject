import React, { Component } from 'react';

import classes from './Babysitter.module.scss';

import Welcome from './Welcome/Welcome';
import ChooseForm from './ChooseForm/ChooseForm';

class Babysitter extends Component {
    render() {
        return(
            <div className={classes.Babysitter}>
                <ChooseForm />
            </div>
        );
    }
}

export default Babysitter;