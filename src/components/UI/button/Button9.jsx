import React from "react";
import classes from './button.module.css';

const Button9 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button6 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button9;