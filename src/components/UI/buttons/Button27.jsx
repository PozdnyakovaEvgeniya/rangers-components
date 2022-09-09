import React from "react";
import classes from './buttons.module.css';

const Button27 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button7 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button27;