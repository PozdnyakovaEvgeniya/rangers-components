import React from "react";
import classes from './buttons.module.css';

const Button9 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button3 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button9;