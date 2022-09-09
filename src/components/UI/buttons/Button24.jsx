import React from "react";
import classes from './buttons.module.css';

const Button24 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button6 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button24;