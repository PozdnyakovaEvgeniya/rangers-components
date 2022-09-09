import React from "react";
import classes from './buttons.module.css';

const Button23 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button6 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button23;