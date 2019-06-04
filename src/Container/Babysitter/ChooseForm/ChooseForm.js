import React from 'react';
import Fade from 'react-reveal/Fade';

import classes from './ChooseForm.module.scss';

const chooseForm = () => {
    return (
        <Fade>
            <div className={classes.ChooseForm}>
            <fieldset className={classes.ChooseForm__fieldset}>
                <div className={classes.ChooseForm__profileBox}>
                    <div className={classes.ChooseForm__profile}>
                        <img className={classes.ChooseForm__profileimg} alt='sitter' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6855f99a-529e-474b-be73-aad11412f2a1/dc5u0tk-630d5aa2-98f9-4f20-b6ff-164c68657f59.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4NTVmOTlhLTUyOWUtNDc0Yi1iZTczLWFhZDExNDEyZjJhMVwvZGM1dTB0ay02MzBkNWFhMi05OGY5LTRmMjAtYjZmZi0xNjRjNjg2NTdmNTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.znbsBJXxjqblzzm-MOHMUuzpnqyFRt_ujNH8LVFCFfA'></img>
                        <button className={classes.Welcome__button}>Belépés szitterként</button>
                    </div>
                    <div className={classes.ChooseForm__profile}>
                    <img className={classes.ChooseForm__profileimg} alt='family' src='http://pngriver.com/wp-content/uploads/2018/04/Download-Family-Guy-PNG-Clipart.png'></img>
                        <button className={classes.Welcome__button}>Belépés családként</button>
                    </div>
                    
                </div>
            </fieldset>
        </div>
        </Fade>
        
    );
}

export default chooseForm;