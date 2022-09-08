import React from "react";
import classes from './button.module.css';

const Button10 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button7 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button10;