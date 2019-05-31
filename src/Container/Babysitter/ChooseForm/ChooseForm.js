import React from 'react';

import classes from './ChooseForm.module.scss';

const chooseForm = () => {
    return (
        <div className={classes.ChooseForm}>
            <fieldset className={classes.ChooseForm__fieldset}>
                <div className={classes.ChooseForm__profileBox}>
                    <h1>Melós</h1>
                </div>
                <div className={classes.ChooseForm__profileBox}>
                    <h1>Anyuka-Apuka</h1>
                </div>
            </fieldset>
        </div>
    );
}

export default chooseForm;