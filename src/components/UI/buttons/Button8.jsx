import React from "react";
import classes from './buttons.module.css';

const Button8 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button2 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button8;