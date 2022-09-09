import React from "react";
import classes from './buttons.module.css';

const Button13 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button4 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button13;