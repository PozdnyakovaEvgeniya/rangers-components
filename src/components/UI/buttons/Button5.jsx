import React from "react";
import classes from './buttons.module.css';

const Button5 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button2 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button5;