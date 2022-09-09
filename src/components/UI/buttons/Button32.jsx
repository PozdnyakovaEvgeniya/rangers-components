import React from "react";
import classes from './buttons.module.css';

const Button32 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button8 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button32;