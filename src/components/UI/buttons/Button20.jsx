import React from "react";
import classes from './buttons.module.css';

const Button20 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button5 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button20;