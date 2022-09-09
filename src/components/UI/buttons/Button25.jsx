import React from "react";
import classes from './buttons.module.css';

const Button25 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button7 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button25;