import React from "react";
import classes from './buttons.module.css';

const Button17 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button5 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button17;