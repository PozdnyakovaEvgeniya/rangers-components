import React from "react";
import classes from './buttons.module.css';

const Button18 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button5 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button18;