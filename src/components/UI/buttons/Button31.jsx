import React from "react";
import classes from './buttons.module.css';

const Button31 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button8 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button31;