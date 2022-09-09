import React from "react";
import classes from './buttons.module.css';

const Button7 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button2 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button7;