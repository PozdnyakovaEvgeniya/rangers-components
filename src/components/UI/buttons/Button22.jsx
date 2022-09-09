import React from "react";
import classes from './buttons.module.css';

const Button22 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button6 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button22;