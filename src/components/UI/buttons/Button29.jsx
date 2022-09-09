import React from "react";
import classes from './buttons.module.css';

const Button29 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button8 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button29;