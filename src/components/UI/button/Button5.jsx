import React from "react";
import classes from './button.module.css';

const Button5 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button2 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button5;