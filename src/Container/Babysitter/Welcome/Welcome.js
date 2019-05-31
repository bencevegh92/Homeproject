import React from 'react';

import classes from './Welcome.module.scss';

const welcome = () => {
    return (
        <div className={classes.Welcome}>
            <fieldset className={classes.Welcome__fieldset}>
                <h1 className={classes.Welcome__header}>Csepergő</h1>
                <p className={classes.Welcome__paragraph}>Bébiszitter kereső</p>
                <button className={classes.Welcome__button}>Lássunk Hozzá!</button>
            </fieldset>
        </div>
    );
}

export default welcome;