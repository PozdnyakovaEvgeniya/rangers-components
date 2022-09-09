import React from "react";
import classes from './buttons.module.css';

const Button15 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button4 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button15;