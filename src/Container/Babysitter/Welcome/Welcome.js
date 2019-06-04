import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Welcome.module.scss';


const welcome = () => {
    return (
        <div className={classes.Welcome}>
            <fieldset className={classes.Welcome__fieldset}>
                <h1 className={classes.Welcome__header}>Csepergő</h1>
                <p className={classes.Welcome__paragraph}>Bébiszitter kereső</p>
                <Link to='/chooseform'><button className={classes.Welcome__button}>Get started</button></Link>
            </fieldset>
        </div>
    );
    
}

export default welcome;