import React from "react";
import classes from './buttons.module.css';

const Button12 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button3 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button12;