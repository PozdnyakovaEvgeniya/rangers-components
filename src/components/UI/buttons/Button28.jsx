import React from "react";
import classes from './buttons.module.css';

const Button28 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button7 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button28;