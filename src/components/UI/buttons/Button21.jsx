import React from "react";
import classes from './buttons.module.css';

const Button21 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button6 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button21;