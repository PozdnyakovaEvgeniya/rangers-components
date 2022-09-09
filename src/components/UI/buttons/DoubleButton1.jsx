import React from "react";
import classes from './buttons.module.css';
import Icons from '../icons/icons.svg';

const DoubleButton1 = ({children, ...props}) => {
    return (
        <span className={classes.doublebutton + ' ' + classes.button1}>
            <button className={classes.settingButton1 + ' ' + classes.insideButton}>                
                <svg className={classes.icon}>
                  <use xlinkHref={Icons + '#img-082--setting-cog'} />
                </svg>
            </button>
            <button {...props} className={classes.size5 + ' ' + classes.insideButton}>
                {children}
            </button>
        </span>
    )
}

export default DoubleButton1;