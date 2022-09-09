import React from "react";
import classes from './buttons.module.css';

const Button26 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button7 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button26;