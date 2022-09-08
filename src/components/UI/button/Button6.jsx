import React from "react";
import classes from './button.module.css';

const Button6 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button3 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button6;