import React from "react";
import classes from './buttons.module.css';

const Button16 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button4 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button16;