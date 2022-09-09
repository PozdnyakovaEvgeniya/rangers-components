import React from "react";
import classes from './buttons.module.css';

const Button10 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button3 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button10;