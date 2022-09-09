import React from "react";
import classes from './buttons.module.css';

const Button6 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button2 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button6;