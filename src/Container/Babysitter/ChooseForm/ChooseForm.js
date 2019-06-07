import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import classes from './ChooseForm.module.scss';

const chooseForm = () => {
    return (
        <Fade>
            <div className={classes.ChooseForm}>
            <fieldset className={classes.ChooseForm__fieldset}>
                <legend className={classes.ChooseForm__legend}>Choose your role</legend>
                <div className={classes.ChooseForm__profileBox}>
                    <div className={classes.ChooseForm__profile}>
                        <img className={classes.ChooseForm__profileimg} alt='sitter' src='http://4kezlab.hu/wp-content/uploads/revslider/babysitter/babysitter1-1024x1024.png'></img>
                        <Link to='/login'><button className={classes.Welcome__button}>As Babysitter</button></Link>
                    </div>
                    <div className={classes.ChooseForm__profile}>
                    <img className={classes.ChooseForm__profileimg} alt='family' src='https://www.larochecourbon.fr/sites/default/files/Famille_0.png'></img>
                        <Link to='/login'><button className={classes.Welcome__button}>As Parent</button></Link>
                    </div>
                    
                </div>
            </fieldset>
        </div>
        </Fade>
        
    );
}

export default chooseForm;