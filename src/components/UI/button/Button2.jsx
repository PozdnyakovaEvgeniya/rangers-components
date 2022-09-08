import React from 'react';
import classes from './button.module.css';

const Button2 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button1 + ' ' + classes.size2}>
            {children}
        </button>
    )
}

export default Button2;