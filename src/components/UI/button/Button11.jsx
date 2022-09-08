import React from "react";
import classes from './button.module.css';

const Button11 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button8 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button11;