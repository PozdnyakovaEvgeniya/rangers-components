import React from "react";
import classes from './button.module.css';

const Button8 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button5 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button8;