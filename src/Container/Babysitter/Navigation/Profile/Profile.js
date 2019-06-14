import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import classes from './Profile.module.scss';

const profile = () => {
    return (
        <Fade>
            <div className={classes.ProfileBox}>
                <div className={classes.Profile}>
                    <div className={classes.Profile__top}>
                        <div className={classes.Profile__img}></div>
                        <div className={classes.Profile__Info}>
                            <h1 className={classes.Profile__Header}>Végh Bence</h1>
                            <h1 className={classes.Profile__Header}>18</h1>
                        </div>
                    </div>
                    <div className={classes.Profile__descriptionExtended}>
                        <p className={classes.ProfileParagraph}>Proin vel eros dui. Integer sit amet sem id mi pharetra maximus. Quisque vulputate est at quam dictum tempor. Fusce condimentum imperdiet orci eleifend aliquam. Morbi eget ultrices mi, eget ornare enim. Donec dictum tincidunt nibh a efficitur. Vestibulum a viverra neque, vitae tristique nulla. In non sem interdum mi rhoncus vulputate. Proin fermentum est at dolor pellentesque, vitae euismod eros laoreet.</p>
                    </div>
                    <Link to="/homepage"><button className={classes.ProfileExit}>X</button></Link>
                </div>
            </div>
        </Fade>
    );
}

export default profile;