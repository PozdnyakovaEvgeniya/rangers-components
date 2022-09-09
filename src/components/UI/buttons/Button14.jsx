import React from "react";
import classes from './buttons.module.css';

const Button14 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button4 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button14;