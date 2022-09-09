import React from "react";
import classes from './buttons.module.css';

const Button19 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button5 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button19;