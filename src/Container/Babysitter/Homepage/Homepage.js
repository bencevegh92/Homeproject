import React, { Component } from 'react';
import Fade from 'react-reveal';
/* import axios from 'axios'; */

import classes from '../Homepage/Homepage.module.scss';

import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import PersonCard from '../PersonCard/PersonCard';

class homepage extends Component {
    render() {
        return (
            <Fade>
                <div>
                    <Navigation />
                    <Search />
                    <div className={classes.personcard__container}>
                        <PersonCard />
                    </div>
                </div>
            </Fade>
        );
    }
}

export default homepage;