import React from "react";
import classes from './button.module.css';
import Icons from '../icon/icons.svg';

const DoubleButton2 = ({children, ...props}) => {
    return (
        <span className={classes.doublebutton + ' ' + classes.button5}>
            <button className={classes.settingButton2}>                
                <svg className={classes.icon}>
                  <use xlinkHref={Icons + '#img-082--setting-cog'} />
                </svg>
            </button>
            <button {...props} className={classes.size5}>
                {children}
            </button>
        </span>
    )
}

export default DoubleButton2;