import React from "react";
import classes from './buttons.module.css';

const Button11 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button3 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button11;