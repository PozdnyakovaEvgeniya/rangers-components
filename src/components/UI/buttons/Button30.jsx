import React from "react";
import classes from './buttons.module.css';

const Button30 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button8 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button30;