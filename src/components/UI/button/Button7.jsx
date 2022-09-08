import React from "react";
import classes from './button.module.css';

const Button7 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button4 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button7;